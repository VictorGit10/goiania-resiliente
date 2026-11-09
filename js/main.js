/* =====================================================================
   Goiânia Resiliente · comportamento da página
   ---------------------------------------------------------------------
   Os textos e links que mudam ficam em dados/:
     dados/convidados.js → perfis dos participantes
     dados/sessoes.js    → descrição e resumo de cada sessão
     dados/acervo.js     → vídeos, slides, transcrições, fotos, relatórios
   A programação (horários, títulos e nomes) fica no próprio index.html.
   Este arquivo junta as três coisas. Sem ele, a página continua legível:
   só não aparecem os perfis, os materiais e os resumos.
   ===================================================================== */
(function () {
  "use strict";

  /* ------------------------------------------------------------------
     Menu e abas (como no site original)
     ------------------------------------------------------------------ */
  var toggle = document.getElementById("menuToggle");
  var menu = document.getElementById("menu");
  toggle.addEventListener("click", function () {
    var aberto = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", aberto ? "true" : "false");
  });
  menu.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  var tabs = document.querySelectorAll(".tab");
  var paineis = { "tab-dia1": "painel-dia1", "tab-dia2": "painel-dia2" };
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (t) { t.setAttribute("aria-selected", "false"); });
      tab.setAttribute("aria-selected", "true");
      Object.keys(paineis).forEach(function (id) {
        var p = document.getElementById(paineis[id]);
        p.classList.toggle("ativo", id === tab.id);
      });
    });
  });

  /* ------------------------------------------------------------------
     Utilidades
     ------------------------------------------------------------------ */
  function el(tag, classe, texto) {
    var e = document.createElement(tag);
    if (classe) e.className = classe;
    if (texto != null) e.textContent = texto;
    return e;
  }
  /* Compara nomes sem diferenciar acentos, maiúsculas ou tipo de apóstrofo */
  function normaliza(t) {
    return String(t || "").normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/[’‘`´]/g, "'").replace(/\s+/g, " ").trim().toLowerCase();
  }
  /* Só aceita links http(s) ou caminhos dentro do próprio site */
  function linkSeguro(url) {
    url = String(url || "").trim();
    if (!url) return "";
    if (/^https?:\/\//i.test(url)) return url;
    if (/^[a-z][a-z0-9+.-]*:/i.test(url) || url.indexOf("//") === 0) return "";
    return url;
  }
  function semTitulo(nome) { return nome.replace(/^(dr|dra|prof|profa|dep)\.?\s+/i, ""); }
  function iniciais(nome) {
    var partes = semTitulo(nome).split(/\s+/);
    return (partes[0].charAt(0) + (partes.length > 1 ? partes[partes.length - 1].charAt(0) : "")).toUpperCase();
  }
  function ehPdf(url) { return /\.pdf($|[?#])/i.test(url); }
  function ehExterno(url) { return /^https?:/i.test(url); }

  /* Texto com parágrafos, "## subtítulo", "- lista" e **negrito** */
  function negrito(destino, linha) {
    linha.split(/(\*\*[^*]+\*\*)/).forEach(function (parte) {
      if (/^\*\*[^*]+\*\*$/.test(parte)) destino.appendChild(el("strong", null, parte.slice(2, -2)));
      else if (parte) destino.appendChild(document.createTextNode(parte));
    });
  }
  function textoRico(texto) {
    var box = el("div", "texto-rico");
    String(texto || "").replace(/\r/g, "").trim().split(/\n\s*\n/).forEach(function (bloco) {
      var linhas = bloco.split("\n").map(function (l) { return l.trim(); }).filter(Boolean);
      if (!linhas.length) return;
      if (/^##\s+/.test(linhas[0])) {
        box.appendChild(el("h4", null, linhas.shift().replace(/^##\s+/, "")));
        if (!linhas.length) return;
      }
      if (linhas.every(function (l) { return /^[-•]\s+/.test(l); })) {
        var ul = el("ul");
        linhas.forEach(function (l) { var li = el("li"); negrito(li, l.replace(/^[-•]\s+/, "")); ul.appendChild(li); });
        box.appendChild(ul);
      } else {
        var p = el("p");
        negrito(p, linhas.join(" "));
        box.appendChild(p);
      }
    });
    return box;
  }

  /* ------------------------------------------------------------------
     Sessões: o índice de todas as atividades com código (id="sessao-…")
     ------------------------------------------------------------------ */
  var textosSessao = window.GR_SESSOES || {};
  var sessoes = {};
  var ordemSessoes = [];
  document.querySelectorAll(".sessao[id^='sessao-']").forEach(function (box) {
    var id = box.id.replace(/^sessao-/, "");
    var details = box.querySelector("details");
    var painel = box.closest(".painel");
    var tab = painel && document.querySelector('[aria-controls="' + painel.id + '"]');
    var dia = tab ? tab.textContent.trim() : "";
    if (!dia) {
      var ant = box.previousElementSibling;
      while (ant && !ant.classList.contains("ed24-dia")) ant = ant.previousElementSibling;
      dia = ant ? ant.textContent.trim() : "";
    }
    var titulo = details ? details.querySelector("summary").firstChild.textContent.trim()
                         : box.querySelector(".conteudo").textContent.trim();
    var s = {
      id: id, box: box, details: details, tab: tab,
      edicao: /^2024-/.test(id) ? "2024" : "2026",
      dia: dia, hora: box.querySelector(".hora").textContent.trim(),
      titulo: titulo.replace(/^Painel · /, ""),
      textos: textosSessao[id] || {}
    };
    sessoes[id] = s;
    ordemSessoes.push(s);
  });
  function rotuloSessao(s) { return [s.dia, s.hora].filter(Boolean).join(" · ") + " — " + s.titulo; }

  var modal = document.getElementById("perfilModal");
  function abrirSessao(s, suave) {
    if (!s) return;
    if (modal && modal.open) modal.close();
    if (s.tab && s.tab.getAttribute("aria-selected") !== "true") s.tab.click();
    if (s.details) s.details.open = true;
    s.box.scrollIntoView({ behavior: suave === false ? "auto" : "smooth", block: "start" });
  }

  /* ------------------------------------------------------------------
     Participantes: liga os nomes da programação 2026 aos perfis
     ------------------------------------------------------------------ */
  var convidados = (Array.isArray(window.GR_CONVIDADOS) ? window.GR_CONVIDADOS : [])
    .filter(function (c) { return c && c.id && c.nome; });
  var perfis = {};
  var porNome = {};
  var agenda = {};
  var pessoas = {};      /* todos os nomes da programação 2026 */
  convidados.forEach(function (c) {
    perfis[c.id] = c;
    agenda[c.id] = [];
    (c.naProgramacao || []).concat([c.nome]).forEach(function (n) { porNome[normaliza(n)] = c; });
  });
  var participantesDaSessao = {};

  document.querySelectorAll("#programacao .papel").forEach(function (papel) {
    var alvo = papel.lastElementChild;
    if (!alvo || alvo.classList.contains("label")) return;
    var box = papel.closest(".sessao");
    var s = box && sessoes[box.id.replace(/^sessao-/, "")];
    var funcao = papel.querySelector(".label").textContent.trim();
    var frag = document.createDocumentFragment();
    var achou = false;
    alvo.textContent.split(" · ").forEach(function (parte, i) {
      if (i > 0) frag.appendChild(document.createTextNode(" · "));
      var m = parte.match(/^\s*([^(]+?)\s*(?:\((.*)\))?\s*$/);
      var nome = m ? m[1] : parte.trim();
      var inst = m && m[2] ? m[2] : "";
      var c = porNome[normaliza(nome)];
      /* Lista geral: só pessoas (ignora siglas soltas como "SECTI-GO") */
      if (/[a-zà-ú]/.test(nome)) {
        var chave = c ? "perfil:" + c.id : normaliza(semTitulo(nome));
        var p = pessoas[chave] || (pessoas[chave] = { nome: c ? c.nome : nome, inst: "", perfil: c, sessoes: [] });
        if (!p.inst && inst) p.inst = inst;
        if (s && !p.sessoes.some(function (x) { return x.s === s; })) p.sessoes.push({ s: s, funcao: funcao });
      }
      if (!c) { frag.appendChild(document.createTextNode(parte)); return; }
      achou = true;
      var a = el("a", "conv-link", nome);
      a.href = "#convidado-" + c.id;
      a.setAttribute("data-convidado", c.id);
      frag.appendChild(a);
      if (inst) frag.appendChild(document.createTextNode(" (" + inst + ")"));
      if (s) {
        if (!agenda[c.id].some(function (x) { return x.s === s && x.funcao === funcao; })) agenda[c.id].push({ s: s, funcao: funcao });
        var lista = participantesDaSessao[s.id] || (participantesDaSessao[s.id] = []);
        if (lista.indexOf(c) < 0) lista.push(c);
      }
    });
    if (achou) { alvo.textContent = ""; alvo.appendChild(frag); }
  });

  /* Foto: se o arquivo não existir, fica o quadro com as iniciais */
  function fotoDe(c, classe) {
    var box = el("div", classe);
    box.appendChild(el("span", classe === "conv-foto" ? "conv-iniciais" : "mini-iniciais", iniciais(c.nome)));
    if (classe === "conv-foto") box.appendChild(el("span", "conv-embreve", "Foto em breve"));
    var img = el("img");
    img.alt = classe === "conv-foto" ? "Foto de " + c.nome : "";
    img.loading = "lazy";
    img.addEventListener("error", function () { img.remove(); box.classList.add("sem-foto"); });
    img.src = "assets/img/convidados/" + c.id + ".jpg";
    box.appendChild(img);
    return box;
  }

  function linkSessao(s, texto) {
    var a = el("a", null, texto || s.titulo);
    a.href = "#sessao-" + s.id;
    return a;
  }

  function cartaoConvidado(c) {
    var art = el("article", "convidado");
    art.id = "convidado-" + c.id;
    art.appendChild(fotoDe(c, "conv-foto"));
    var txt = el("div", "conv-texto");
    txt.appendChild(el("strong", "conv-nome", c.nome));
    if (c.cargo) txt.appendChild(el("span", "cargo", c.cargo));
    if (c.resumo) txt.appendChild(el("p", "conv-resumo", c.resumo));
    if (c.minibio && c.minibio !== c.resumo) {
      var d = el("details", "ler-mais");
      d.appendChild(el("summary", null, "Ler biografia completa"));
      d.appendChild(el("p", null, c.minibio));
      txt.appendChild(d);
    }
    var lista = agenda[c.id] || [];
    if (lista.length) {
      var ag = el("div", "conv-agenda");
      ag.appendChild(el("span", "label", "Na programação"));
      var ul = el("ul");
      lista.forEach(function (x) {
        var li = el("li");
        li.appendChild(el("span", "conv-quando", [x.s.dia, x.s.hora, x.funcao].filter(Boolean).join(" · ")));
        li.appendChild(linkSessao(x.s));
        ul.appendChild(li);
      });
      ag.appendChild(ul);
      txt.appendChild(ag);
    }
    art.appendChild(txt);
    return art;
  }

  var gridConv = document.getElementById("convidadosGrid");
  if (gridConv) {
    var visiveis = convidados.filter(function (c) { return !c.ocultoNoGrid; });
    visiveis.forEach(function (c) { gridConv.appendChild(cartaoConvidado(c)); });
    var aviso = el("div", "conv-aviso");
    aviso.appendChild(el("strong", null, "Mais perfis em breve"));
    aviso.appendChild(el("p", null, "Os perfis dos demais participantes serão publicados em breve. Todos os nomes estão na lista abaixo."));
    var ir = el("a", "btn", "Ver todos os participantes ↓");
    ir.href = "#todos-participantes";
    aviso.appendChild(ir);
    /* Se os perfis fecham a última linha de 3, o aviso ocupa a linha inteira. */
    if (visiveis.length % 3 === 0) aviso.classList.add("full");
    gridConv.appendChild(aviso);
  }

  /* Lista com todos os participantes da 2ª edição, em ordem alfabética */
  var listaTodos = document.getElementById("todosLista");
  if (listaTodos) {
    Object.keys(pessoas).map(function (k) { return pessoas[k]; })
      .sort(function (a, b) { return normaliza(semTitulo(a.nome)).localeCompare(normaliza(semTitulo(b.nome)), "pt-BR"); })
      .forEach(function (p) {
        var li = el("li");
        var quem = el("div", "todos-quem");
        if (p.perfil) {
          var a = el("a", "conv-link", p.nome);
          a.href = "#convidado-" + p.perfil.id;
          a.setAttribute("data-convidado", p.perfil.id);
          quem.appendChild(a);
        } else {
          quem.appendChild(el("strong", null, p.nome));
        }
        var inst = p.perfil && p.perfil.cargo ? p.perfil.cargo : p.inst;
        if (inst) quem.appendChild(el("span", "cargo", inst));
        li.appendChild(quem);
        var ativ = el("div", "todos-sessoes");
        p.sessoes.forEach(function (x) {
          var linha = el("span");
          linha.appendChild(el("span", "conv-quando", [x.s.dia.replace(/ · .*/, ""), x.s.hora, x.funcao].join(" · ")));
          linha.appendChild(linkSessao(x.s));
          ativ.appendChild(linha);
        });
        li.appendChild(ativ);
        listaTodos.appendChild(li);
      });
    var conta = document.getElementById("todosConta");
    if (conta) conta.textContent = listaTodos.children.length + " nomes";
  }

  /* A lista geral começa fechada. Os atalhos ("Ver todos os participantes")
     abrem o bloco antes de rolar até ele. */
  var blocoTodos = document.getElementById("todos-participantes");
  if (blocoTodos && blocoTodos.tagName === "DETAILS") {
    var abrirTodos = function () { blocoTodos.open = true; };
    var cabecaTodos = blocoTodos.querySelector(".todos-cabeca");
    if (cabecaTodos && listaTodos) {
      cabecaTodos.setAttribute("aria-label", "Todos os participantes: " + listaTodos.children.length + " nomes. Abrir ou fechar a lista.");
    }
    document.addEventListener("click", function (e) {
      var atalho = e.target.closest && e.target.closest('a[href="#todos-participantes"]');
      if (atalho) abrirTodos();
    });
    if (window.location.hash === "#todos-participantes") abrirTodos();
    window.addEventListener("hashchange", function () {
      if (window.location.hash === "#todos-participantes") abrirTodos();
    });
  }

  /* Janela do perfil: abre sem sair do lugar. Sem <dialog>, o link leva ao cartão. */
  var abrirPerfil = null;
  if (modal && typeof modal.showModal === "function") {
    var corpo = document.getElementById("perfilCorpo");
    document.getElementById("perfilFechar").addEventListener("click", function () { modal.close(); });
    modal.addEventListener("click", function (e) { if (e.target === modal) modal.close(); });
    abrirPerfil = function (c) {
      if (!c) return;
      corpo.textContent = "";
      var art = cartaoConvidado(c);
      art.removeAttribute("id");
      corpo.appendChild(art);
      var ver = el("a", "modal-todos", "Ver todos os participantes →");
      ver.href = "#todos-participantes";
      ver.addEventListener("click", function () { modal.close(); });
      corpo.appendChild(ver);
      if (!modal.open) modal.showModal();
      corpo.scrollTop = 0;
    };
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest("a.conv-link");
      if (!a) return;
      var c = perfis[a.getAttribute("data-convidado")];
      if (!c) return;
      e.preventDefault();
      abrirPerfil(c);
    });
  }

  /* ------------------------------------------------------------------
     Acervo: materiais de dados/acervo.js + resumos de dados/sessoes.js
     ------------------------------------------------------------------ */
  var TIPOS = {
    resumos: "Resumos", videos: "Vídeos", apresentacoes: "Apresentações",
    transcricoes: "Transcrições", fotos: "Fotos", relatorios: "Relatórios", artigos: "Artigos"
  };
  var TIPO_CURTO = {
    resumos: "Resumo", videos: "Vídeo", apresentacoes: "Slides",
    transcricoes: "Transcrição", fotos: "Fotos", relatorios: "Relatório", artigos: "Documento"
  };
  function idYoutube(url) {
    var m = String(url).match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/))([A-Za-z0-9_-]{11})/);
    return m ? m[1] : "";
  }
  function rotuloLink(item, url) {
    if (item.tipo === "resumos") return "Ler resumo →";
    if (idYoutube(url)) return "Assistir no YouTube ↗";
    if (ehPdf(url)) return "Abrir PDF ↗";
    if (item.tipo === "transcricoes") return "Ler transcrição ↗";
    if (item.tipo === "fotos") return "Ver fotos ↗";
    return "Abrir ↗";
  }
  function abrirEmNovaAba(a, url) {
    if (ehExterno(url) || ehPdf(url)) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
  }

  var acervo = (Array.isArray(window.GR_ACERVO) ? window.GR_ACERVO : []).filter(function (i) {
    if (!i || !i.tipo || !i.titulo) return false;
    if (i.link && !linkSeguro(i.link)) { if (window.console) console.warn("Acervo: link ignorado", i.link); return false; }
    if (i.sessao && !sessoes[i.sessao] && window.console) console.warn("Acervo: sessão desconhecida", i.sessao);
    return true;
  });
  /* Cada resumo publicado em dados/sessoes.js vira um cartão "Resumo" */
  ordemSessoes.forEach(function (s) {
    if (String(s.textos.resumo || "").trim()) {
      acervo.push({ tipo: "resumos", edicao: Number(s.edicao), sessao: s.id,
                    titulo: "Resumo da sessão", link: "#sessao-" + s.id });
    }
  });

  /* Materiais com link, por sessão */
  var materiaisDaSessao = {};
  acervo.forEach(function (i) {
    if (i.sessao && linkSeguro(i.link) && i.tipo !== "resumos") {
      (materiaisDaSessao[i.sessao] || (materiaisDaSessao[i.sessao] = [])).push(i);
    }
  });

  /* Avisos sem link somem quando já existe material com link do mesmo tipo e edição */
  var publicados = {};
  acervo.forEach(function (i) { if (linkSeguro(i.link)) publicados[i.tipo + "|" + i.edicao] = true; });
  var itensAcervo = acervo
    .map(function (i, n) { return { i: i, n: n }; })
    .filter(function (o) { return linkSeguro(o.i.link) || !publicados[o.i.tipo + "|" + o.i.edicao]; })
    .sort(function (a, b) {
      var sa = a.i.sessao && sessoes[a.i.sessao], sb = b.i.sessao && sessoes[b.i.sessao];
      return (Number(b.i.edicao) || 0) - (Number(a.i.edicao) || 0) ||
             (linkSeguro(b.i.link) ? 1 : 0) - (linkSeguro(a.i.link) ? 1 : 0) ||
             (sa ? ordemSessoes.indexOf(sa) : 999) - (sb ? ordemSessoes.indexOf(sb) : 999) ||
             a.n - b.n;
    })
    .map(function (o) { return o.i; });

  var gridAcervo = document.getElementById("acervoGrid");
  if (gridAcervo) {
    itensAcervo.forEach(function (item) {
      var url = linkSeguro(item.link);
      var s = item.sessao && sessoes[item.sessao];
      var art = el("article", "item" + (url ? " publicado" : ""));
      art.setAttribute("data-tipo", item.tipo);
      art.setAttribute("data-edicao", String(item.edicao || ""));
      art.setAttribute("data-sessao", s ? s.id : "");
      var yt = url && idYoutube(url);
      if (yt) {
        var th = el("a", "item-thumb");
        th.href = url; th.target = "_blank"; th.rel = "noopener noreferrer";
        th.setAttribute("aria-label", "Assistir: " + item.titulo);
        var im = el("img");
        im.src = "https://i.ytimg.com/vi/" + yt + "/hqdefault.jpg";
        im.alt = ""; im.loading = "lazy";
        th.appendChild(im);
        th.appendChild(el("span", "item-play", "▶"));
        art.appendChild(th);
      }
      art.appendChild(el("span", "tipo", "Edição " + item.edicao + " · " + (TIPOS[item.tipo] || item.tipo)));
      if (s) {
        var ps = el("span", "item-painel");
        ps.appendChild(linkSessao(s, [s.dia.replace(/ · .*/, ""), s.titulo].join(" · ")));
        art.appendChild(ps);
      } else if (item.painel) {
        art.appendChild(el("span", "item-painel", item.painel));
      }
      art.appendChild(el("strong", null, item.titulo));
      if (item.texto) art.appendChild(el("p", "item-texto", item.texto));
      if (url) {
        var a = el("a", "item-link", rotuloLink(item, url));
        a.href = url;
        abrirEmNovaAba(a, url);
        art.appendChild(a);
      } else {
        art.appendChild(el("span", "status", item.status || (String(item.edicao) === "2026" ? "Disponível após o evento" : "Em breve")));
      }
      gridAcervo.appendChild(art);
    });
  }

  /* ------------------------------------------------------------------
     Detalhe de cada sessão: descrição, perfis, materiais e resumo
     ------------------------------------------------------------------ */
  function bloco(rotulo) {
    var b = el("div", "papel sessao-bloco");
    b.appendChild(el("span", "label", rotulo));
    var conteudo = el("div", "sessao-bloco-conteudo");
    b.appendChild(conteudo);
    return { box: b, conteudo: conteudo };
  }

  ordemSessoes.forEach(function (s) {
    if (!s.details) return;
    var detalhe = s.details.querySelector(".detalhe");
    var textos = s.textos;
    var mats = materiaisDaSessao[s.id] || [];
    var temResumo = !!String(textos.resumo || "").trim();

    /* Descrição da mesa, antes dos nomes */
    if (String(textos.descricao || "").trim()) {
      detalhe.insertBefore(el("p", "sessao-descricao", textos.descricao.trim()), detalhe.firstChild);
    }

    /* Perfis de quem está na sessão */
    var gente = participantesDaSessao[s.id] || [];
    if (gente.length) {
      var bp = bloco("Perfis");
      var lista = el("div", "perfis-mini");
      gente.forEach(function (c) {
        var a = el("a", "conv-link perfil-mini");
        a.href = "#convidado-" + c.id;
        a.setAttribute("data-convidado", c.id);
        a.appendChild(fotoDe(c, "mini-foto"));
        var t = el("span", "perfil-mini-texto");
        t.appendChild(el("strong", null, c.nome));
        if (c.cargo) t.appendChild(el("span", null, c.cargo));
        a.appendChild(t);
        lista.appendChild(a);
      });
      bp.conteudo.appendChild(lista);
      detalhe.appendChild(bp.box);
    }

    /* Materiais (slides, vídeo, transcrição…) */
    if (mats.length || s.edicao === "2026") {
      var bm = bloco("Materiais");
      if (mats.length) {
        var ml = el("div", "sessao-materiais");
        mats.forEach(function (i) {
          var url = linkSeguro(i.link);
          var a = el("a", "sessao-material");
          a.href = url;
          abrirEmNovaAba(a, url);
          a.appendChild(el("span", "sessao-material-tipo", TIPO_CURTO[i.tipo] || i.tipo));
          a.appendChild(el("span", null, i.titulo + (ehExterno(url) || ehPdf(url) ? " ↗" : "")));
          ml.appendChild(a);
        });
        bm.conteudo.appendChild(ml);
      } else {
        bm.conteudo.appendChild(el("span", "sessao-embreve", "Os materiais desta sessão (slides, vídeo e transcrição) serão publicados aqui após o evento."));
      }
      detalhe.appendChild(bm.box);
    }

    /* Resumo da sessão (dados/sessoes.js) */
    if (temResumo) {
      var br = bloco("Resumo");
      var d = el("details", "ler-mais sessao-resumo");
      d.appendChild(el("summary", null, "Ler o resumo da sessão"));
      d.appendChild(textoRico(textos.resumo));
      d.appendChild(el("p", "sessao-resumo-nota", "Resumo elaborado a partir da gravação da sessão e revisado pela organização."));
      br.conteudo.appendChild(d);
      detalhe.appendChild(br.box);
    }

    /* Endereço da sessão, para compartilhar */
    var rodape = el("div", "sessao-rodape");
    var copiar = el("a", "sessao-copiar", "Copiar link desta sessão");
    copiar.href = "#sessao-" + s.id;
    copiar.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      var url = location.href.split("#")[0] + "#sessao-" + s.id;
      if (history.replaceState) history.replaceState(null, "", "#sessao-" + s.id);
      function ok() { copiar.textContent = "Link copiado ✓"; setTimeout(function () { copiar.textContent = "Copiar link desta sessão"; }, 2200); }
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(ok, ok);
      else ok();
    });
    rodape.appendChild(copiar);
    detalhe.appendChild(rodape);

    /* Selos na linha da sessão: o que já está publicado */
    var tipos = [];
    mats.forEach(function (i) { var t = TIPO_CURTO[i.tipo]; if (t && tipos.indexOf(t) < 0) tipos.push(t); });
    if (temResumo) tipos.push("Resumo");
    if (tipos.length) {
      var selo = el("span", "sessao-selo", tipos.join(" · "));
      var summary = s.details.querySelector("summary");
      summary.insertBefore(selo, summary.querySelector(".seta"));
    }
  });

  /* ------------------------------------------------------------------
     Filtros do acervo: tipo, edição e atividade
     ------------------------------------------------------------------ */
  var vazio = document.getElementById("acervoVazio");
  var filtro = { tipo: "todos", edicao: "todas", sessao: "" };
  function aplicarFiltros() {
    var visiveis = 0;
    document.querySelectorAll("#acervoGrid .item").forEach(function (item) {
      var ok = (filtro.tipo === "todos" || item.getAttribute("data-tipo") === filtro.tipo) &&
               (filtro.edicao === "todas" || item.getAttribute("data-edicao") === filtro.edicao) &&
               (!filtro.sessao || item.getAttribute("data-sessao") === filtro.sessao);
      item.style.display = ok ? "" : "none";
      if (ok) visiveis++;
    });
    if (vazio) vazio.hidden = visiveis > 0;
  }
  function marcar(grupo, chip) {
    grupo.forEach(function (c) { c.setAttribute("aria-pressed", c === chip ? "true" : "false"); });
  }
  var chipsTipo = document.querySelectorAll(".chip[data-filtro]");
  var chipsEdicao = document.querySelectorAll(".chip[data-edicao]");
  var seletor = document.getElementById("filtroAtividade");
  chipsTipo.forEach(function (chip) {
    chip.addEventListener("click", function () {
      marcar(chipsTipo, chip); filtro.tipo = chip.getAttribute("data-filtro"); aplicarFiltros();
    });
  });
  function escolherEdicao(valor) {
    chipsEdicao.forEach(function (c) { if (c.getAttribute("data-edicao") === valor) marcar(chipsEdicao, c); });
    filtro.edicao = valor;
    if (seletor && filtro.sessao && sessoes[filtro.sessao] && valor !== "todas" && sessoes[filtro.sessao].edicao !== valor) {
      seletor.value = ""; filtro.sessao = "";
    }
    aplicarFiltros();
  }
  chipsEdicao.forEach(function (chip) {
    chip.addEventListener("click", function () { escolherEdicao(chip.getAttribute("data-edicao")); });
  });
  document.querySelectorAll("[data-ir-edicao]").forEach(function (a) {
    a.addEventListener("click", function () { escolherEdicao(a.getAttribute("data-ir-edicao")); });
  });
  if (seletor) {
    var grupos = {};
    ordemSessoes.forEach(function (s) {
      var nome = s.edicao === "2024" ? "1ª edição · 2024" : "2ª edição · " + s.dia;
      if (!grupos[nome]) { grupos[nome] = el("optgroup"); grupos[nome].label = nome; seletor.appendChild(grupos[nome]); }
      var o = el("option", null, s.hora + " — " + s.titulo);
      o.value = s.id;
      grupos[nome].appendChild(o);
    });
    seletor.addEventListener("change", function () {
      filtro.sessao = seletor.value;
      if (filtro.sessao) escolherEdicao(sessoes[filtro.sessao].edicao);
      else aplicarFiltros();
    });
  }

  /* ------------------------------------------------------------------
     Endereços diretos: #sessao-… abre a sessão; #convidado-… mostra o perfil
     ------------------------------------------------------------------ */
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest('a[href^="#sessao-"]');
    if (!a || a.classList.contains("sessao-copiar")) return;
    var s = sessoes[a.getAttribute("href").slice(8)];
    if (!s) return;
    e.preventDefault();
    if (history.pushState) history.pushState(null, "", "#sessao-" + s.id);
    abrirSessao(s);
  });
  function seguirEndereco(suave) {
    var h = decodeURIComponent(location.hash || "");
    if (/^#sessao-/.test(h)) abrirSessao(sessoes[h.slice(8)], suave);
    else if (/^#convidado-/.test(h)) {
      var alvo = document.getElementById(h.slice(1));
      if (alvo) alvo.scrollIntoView();
      else if (abrirPerfil) abrirPerfil(perfis[h.slice(11)]);
    }
    else if (h === "#todos-participantes") {
      var lista = document.getElementById("todos-participantes");
      if (lista) {
        if (lista.tagName === "DETAILS") lista.open = true;
        lista.scrollIntoView();
      }
    }
  }
  window.addEventListener("hashchange", function () { seguirEndereco(true); });
  seguirEndereco(false);

  /* Fontes e imagens terminam de carregar depois do primeiro salto e podem
     deslocar a página. Reancora o endereço direto, a menos que a pessoa já
     tenha começado a rolar. */
  var usuarioMexeu = false;
  ["wheel", "touchstart", "keydown", "click"].forEach(function (ev) {
    window.addEventListener(ev, function () { usuarioMexeu = true; }, { passive: true, once: true });
  });
  function alvoDoHash() {
    var h = decodeURIComponent(location.hash || "");
    if (/^#sessao-/.test(h)) return sessoes[h.slice(8)] && sessoes[h.slice(8)].box;
    if (/^#convidado-/.test(h)) return document.getElementById(h.slice(1));
    if (h === "#todos-participantes") return document.getElementById("todos-participantes");
    return null;
  }
  var jaReancorou = false;
  function reancorar() {
    if (usuarioMexeu) return;
    var alvo = alvoDoHash();
    if (!alvo) return;
    /* O primeiro ajuste sempre acontece. Nos seguintes, se a pessoa já
       rolou para longe do alvo, não puxa a página de volta. */
    if (jaReancorou) {
      var r = alvo.getBoundingClientRect();
      if (r.bottom < -200 || r.top > window.innerHeight + 200) return;
    }
    seguirEndereco(false);
    jaReancorou = true;
  }
  window.addEventListener("load", reancorar);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(reancorar);

  /* Ano no rodapé */
  document.getElementById("ano").textContent = new Date().getFullYear();
})();
