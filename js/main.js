(function () {
  "use strict";

  /* Menu mobile */
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

  /* Abas da programação */
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
  function iniciais(nome) {
    var partes = nome.replace(/^(dr|dra|prof)\.?\s+/i, "").split(/\s+/);
    return (partes[0].charAt(0) + (partes.length > 1 ? partes[partes.length - 1].charAt(0) : "")).toUpperCase();
  }

  /* Abre a aba e o painel <details> de uma sessão da programação */
  function abrirSessao(details) {
    var painel = details.closest(".painel");
    if (painel) {
      var tab = document.querySelector('[aria-controls="' + painel.id + '"]');
      if (tab && tab.getAttribute("aria-selected") !== "true") tab.click();
    }
    details.open = true;
    details.closest(".sessao").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  /* ------------------------------------------------------------------
     Convidados (dados/convidados.js)
     ------------------------------------------------------------------ */
  var convidados = Array.isArray(window.GR_CONVIDADOS) ? window.GR_CONVIDADOS : [];
  var porNome = {};
  var agenda = {};
  convidados.forEach(function (c) {
    agenda[c.id] = [];
    (c.naProgramacao || [c.nome]).concat([c.nome]).forEach(function (n) { porNome[normaliza(n)] = c; });
  });

  /* Liga os nomes da programação aos perfis */
  document.querySelectorAll("#programacao .papel").forEach(function (papel) {
    var alvo = papel.lastElementChild;
    if (!alvo || alvo.classList.contains("label")) return;
    var partes = alvo.textContent.split(" · ");
    var achou = false;
    var frag = document.createDocumentFragment();
    var sessao = papel.closest(".sessao");
    var details = papel.closest("details");
    var painel = papel.closest(".painel");
    var tab = painel && document.querySelector('[aria-controls="' + painel.id + '"]');
    partes.forEach(function (parte, i) {
      if (i > 0) frag.appendChild(document.createTextNode(" · "));
      var m = parte.match(/^\s*([^(]+?)\s*(\(.*)?$/);
      var c = m && porNome[normaliza(m[1])];
      if (!c) { frag.appendChild(document.createTextNode(parte)); return; }
      achou = true;
      var a = el("a", "conv-link", m[1]);
      a.href = "#convidado-" + c.id;
      a.setAttribute("data-convidado", c.id);
      frag.appendChild(a);
      if (m[2]) frag.appendChild(document.createTextNode(" " + m[2]));
      agenda[c.id].push({
        dia: tab ? tab.textContent.trim() : "",
        hora: sessao ? sessao.querySelector(".hora").textContent.trim() : "",
        papel: papel.querySelector(".label").textContent.trim(),
        titulo: details ? details.querySelector("summary").firstChild.textContent.trim() : "",
        details: details
      });
    });
    if (achou) { alvo.textContent = ""; alvo.appendChild(frag); }
  });

  /* Foto: se o arquivo não existir, fica o quadro "Foto em breve" */
  function prepararFoto(box) {
    var img = box.querySelector("img");
    if (!img) return;
    function falhou() { img.remove(); box.classList.add("sem-foto"); }
    if (img.complete && img.naturalWidth === 0 && img.getAttribute("src")) { falhou(); return; }
    img.addEventListener("error", falhou);
    img.addEventListener("load", function () { box.classList.add("com-foto"); });
  }

  function cartaoConvidado(c) {
    var art = el("article", "convidado");
    art.id = "convidado-" + c.id;
    var foto = el("div", "conv-foto");
    foto.appendChild(el("span", "conv-iniciais", iniciais(c.nome)));
    foto.appendChild(el("span", "conv-embreve", "Foto em breve"));
    var img = el("img");
    img.src = "assets/img/convidados/" + c.id + ".jpg";
    img.alt = "Foto de " + c.nome;
    img.loading = "lazy";
    foto.appendChild(img);
    art.appendChild(foto);

    var txt = el("div", "conv-texto");
    txt.appendChild(el("strong", "conv-nome", c.nome));
    if (c.cargo) txt.appendChild(el("span", "cargo", c.cargo));
    if (c.resumo) txt.appendChild(el("p", "conv-resumo", c.resumo));
    if (c.minibio && c.minibio !== c.resumo) {
      var d = el("details", "ler-mais");
      d.appendChild(el("summary", null, "Ler minibio completa"));
      d.appendChild(el("p", null, c.minibio));
      txt.appendChild(d);
    }
    var lista = agenda[c.id] || [];
    if (lista.length) {
      var ag = el("div", "conv-agenda");
      ag.appendChild(el("span", "label", "Na programação"));
      var ul = el("ul");
      lista.forEach(function (s) {
        var li = el("li");
        var a = el("a", null, s.titulo);
        a.href = "#programacao";
        a.addEventListener("click", function (e) {
          e.preventDefault();
          if (modal && modal.open) modal.close();
          if (s.details) abrirSessao(s.details);
        });
        li.appendChild(el("span", "conv-quando", [s.dia, s.hora, s.papel].filter(Boolean).join(" · ")));
        li.appendChild(a);
        ul.appendChild(li);
      });
      ag.appendChild(ul);
      txt.appendChild(ag);
    }
    art.appendChild(txt);
    return art;
  }

  var gridConv = document.getElementById("convidadosGrid");
  var modal = document.getElementById("perfilModal");
  var cartoes = {};
  if (gridConv) {
    convidados.forEach(function (c) {
      if (!c || !c.id || !c.nome) return;
      var art = cartaoConvidado(c);
      cartoes[c.id] = c;
      gridConv.appendChild(art);
      prepararFoto(art.querySelector(".conv-foto"));
    });
    var aviso = el("div", "conv-aviso");
    aviso.appendChild(el("strong", null, "Mais perfis em breve"));
    aviso.appendChild(el("p", null, "Os perfis dos demais participantes serão publicados assim que recebermos as minibios. Enquanto isso, veja todos os nomes na programação."));
    var ir = el("a", "btn", "Ver programação ↑");
    ir.href = "#programacao";
    aviso.appendChild(ir);
    gridConv.appendChild(aviso);
  }

  /* Ao tocar no nome na programação: abre a janela do perfil sem sair do lugar.
     Sem suporte a <dialog>, o link leva ao cartão na seção Convidados. */
  if (modal && typeof modal.showModal === "function") {
    var corpo = document.getElementById("perfilCorpo");
    document.getElementById("perfilFechar").addEventListener("click", function () { modal.close(); });
    modal.addEventListener("click", function (e) { if (e.target === modal) modal.close(); });
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest("a.conv-link");
      if (!a) return;
      var c = cartoes[a.getAttribute("data-convidado")];
      if (!c) return;
      e.preventDefault();
      corpo.textContent = "";
      var art = cartaoConvidado(c);
      art.removeAttribute("id");
      corpo.appendChild(art);
      var ver = el("a", "modal-todos", "Ver todos os convidados →");
      ver.href = "#convidados";
      ver.addEventListener("click", function () { modal.close(); });
      corpo.appendChild(ver);
      prepararFoto(art.querySelector(".conv-foto"));
      modal.showModal();
      corpo.scrollTop = 0;
    });
  }

  /* ------------------------------------------------------------------
     Acervo (dados/acervo.js)
     ------------------------------------------------------------------ */
  var TIPOS = {
    fotos: "Fotos", videos: "Vídeos", transcricoes: "Transcrições",
    apresentacoes: "Apresentações", relatorios: "Relatórios", artigos: "Artigos"
  };
  function idYoutube(url) {
    var m = String(url).match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/))([A-Za-z0-9_-]{11})/);
    return m ? m[1] : "";
  }
  function rotuloLink(item, url) {
    if (idYoutube(url)) return "Assistir no YouTube ↗";
    if (/\.pdf($|[?#])/i.test(url)) return "Abrir PDF ↗";
    if (item.tipo === "transcricoes") return "Ler transcrição ↗";
    if (item.tipo === "fotos") return "Ver fotos ↗";
    return "Abrir ↗";
  }

  var gridAcervo = document.getElementById("acervoGrid");
  var vazio = document.getElementById("acervoVazio");
  var acervo = (Array.isArray(window.GR_ACERVO) ? window.GR_ACERVO : []).filter(function (i) {
    if (!i || !i.tipo || !i.titulo) return false;
    if (i.link && !linkSeguro(i.link)) { if (window.console) console.warn("Acervo: link ignorado", i.link); return false; }
    return true;
  });
  /* Avisos sem link somem quando já existe material com link do mesmo tipo e edição */
  var publicados = {};
  acervo.forEach(function (i) { if (linkSeguro(i.link)) publicados[i.tipo + "|" + i.edicao] = true; });
  acervo = acervo
    .map(function (i, n) { return { i: i, n: n }; })
    .filter(function (o) { return linkSeguro(o.i.link) || !publicados[o.i.tipo + "|" + o.i.edicao]; })
    .sort(function (a, b) {
      return (Number(b.i.edicao) || 0) - (Number(a.i.edicao) || 0) ||
             (linkSeguro(b.i.link) ? 1 : 0) - (linkSeguro(a.i.link) ? 1 : 0) || a.n - b.n;
    })
    .map(function (o) { return o.i; });

  if (gridAcervo) {
    acervo.forEach(function (item) {
      var url = linkSeguro(item.link);
      var art = el("article", "item" + (url ? " publicado" : ""));
      art.setAttribute("data-tipo", item.tipo);
      art.setAttribute("data-edicao", String(item.edicao || ""));
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
      if (item.painel) art.appendChild(el("span", "item-painel", item.painel));
      art.appendChild(el("strong", null, item.titulo));
      if (item.texto) art.appendChild(el("p", "item-texto", item.texto));
      if (url) {
        var a = el("a", "item-link", rotuloLink(item, url));
        a.href = url;
        if (/^https?:/i.test(url) || /\.pdf($|[?#])/i.test(url)) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
        art.appendChild(a);
      } else {
        art.appendChild(el("span", "status", item.status || (String(item.edicao) === "2026" ? "Disponível após o evento" : "Em breve")));
      }
      gridAcervo.appendChild(art);
    });
  }

  /* Filtros do acervo: tipo e edição */
  var filtro = { tipo: "todos", edicao: "todas" };
  function aplicarFiltros() {
    var visiveis = 0;
    document.querySelectorAll("#acervoGrid .item").forEach(function (item) {
      var ok = (filtro.tipo === "todos" || item.getAttribute("data-tipo") === filtro.tipo) &&
               (filtro.edicao === "todas" || item.getAttribute("data-edicao") === filtro.edicao);
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
  chipsTipo.forEach(function (chip) {
    chip.addEventListener("click", function () {
      marcar(chipsTipo, chip); filtro.tipo = chip.getAttribute("data-filtro"); aplicarFiltros();
    });
  });
  function escolherEdicao(valor) {
    chipsEdicao.forEach(function (c) { if (c.getAttribute("data-edicao") === valor) marcar(chipsEdicao, c); });
    filtro.edicao = valor; aplicarFiltros();
  }
  chipsEdicao.forEach(function (chip) {
    chip.addEventListener("click", function () { escolherEdicao(chip.getAttribute("data-edicao")); });
  });
  document.querySelectorAll("[data-ir-edicao]").forEach(function (a) {
    a.addEventListener("click", function () { escolherEdicao(a.getAttribute("data-ir-edicao")); });
  });

  /* Link direto para um perfil (ex.: goianiaresiliente.com/#convidado-carlos-gurjao) */
  if (/^#convidado-/.test(location.hash)) {
    var alvoHash = document.getElementById(location.hash.slice(1));
    if (alvoHash) alvoHash.scrollIntoView();
  }

  /* Ano no rodapé */
  document.getElementById("ano").textContent = new Date().getFullYear();
})();
