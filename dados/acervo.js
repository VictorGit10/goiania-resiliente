/* =====================================================================
   ACERVO · vídeos, apresentações, transcrições, fotos, relatórios
   ---------------------------------------------------------------------
   Para ACRESCENTAR um material, copie um bloco { ... } de exemplo abaixo,
   cole no fim da lista (antes do "];") e troque os textos.
   Cada bloco termina com uma vírgula: { ... },

   tipo   → um destes: "videos", "apresentacoes", "transcricoes",
            "fotos", "relatorios", "artigos"
   edicao → 2026 ou 2024
   sessao → (recomendado) o código da sessão, como em dados/sessoes.js
            (ex.: "d1-cidades-cerrado"). Com ele, o material aparece também
            dentro da sessão na programação, o nome da atividade é escrito
            sozinho no cartão e o filtro "Atividade" funciona.
   painel → (só se não houver sessão) texto livre com o nome da atividade
   titulo → o que aparece em destaque no cartão
   link   → endereço do material:
            · vídeo do YouTube: cole o link do vídeo
              (ex.: "https://www.youtube.com/watch?v=XXXXXXXXXXX")
            · PDF no site: coloque o arquivo em materiais/2026/ e escreva
              "materiais/2026/nome-do-arquivo.pdf"
            · Google Drive ou outro site: cole o link público
   texto  → (opcional) uma linha de descrição

   Os RESUMOS das sessões não entram aqui: ficam em dados/sessoes.js e o
   acervo cria o cartão "Resumo" sozinho.

   Cartões SEM link são os avisos "Disponível após o evento". Eles somem
   sozinhos assim que houver um material com link do mesmo tipo e edição.

   EXEMPLOS (copie e adapte):
   { tipo: "videos", edicao: 2026, sessao: "d1-cidades-cerrado",
     titulo: "Vídeo completo da sessão",
     link: "https://www.youtube.com/watch?v=XXXXXXXXXXX" },
   { tipo: "apresentacoes", edicao: 2026, sessao: "d1-matchmaking",
     titulo: "Slides de Patrícia Freitas",
     link: "materiais/2026/patricia-freitas-slides.pdf" },
   { tipo: "transcricoes", edicao: 2026, sessao: "d1-matchmaking",
     titulo: "Transcrição da sessão",
     link: "materiais/2026/d1-matchmaking-transcricao.pdf" },
   ===================================================================== */
window.GR_ACERVO = [
  /* ---------- Edição 2026 (avisos até o evento) ---------- */
  { tipo: "resumos",       edicao: 2026, titulo: "Resumos das sessões" },
  { tipo: "fotos",         edicao: 2026, titulo: "Fotos do simpósio" },
  { tipo: "videos",        edicao: 2026, titulo: "Vídeos dos painéis" },
  { tipo: "transcricoes",  edicao: 2026, titulo: "Transcrições das atividades" },
  { tipo: "apresentacoes", edicao: 2026, titulo: "Slides das palestras" },
  { tipo: "relatorios",    edicao: 2026, titulo: "Relatório preliminar" },
  { tipo: "artigos",       edicao: 2026, titulo: "Documentos de referência" },

  /* ---------- Edição 2024 ---------- */
  { tipo: "fotos",         edicao: 2024, titulo: "Registro fotográfico", status: "Edição 2024" },
  { tipo: "videos",        edicao: 2024, titulo: "Vídeos do evento",     status: "Edição 2024" },
  { tipo: "relatorios",    edicao: 2024, titulo: "Relatório final",      status: "Edição 2024" },

  /* ---------- Materiais publicados: acrescente abaixo ---------- */
];
