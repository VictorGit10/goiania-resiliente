/* =====================================================================
   PÁGINA DA SESSÃO · resumo, slides, participantes e transcrição
   Lê dados/convidados.js, dados/sessoes.js, dados/acervo.js e
   dados/transcricoes/<código>.js (carregado sob demanda).
   ===================================================================== */
(function () {
  "use strict";

  /* Ordem real do dia: o monitoramento aconteceu antes do matchmaking. */
  var ORDEM = [
    "d1-abertura",
    "d1-cidades-cerrado",
    "d1-goiania-onde-estamos",
    "d1-governanca",
    "d1-monitoramento",
    "d1-matchmaking",
    "d1-gestao-municipal"
  ];

  /* Paleta do site. O texto é escolhido por contraste. */
  var CORES = [
    { fundo: "#FCCB02", texto: "#000000" },
    { fundo: "#0037EA", texto: "#FFFFFF" },
    { fundo: "#049E6A", texto: "#000000" },
    { fundo: "#FE8EAC", texto: "#000000" },
    { fundo: "#DB2529", texto: "#FFFFFF" },
    { fundo: "#F15EEB", texto: "#000000" }
  ];
  var NEUTRA = { fundo: "#DCDCDC", texto: "#000000" };

  var codigo = "";
  var dados = null;
  var perfis = {};
  var porId = {};
  var falas = [];
  var estado = { busca: "", locutor: null };
  var ultimoFoco = null;
  var timerBusca = null;
  var semMovimento = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------------------
     Utilidades (mesmas regras de js/main.js)
     ------------------------------------------------------------------ */
  function el(tag, classe, texto) {
    var e = document.createElement(tag);
    if (classe) e.className = classe;
    if (texto != null) e.textContent = texto;
    return e;
  }
  function normaliza(t) {
    return String(t || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/[’‘`´]/g, "'").replace(/\s+/g, " ").trim().toLowerCase();
  }
  /* Sem juntar espaços: os índices precisam bater com o texto original. */
  function normalizaIndices(t) {
    return String(t || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/[’‘`´]/g, "'").toLowerCase();
  }
  function semTitulo(nome) { return String(nome || "").replace(/^(dr|dra|prof|profa|dep)\.?\s+/i, ""); }
  function iniciais(nome) {
    var partes = semTitulo(nome).split(/\s+/);
    return (partes[0].charAt(0) + (partes.length > 1 ? partes[partes.length - 1].charAt(0) : "")).toUpperCase();
  }
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
  function fotoDe(c) {
    var box = el("div", "conv-foto");
    box.appendChild(el("span", "conv-iniciais", iniciais(c.nome)));
    box.appendChild(el("span", "conv-embreve", "Foto em breve"));
    var img = el("img");
    img.alt = "Foto de " + c.nome;
    img.loading = "lazy";
    img.addEventListener("error", function () { img.remove(); box.classList.add("sem-foto"); });
    img.src = "assets/img/convidados/" + c.id + ".jpg";
    box.appendChild(img);
    return box;
  }

  /* ------------------------------------------------------------------
     Perfis
     ------------------------------------------------------------------ */
  (window.GR_CONVIDADOS || []).forEach(function (c) {
    if (!c || !c.id) return;
    porId[c.id] = c;
    [c.nome].concat(c.naProgramacao || []).forEach(function (n) {
      if (n) perfis[normaliza(n)] = c;
    });
  });
  function perfilDe(nome) { return perfis[normaliza(nome)] || null; }

  /* ------------------------------------------------------------------
     Estado da página
     ------------------------------------------------------------------ */
  function erro() {
    var conteudo = document.getElementById("sessaoConteudo");
    var box = document.getElementById("sessaoErro");
    if (conteudo) conteudo.hidden = true;
    if (box) box.hidden = false;
    document.title = "Sessão não encontrada — Goiânia Resiliente";
  }

  function duracao(a, b) {
    function seg(t) {
      var p = String(t || "0:0:0").split(":").map(Number);
      return (p[0] || 0) * 3600 + (p[1] || 0) * 60 + (p[2] || 0);
    }
    var d = Math.max(0, seg(b) - seg(a));
    var h = Math.floor(d / 3600);
    var m = Math.round((d % 3600) / 60);
    if (m === 60) { h += 1; m = 0; }
    return (h ? h + "h" : "") + (m ? String(m).padStart(2, "0") + "min" : (h ? "" : "0min"));
  }

  function corDosLocutores() {
    var mapa = {};
    var i = 0;
    (dados.locutores || []).forEach(function (l) {
      if (normaliza(l.nome) === "voz nao identificada") {
        mapa[l.nome] = NEUTRA;
      } else {
        mapa[l.nome] = CORES[i % CORES.length];
        i += 1;
      }
    });
    return mapa;
  }

  /* ------------------------------------------------------------------
     Cabeçalho, resumo, participantes e slides
     ------------------------------------------------------------------ */
  function renderCabecalho() {
    document.title = dados.titulo + " — Goiânia Resiliente";
    document.getElementById("sessaoTitulo").textContent = dados.titulo;
    document.getElementById("sessaoHora").textContent = dados.hora || "Sessão";
    document.getElementById("sessaoDiaHora").textContent = [dados.dia, dados.hora].filter(Boolean).join(" · ");

    var meta = document.getElementById("sessaoMeta");
    meta.textContent = "";
    meta.appendChild(el("span", null, (dados.segmentos || []).length + " falas"));
    meta.appendChild(el("span", null, (dados.locutores || []).length + " locutores"));
    if (dados.segmentos && dados.segmentos.length) {
      var d = duracao(dados.segmentos[0].t, dados.segmentos[dados.segmentos.length - 1].t);
      if (d) meta.appendChild(el("span", null, d));
    }
    var completo = document.getElementById("linkCompleta");
    if (completo) completo.href = "materiais/2026/dia1-transcricao-completa.md";
  }

  function ocultarLinkSubnav(id) {
    var a = document.querySelector('.sessao-subnav a[href="#' + id + '"]');
    if (a) a.hidden = true;
  }

  function renderResumo() {
    var sessao = (window.GR_SESSOES || {})[codigo];
    var texto = sessao && String(sessao.resumo || "").trim();
    if (!texto) {
      document.getElementById("resumo").hidden = true;
      ocultarLinkSubnav("resumo");
      return;
    }
    var box = document.getElementById("resumoTexto");
    box.textContent = "";
    box.appendChild(textoRico(texto));
  }

  function renderParticipantes(cores) {
    var box = document.getElementById("participantesLista");
    box.textContent = "";
    var lista = dados.locutores || [];
    if (!lista.length) {
      document.getElementById("participantes").hidden = true;
      ocultarLinkSubnav("participantes");
      return;
    }
    lista.forEach(function (l) {
      var c = perfilDe(l.nome);
      var cor = cores[l.nome] || NEUTRA;
      var chip;
      if (c) {
        chip = el("a", "participante conv-link");
        chip.href = "#convidado-" + c.id;
        chip.setAttribute("data-convidado", c.id);
      } else {
        chip = el("span", "participante sem-perfil");
      }
      chip.style.setProperty("--cor", cor.fundo);
      chip.appendChild(el("span", "ponto"));
      var texto = el("span");
      texto.appendChild(el("span", null, l.nome));
      var sub;
      if (c && c.cargo) sub = c.cargo;
      else if (normaliza(l.nome) === "voz nao identificada") sub = "Falas não atribuídas";
      else sub = "Perfil não cadastrado";
      texto.appendChild(el("small", null, sub));
      chip.appendChild(texto);
      box.appendChild(chip);
    });
  }

  function renderSlides() {
    var lista = (window.GR_ACERVO || []).filter(function (i) {
      return i && i.tipo === "apresentacoes" && i.sessao === codigo && i.link;
    });
    var secao = document.getElementById("slides");
    var link = document.getElementById("linkSlides");
    if (!lista.length) {
      if (secao) secao.hidden = true;
      if (link) link.hidden = true;
      ocultarLinkSubnav("slides");
      return;
    }
    var box = document.getElementById("slidesLista");
    box.textContent = "";
    lista.forEach(function (i) {
      var card = el("article", "slide-card");
      card.appendChild(el("span", "tipo", "Slides"));
      card.appendChild(el("h3", null, i.titulo));
      if (i.texto) card.appendChild(el("p", null, i.texto));
      var a = el("a", null, "Abrir PDF ↗");
      a.href = i.link;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      card.appendChild(a);
      box.appendChild(card);
    });
  }

  /* ------------------------------------------------------------------
     Transcrição
     ------------------------------------------------------------------ */
  function destacar(texto, termo) {
    var frag = document.createDocumentFragment();
    var alvo = normalizaIndices(termo);
    if (!alvo) { frag.appendChild(document.createTextNode(texto)); return frag; }
    var norm = normalizaIndices(texto);
    var i = 0;
    while (i < texto.length) {
      var pos = norm.indexOf(alvo, i);
      if (pos < 0) break;
      if (pos > i) frag.appendChild(document.createTextNode(texto.slice(i, pos)));
      var mark = document.createElement("mark");
      mark.textContent = texto.slice(pos, pos + alvo.length);
      frag.appendChild(mark);
      i = pos + alvo.length;
    }
    if (i < texto.length) frag.appendChild(document.createTextNode(texto.slice(i)));
    return frag;
  }

  function renderTranscricao(cores) {
    var lista = document.getElementById("transcricaoLista");
    lista.textContent = "";
    falas = [];
    var frag = document.createDocumentFragment();

    (dados.segmentos || []).forEach(function (seg) {
      var id = "t-" + seg.t.replace(/:/g, "-");
      var fala = el("article", "fala");
      fala.id = id;
      fala.setAttribute("data-locutor", seg.s);

      var hora = el("a", "fala-hora", seg.t);
      hora.href = "#t=" + seg.t.replace(/:/g, "-");
      hora.addEventListener("click", function (e) {
        e.preventDefault();
        irParaFala(seg.t);
      });
      fala.appendChild(hora);

      var loc = el("div", "fala-locutor");
      var c = perfilDe(seg.s);
      var cor = cores[seg.s] || NEUTRA;
      loc.style.setProperty("--cor", cor.fundo);
      loc.style.setProperty("--texto", cor.texto);
      var nome;
      if (c) {
        nome = el("a", "conv-link", seg.s);
        nome.href = "#convidado-" + c.id;
        nome.setAttribute("data-convidado", c.id);
      } else {
        nome = el("span", "sem-perfil", seg.s);
      }
      loc.appendChild(nome);
      fala.appendChild(loc);

      var texto = el("p", "fala-texto", seg.x);
      fala.appendChild(texto);

      var ver = el("button", "ver-contexto", "Ver no contexto");
      ver.type = "button";
      ver.hidden = true;
      ver.addEventListener("click", function () { verNoContexto(seg.t); });
      fala.appendChild(ver);

      falas.push({ seg: seg, el: fala, texto: texto, botao: ver, busca: normaliza(seg.x) + " " + normaliza(seg.s) });
      frag.appendChild(fala);
    });

    lista.appendChild(frag);
  }

  function aplicarFiltro() {
    var termo = normaliza(estado.busca);
    var loc = estado.locutor;
    var visiveis = 0;

    falas.forEach(function (item) {
      var procura = item.busca;
      var bateTexto = !termo || procura.indexOf(termo) >= 0;
      var bateLocutor = !loc || item.seg.s === loc;
      var visivel = bateTexto && bateLocutor;
      item.el.hidden = !visivel;
      if (visivel) visiveis += 1;

      if (termo) item.texto.replaceChildren(destacar(item.seg.x, estado.busca));
      else item.texto.textContent = item.seg.x;

      item.botao.hidden = !(termo || loc) || !visivel;
    });

    var contador = document.getElementById("transcricaoContador");
    if (contador) {
      contador.textContent = (termo || loc)
        ? visiveis + " de " + falas.length + " falas"
        : falas.length + " falas";
    }
    var vazio = document.getElementById("transcricaoVazia");
    if (vazio) vazio.hidden = visiveis !== 0;
    var chips = document.querySelectorAll(".locutor-chip");
    chips.forEach(function (chip) {
      chip.setAttribute("aria-pressed", String(chip.getAttribute("data-locutor") === (loc || "")));
    });
  }

  function renderFiltro(cores) {
    var box = document.getElementById("filtroLocutores");
    box.textContent = "";
    var todos = el("button", "locutor-chip", "Todos");
    todos.type = "button";
    todos.setAttribute("data-locutor", "");
    todos.setAttribute("aria-pressed", "true");
    todos.addEventListener("click", function () {
      estado.locutor = null;
      aplicarFiltro();
    });
    box.appendChild(todos);

    (dados.locutores || []).forEach(function (l) {
      var cor = cores[l.nome] || NEUTRA;
      var chip = el("button", "locutor-chip");
      chip.type = "button";
      chip.setAttribute("data-locutor", l.nome);
      chip.setAttribute("aria-pressed", "false");
      chip.style.setProperty("--cor", cor.fundo);
      chip.appendChild(el("span", "ponto"));
      chip.appendChild(document.createTextNode(l.nome));
      chip.addEventListener("click", function () {
        estado.locutor = estado.locutor === l.nome ? null : l.nome;
        aplicarFiltro();
      });
      box.appendChild(chip);
    });
  }

  function limparFiltro() {
    estado.busca = "";
    estado.locutor = null;
    var busca = document.getElementById("busca");
    if (busca) busca.value = "";
    aplicarFiltro();
    var todos = document.querySelector('.locutor-chip[data-locutor=""]');
    if (todos) todos.setAttribute("aria-pressed", "true");
  }

  function irParaFala(t) {
    limparFiltro();
    var id = "t-" + String(t).replace(/:/g, "-");
    var fala = document.getElementById(id);
    if (!fala) return;
    if (history.pushState) history.pushState(null, "", "#t=" + String(t).replace(/:/g, "-"));
    fala.scrollIntoView({ behavior: semMovimento ? "auto" : "smooth", block: "center" });
    fala.classList.add("destaque");
    setTimeout(function () { fala.classList.remove("destaque"); }, 2600);
  }

  function verNoContexto(t) {
    irParaFala(t);
  }

  function irParaHash() {
    var m = String(location.hash || "").match(/^#t=(\d{2})-(\d{2})-(\d{2})$/);
    if (!m) return;
    var fala = document.getElementById("t-" + m[1] + "-" + m[2] + "-" + m[3]);
    if (!fala) return;
    fala.scrollIntoView({ behavior: semMovimento ? "auto" : "smooth", block: "center" });
    fala.classList.add("destaque");
    setTimeout(function () { fala.classList.remove("destaque"); }, 2600);
  }

  function irParaSecao() {
    var h = String(location.hash || "");
    if (!/^#(resumo|participantes|slides|transcricao)$/.test(h)) return;
    var alvo = document.getElementById(h.slice(1));
    if (!alvo) return;
    setTimeout(function () {
      alvo.scrollIntoView({ behavior: semMovimento ? "auto" : "smooth", block: "start" });
    }, 80);
  }

  function baixar() {
    if (!dados) return;
    var linhas = [
      "# " + dados.titulo,
      "",
      [dados.dia, dados.hora].filter(Boolean).join(" · "),
      "",
      "Transcrição da sessão — Goiânia Resiliente, 2ª edição.",
      ""
    ];
    (dados.segmentos || []).forEach(function (s) {
      linhas.push("[" + s.t + "] " + s.s + ": " + s.x);
      linhas.push("");
    });
    var blob = new Blob([linhas.join("\n")], { type: "text/markdown;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = dados.codigo + "-transcricao.md";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 1200);
  }

  /* ------------------------------------------------------------------
     Perfil
     ------------------------------------------------------------------ */
  function abrirPerfil(c) {
    var modal = document.getElementById("perfilModal");
    var corpo = document.getElementById("perfilCorpo");
    if (!modal || !corpo || !c) return;
    ultimoFoco = document.activeElement;
    corpo.textContent = "";

    var art = el("article", "convidado");
    art.appendChild(fotoDe(c));
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
    art.appendChild(txt);
    corpo.appendChild(art);

    var ver = el("a", "modal-todos", "Ver todos os participantes →");
    ver.href = "index.html#todos-participantes";
    corpo.appendChild(ver);

    var fechar = document.getElementById("perfilFechar");
    if (typeof modal.showModal === "function") {
      if (!modal.open) modal.showModal();
      if (fechar) fechar.focus();
    } else {
      location.href = "index.html#convidado-" + c.id;
    }
  }

  function prepararModal() {
    var modal = document.getElementById("perfilModal");
    var fechar = document.getElementById("perfilFechar");
    if (!modal) return;
    if (fechar) fechar.addEventListener("click", function () { modal.close(); });
    modal.addEventListener("click", function (e) { if (e.target === modal) modal.close(); });
    modal.addEventListener("close", function () {
      if (ultimoFoco && typeof ultimoFoco.focus === "function") ultimoFoco.focus();
    });
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest("a.conv-link[data-convidado]");
      if (!a) return;
      var c = porId[a.getAttribute("data-convidado")];
      if (!c) return;
      e.preventDefault();
      abrirPerfil(c);
    });
  }

  /* ------------------------------------------------------------------
     Navegação entre sessões
     ------------------------------------------------------------------ */
  function renderNav() {
    var nav = document.getElementById("navSessoes");
    if (!nav) return;
    nav.textContent = "";
    var i = ORDEM.indexOf(codigo);
    if (i > 0) {
      var prev = el("a", null, "← Sessão anterior");
      prev.href = "sessao.html?sessao=" + ORDEM[i - 1];
      nav.appendChild(prev);
    } else {
      nav.appendChild(el("span", null, "Primeira sessão do dia"));
    }
    if (i >= 0 && i < ORDEM.length - 1) {
      var next = el("a", null, "Próxima sessão →");
      next.href = "sessao.html?sessao=" + ORDEM[i + 1];
      nav.appendChild(next);
    } else {
      nav.appendChild(el("span", null, "Última sessão do dia"));
    }
  }

  function ajustarHeader() {
    var header = document.querySelector("header");
    if (header) document.documentElement.style.setProperty("--header-h", header.offsetHeight + "px");
  }

  /* ------------------------------------------------------------------
     Início
     ------------------------------------------------------------------ */
  function iniciar() {
    var cores = corDosLocutores();
    renderCabecalho();
    renderResumo();
    renderParticipantes(cores);
    renderSlides();
    renderTranscricao(cores);
    renderFiltro(cores);
    renderNav();
    prepararModal();
    ajustarHeader();
    window.addEventListener("resize", ajustarHeader);
    window.addEventListener("load", ajustarHeader);
    if (window.ResizeObserver) {
      var headerEl = document.querySelector("header");
      if (headerEl) new ResizeObserver(ajustarHeader).observe(headerEl);
    }
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(ajustarHeader);

    document.querySelectorAll("a[data-voltar]").forEach(function (a) {
      a.href = "index.html#sessao-" + codigo;
    });
    var copiar = document.getElementById("copiarLink");
    if (copiar) copiar.addEventListener("click", function () {
      var url = location.href.split("#")[0];
      function ok() { copiar.textContent = "Link copiado ✓"; setTimeout(function () { copiar.textContent = "Copiar link"; }, 2200); }
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(ok, ok);
      else ok();
    });

    var busca = document.getElementById("busca");
    if (busca) {
      busca.addEventListener("input", function () {
        clearTimeout(timerBusca);
        timerBusca = setTimeout(function () {
          estado.busca = busca.value;
          aplicarFiltro();
        }, 120);
      });
    }
    var limpar = document.getElementById("limpar");
    if (limpar) limpar.addEventListener("click", limparFiltro);
    var baixarBtn = document.getElementById("baixar");
    if (baixarBtn) baixarBtn.addEventListener("click", baixar);
    var imprimir = document.getElementById("imprimir");
    if (imprimir) imprimir.addEventListener("click", function () { window.print(); });

    aplicarFiltro();
    window.addEventListener("hashchange", irParaSecao);
    setTimeout(irParaSecao, 160);
    window.addEventListener("hashchange", irParaHash);
    setTimeout(irParaHash, 120);
  }

  function carregar() {
    var params = new URLSearchParams(location.search);
    codigo = params.get("sessao") || "";
    if (!codigo) {
      var hash = String(location.hash || "").replace(/^#/, "");
      if (/^d1-[a-z0-9-]+$/.test(hash)) codigo = hash;
    }
    if (!/^d1-[a-z0-9-]+$/.test(codigo)) { erro(); return; }

    var s = document.createElement("script");
    s.src = "dados/transcricoes/" + codigo + ".js";
    s.onload = function () {
      if (!window.GR_TRANSCRICAO || window.GR_TRANSCRICAO.codigo !== codigo) { erro(); return; }
      dados = window.GR_TRANSCRICAO;
      iniciar();
    };
    s.onerror = erro;
    document.head.appendChild(s);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", carregar);
  else carregar();
})();
