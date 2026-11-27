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
  { tipo: "relatorios",    edicao: 2026, titulo: "Relatório para discussão", status: "Edição 2026", link: "materiais/2026/relatorio-para-discussao-2026.pdf", texto: "Da atmosfera à vulnerabilidade social: clima, Cerrado e Goiânia · novembro de 2026 · 40 páginas" },
  { tipo: "artigos",       edicao: 2026, titulo: "Documentos de referência" },

  /* ---------- Edição 2024 ---------- */
  { tipo: "fotos",         edicao: 2024, titulo: "Registro fotográfico", status: "Edição 2024", link: "https://drive.google.com/drive/folders/1snxriQ215CqaEChSuAAd2QYgyBJwv_UK" },
  { tipo: "relatorios",    edicao: 2024, titulo: "Relatório final",      status: "Edição 2024", link: "materiais/2024/relatorio-final-2024.pdf", texto: "Versão final · março de 2025 · 59 páginas" },

  /* ---------- Materiais publicados: acrescente abaixo ---------- */

  /* ---------- Dia 1 · slides das palestras (25 nov 2026) ---------- */
  { tipo: "apresentacoes", edicao: 2026, sessao: "d1-cidades-cerrado",
    titulo: "Slides de Carlos Gurjão",
    link: "materiais/2026/d1-cidades-cerrado-slides-carlos-gurjao.pdf",
    texto: "17 páginas · apresentação na íntegra" },
  { tipo: "apresentacoes", edicao: 2026, sessao: "d1-cidades-cerrado",
    titulo: "Slides de Celene Cunha",
    link: "materiais/2026/d1-cidades-cerrado-slides-celene-cunha.pdf",
    texto: "30 páginas · apresentação na íntegra" },
  { tipo: "apresentacoes", edicao: 2026, sessao: "d1-goiania-onde-estamos",
    titulo: "Slides de Gabriel Tenaglia",
    link: "materiais/2026/d1-goiania-onde-estamos-slides-gabriel-tenaglia.pdf",
    texto: "15 páginas · apresentação na íntegra" },
  { tipo: "apresentacoes", edicao: 2026, sessao: "d1-goiania-onde-estamos",
    titulo: "Slides de Pedro Baima",
    link: "materiais/2026/d1-goiania-onde-estamos-slides-pedro-baima.pdf",
    texto: "28 páginas · apresentação na íntegra" },
  { tipo: "apresentacoes", edicao: 2026, sessao: "d1-governanca",
    titulo: "Slides de Antônio Gomide",
    link: "materiais/2026/d1-governanca-slides-antonio-gomide.pdf",
    texto: "8 páginas · apresentação na íntegra" },
  { tipo: "apresentacoes", edicao: 2026, sessao: "d1-matchmaking",
    titulo: "Slides de Patrícia Freitas",
    link: "materiais/2026/d1-matchmaking-slides-patricia-freitas.pdf",
    texto: "19 páginas · apresentação na íntegra" },
  { tipo: "apresentacoes", edicao: 2026, sessao: "d1-matchmaking",
    titulo: "Slides de Marcel Sant'Ana",
    link: "materiais/2026/d1-matchmaking-slides-marcel-santana.pdf",
    texto: "12 páginas · apresentação na íntegra" },

  /* ---------- Dia 1 · transcrições (26 nov 2026) ---------- */
  { tipo: "transcricoes", edicao: 2026, sessao: "d1-abertura",
    titulo: "Transcrição da abertura",
    link: "sessao.html?sessao=d1-abertura#transcricao",
    texto: "Leitura por falas, com cores e perfis" },
  { tipo: "transcricoes", edicao: 2026, sessao: "d1-cidades-cerrado",
    titulo: "Transcrição de As Cidades do Cerrado",
    link: "sessao.html?sessao=d1-cidades-cerrado#transcricao",
    texto: "Leitura por falas, com cores e perfis" },
  { tipo: "transcricoes", edicao: 2026, sessao: "d1-goiania-onde-estamos",
    titulo: "Transcrição de Goiânia: onde estamos?",
    link: "sessao.html?sessao=d1-goiania-onde-estamos#transcricao",
    texto: "Leitura por falas, com cores e perfis" },
  { tipo: "transcricoes", edicao: 2026, sessao: "d1-governanca",
    titulo: "Transcrição de governança",
    link: "sessao.html?sessao=d1-governanca#transcricao",
    texto: "Leitura por falas, com cores e perfis" },
  { tipo: "transcricoes", edicao: 2026, sessao: "d1-monitoramento",
    titulo: "Transcrição de monitoramento",
    link: "sessao.html?sessao=d1-monitoramento#transcricao",
    texto: "Leitura por falas, com cores e perfis" },
  { tipo: "transcricoes", edicao: 2026, sessao: "d1-matchmaking",
    titulo: "Transcrição de matchmaking",
    link: "sessao.html?sessao=d1-matchmaking#transcricao",
    texto: "Leitura por falas, com cores e perfis" },
  { tipo: "transcricoes", edicao: 2026, sessao: "d1-gestao-municipal",
    titulo: "Transcrição da gestão municipal",
    link: "sessao.html?sessao=d1-gestao-municipal#transcricao",
    texto: "Leitura por falas, com cores e perfis" },
  { tipo: "transcricoes", edicao: 2026,
    titulo: "Transcrição completa do Dia 1",
    link: "materiais/2026/dia1-transcricao-completa.md",
    texto: "Íntegra do dia · download .md" },

  /* ---------- Dia 2 · slides das palestras (26 nov 2026) ---------- */
  { tipo: "apresentacoes", edicao: 2026, sessao: "d2-saude-emergencias",
    titulo: "Slides de Cristina Musmanno",
    link: "materiais/2026/d2-saude-emergencias-slides-cristina-musmanno.pdf",
    texto: "20 páginas · apresentação na íntegra" },
  { tipo: "apresentacoes", edicao: 2026, sessao: "d2-saude-emergencias",
    titulo: "Slides de José Alexandre Felizola",
    link: "materiais/2026/d2-saude-emergencias-slides-jose-alexandre-felizola.pdf",
    texto: "21 páginas · apresentação na íntegra" },
  { tipo: "apresentacoes", edicao: 2026, sessao: "d2-transicao-energetica",
    titulo: "Slides de Gabriel Tenaglia",
    link: "materiais/2026/d2-transicao-energetica-slides-gabriel-tenaglia.pdf",
    texto: "15 páginas · apresentação na íntegra" },
  { tipo: "apresentacoes", edicao: 2026, sessao: "d2-transicao-energetica",
    titulo: "Slides de Fabiana Nunes",
    link: "materiais/2026/d2-transicao-energetica-slides-fabiana-nunes.pdf",
    texto: "12 páginas · apresentação na íntegra" },
  { tipo: "apresentacoes", edicao: 2026, sessao: "d2-juarez-paragominas",
    titulo: "Slides de Felipe Adrián Vázquez",
    link: "materiais/2026/d2-juarez-paragominas-slides-felipe-vazquez.pdf",
    texto: "12 páginas · apresentação na íntegra" },
  { tipo: "apresentacoes", edicao: 2026, sessao: "d2-juarez-paragominas",
    titulo: "Slides de Thomaz Ramalho",
    link: "materiais/2026/d2-juarez-paragominas-slides-thomaz-ramalho.pdf",
    texto: "50 páginas · PDF gerado a partir do PPTX" },

  /* ---------- Dia 2 · transcrições (26 nov 2026) ---------- */
  { tipo: "transcricoes", edicao: 2026, sessao: "d2-saude-emergencias",
    titulo: "Transcrição de saúde e emergências",
    link: "sessao.html?sessao=d2-saude-emergencias#transcricao",
    texto: "Leitura por falas, com cores e perfis" },
  { tipo: "transcricoes", edicao: 2026, sessao: "d2-transicao-energetica",
    titulo: "Transcrição de energia e resíduos",
    link: "sessao.html?sessao=d2-transicao-energetica#transcricao",
    texto: "Leitura por falas, com cores e perfis" },
  { tipo: "transcricoes", edicao: 2026, sessao: "d2-juarez-paragominas",
    titulo: "Transcrição de Juárez e Curitiba",
    link: "sessao.html?sessao=d2-juarez-paragominas#transcricao",
    texto: "Leitura por falas, com cores e perfis" },
  { tipo: "transcricoes", edicao: 2026, sessao: "d2-paragominas",
    titulo: "Transcrição de Paragominas",
    link: "sessao.html?sessao=d2-paragominas#transcricao",
    texto: "Leitura por falas, com cores e perfis" },
  { tipo: "transcricoes", edicao: 2026, sessao: "d2-encerramento",
    titulo: "Transcrição do encerramento",
    link: "sessao.html?sessao=d2-encerramento#transcricao",
    texto: "Leitura por falas, com cores e perfis" },
  { tipo: "transcricoes", edicao: 2026,
    titulo: "Transcrição completa do Dia 2",
    link: "materiais/2026/dia2-transcricao-completa.md",
    texto: "Íntegra do dia · download .md" },
];
