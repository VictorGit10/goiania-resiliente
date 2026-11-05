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

  /* Filtros do acervo */
  var chips = document.querySelectorAll(".chip");
  var itens = document.querySelectorAll("#acervoGrid .item");
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (c) { c.setAttribute("aria-pressed", "false"); });
      chip.setAttribute("aria-pressed", "true");
      var f = chip.getAttribute("data-filtro");
      itens.forEach(function (item) {
        item.style.display = (f === "todos" || item.getAttribute("data-tipo") === f) ? "" : "none";
      });
    });
  });

  /* Ano no rodapé */
  document.getElementById("ano").textContent = new Date().getFullYear();
})();
