/* =====================================================================
   SESSÕES DA PROGRAMAÇÃO · texto de cada atividade
   ---------------------------------------------------------------------
   Cada sessão da programação tem um código fixo (ex.: "d1-cidades-cerrado").
   É por esse código que o site junta, na mesma sessão:
     · os participantes (vêm da própria programação, no index.html);
     · os materiais (slides, vídeo, transcrição) → dados/acervo.js,
       campo  sessao: "d1-cidades-cerrado";
     · os textos abaixo.

   Para cada sessão, preencha quando tiver:

   descricao → (antes do evento) duas ou três frases sobre o tema da mesa.
               Aparece quando a pessoa abre a sessão na programação.

   resumo    → (depois do evento) o resumo da sessão, já revisado e
               APROVADO pelo Pedro. Escreva entre crases ` `, assim:
                 resumo: `Primeiro parágrafo.

                 Segundo parágrafo.

                 ## Um subtítulo
                 - um item
                 - outro item`,
               Parágrafos são separados por uma linha em branco.
               "## " no começo da linha faz um subtítulo, "- " faz uma lista
               e **texto** fica em negrito.
               O passo a passo (gravação → NotebookLM → revisão) está em
               docs/resumos-das-sessoes.md.

   NÃO mude os códigos depois de publicados: eles são o endereço da sessão
   (goianiaresiliente.com/#sessao-d1-cidades-cerrado).
   ===================================================================== */
window.GR_SESSOES = {

  /* ---------------- 2ª edição · Dia 1 · 25 nov 2026 ---------------- */
  "d1-abertura":               { descricao: "", resumo: `` }, /* Abertura institucional */
  "d1-cidades-cerrado":        { descricao: "", resumo: `` }, /* As Cidades do Cerrado: ciência para entender o que muda… */
  "d1-goiania-onde-estamos":   { descricao: "", resumo: `` }, /* Goiânia: onde estamos? Projetos estruturantes para adaptação */
  "d1-governanca":             { descricao: "", resumo: `` }, /* Quem decide e quem paga a conta do clima? Um debate sobre governança e articulação federativa */
  "d1-matchmaking":            { descricao: "", resumo: `` }, /* Matchmaking: bons projetos para financiamentos reais */
  "d1-monitoramento":          { descricao: "", resumo: `` }, /* Monitoramento, previsão meteorológica e adaptação */
  "d1-gestao-municipal":       { descricao: "", resumo: `` }, /* Goiânia: clima, vulnerabilidade e gestão municipal */

  /* ---------------- 2ª edição · Dia 2 · 26 nov 2026 ---------------- */
  "d2-saude-emergencias":      { descricao: "", resumo: `` }, /* Eixo Adaptação — Poluição, calor e território */
  "d2-transicao-energetica":   { descricao: "", resumo: `` }, /* Eixo Mitigação — Energia e Resíduos */
  "d2-juarez-paragominas":     { descricao: "", resumo: `` }, /* 2 países, 2 climas, 2 cidades: Juárez (México) e Curitiba (PR) — código mantido */
  "d2-paragominas":            { descricao: "", resumo: `` }, /* Gestão territorial na Amazônia: o caso de Paragominas (PA) */
  "d2-encerramento":           { descricao: "", resumo: `` }, /* Recados finais e encerramento */

  /* ---------------- 1ª edição · 2024 ---------------- */
  "2024-abertura":             { descricao: "", resumo: `` },
  "2024-cerrado":              { descricao: "", resumo: `` }, /* Impacto das mudanças climáticas no Cerrado */
  "2024-niteroi":              { descricao: "", resumo: `` }, /* Adaptação a mudanças climáticas: o caso de Niterói */
  "2024-estrategias":          { descricao: "", resumo: `` }, /* Goiânia Resiliente: estratégias de mitigação e adaptação */
  "2024-debate":               { descricao: "", resumo: `` }, /* Debate com o público */

};
