/* =====================================================================
   ACERVO · vídeos, apresentações, transcrições, fotos, relatórios
   ---------------------------------------------------------------------
   Para ACRESCENTAR um material, copie um bloco { ... } de exemplo abaixo,
   cole no fim da lista (antes do "];") e troque os textos.
   Cada bloco termina com uma vírgula: { ... },

   tipo   → um destes: "videos", "apresentacoes", "transcricoes",
            "fotos", "relatorios", "artigos"
   edicao → 2026 ou 2024
   painel → (opcional) nome do painel ou atividade
   titulo → o que aparece em destaque no cartão
   link   → endereço do material:
            · vídeo do YouTube: cole o link do vídeo
              (ex.: "https://www.youtube.com/watch?v=XXXXXXXXXXX")
            · PDF no site: coloque o arquivo em materiais/2026/ e escreva
              "materiais/2026/nome-do-arquivo.pdf"
            · Google Drive ou outro site: cole o link público
   texto  → (opcional) uma linha de descrição

   Cartões SEM link são os avisos "Disponível após o evento". Eles somem
   sozinhos assim que houver um material com link do mesmo tipo e edição.

   EXEMPLOS (copie e adapte):
   { tipo: "videos", edicao: 2026, painel: "Dia 1 · As Cidades do Cerrado",
     titulo: "Conferência de Carlos Gurjão",
     link: "https://www.youtube.com/watch?v=XXXXXXXXXXX" },
   { tipo: "apresentacoes", edicao: 2026, painel: "Dia 1 · Matchmaking",
     titulo: "Slides de Patrícia Freitas",
     link: "materiais/2026/patricia-freitas-slides.pdf" },
   ===================================================================== */
window.GR_ACERVO = [
  /* ---------- Edição 2026 (avisos até o evento) ---------- */
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
