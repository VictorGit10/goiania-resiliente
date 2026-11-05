/* =====================================================================
   PERFIS DOS CONVIDADOS · 2ª edição (2026)
   ---------------------------------------------------------------------
   Para ACRESCENTAR um convidado, copie um bloco { ... } abaixo, cole no
   fim da lista (antes do "];") e troque os textos. Cada bloco termina
   com uma vírgula: { ... },

   id          → identificador sem acento nem espaço (ex.: "joao-silva").
                 A foto deve se chamar assets/img/convidados/<id>.jpg
                 Enquanto a foto não existir, aparece "Foto em breve".
   nome        → como o nome aparece no cartão do perfil.
   naProgramacao → lista com o nome EXATAMENTE como está escrito na
                 programação (antes do parêntese). É assim que o site
                 liga o nome na programação ao perfil. Pode ter mais de um.
   cargo       → cargo / instituição (uma linha).
   resumo      → duas ou três frases, aparecem sempre no cartão.
   minibio     → texto completo (opcional). Se houver, aparece o botão
                 "Ler minibio completa".
   pendente    → (opcional) true enquanto o texto for provisório.

   Só publique o que é público: nome, cargo, minibio e foto.
   Nada de e-mail, telefone ou outras respostas do formulário.
   ===================================================================== */
window.GR_CONVIDADOS = [
  {
    id: "carlos-gurjao",
    nome: "Carlos Gurjão",
    naProgramacao: ["Carlos Gurjão"],
    cargo: "Meteorologista e pesquisador · CEMPA-Cerrado/UFG",
    resumo: "Meteorologista, doutor em Meteorologia Aplicada pela UFV e pesquisador do CEMPA-Cerrado/UFG. Pesquisa rios atmosféricos, eventos extremos e mudanças climáticas; em 2023 foi consultor da Organização Meteorológica Mundial (WMO).",
    minibio: "Possui graduação em Meteorologia pela Universidade Federal de Campina Grande (2012), mestrado em Meteorologia pelo Instituto Nacional de Pesquisas Espaciais (2017) e doutorado em Meteorologia Aplicada pela Universidade Federal de Viçosa (2022). Atualmente atua como pesquisador vinculado ao CEMPA-CERRADO, da Universidade Federal de Goiás, e colaborador da Universidade Federal de Viçosa, realizando pesquisas voltadas aos Rios Atmosféricos atuantes nas Américas e às Análises de Multi-Escalas dos Eventos Extremos e Teleconexões. Tem experiência na área de Geociências, com ênfase em Meteorologia e Climatologia, atuando principalmente nos temas: modelagem climática, interação oceano-superfície-atmosfera, paleoclimatologia e mudanças climáticas (passada, presente e futura). Em 2023 atuou como consultor da World Meteorological Organization (WMO), com foco nas aplicações da escala subsazonal à agricultura. Entre 2012 e 2015, atuou como meteorologista do Núcleo de Monitoramento de Descargas Atmosféricas na FUNCATE e no Grupo de Eletricidade Atmosférica (ELAT/CCST/INPE), realizando previsões do tempo para as regiões do Brasil."
  },
  {
    id: "pedro-baima",
    nome: "Dr. Pedro Baima",
    naProgramacao: ["Pedro Baima", "Dr. Pedro Baima"],
    cargo: "Gerente de Formulação de Educação, Política e Pesquisas Ambientais · AMMA",
    resumo: "Graduado em Biologia e em Ciências Sociais/Políticas Públicas, mestre e doutor em Antropologia Social. É Analista em Obras e Urbanismo da Prefeitura de Goiânia e pesquisador na Cátedra UNESCO/UFG “Saberes Patrimoniais, Biodiversidade e Cidadania”."
  },
  {
    id: "carolina-stange-moulin",
    nome: "Carolina Stange Moulin",
    /* A programação escreve "Carolina Azevedo Moulin": confirmar o nome com ela. */
    naProgramacao: ["Carolina Stange Moulin", "Carolina Azevedo Moulin"],
    cargo: "Subsecretária de Biodiversidade, Unidades de Conservação e Segurança Hídrica · SEMAD/GO",
    resumo: "Subsecretária de Biodiversidade, Unidades de Conservação e Segurança Hídrica da Secretaria de Estado de Meio Ambiente e Desenvolvimento Sustentável de Goiás (SEMAD/GO). Professora na Universidade Federal do Tocantins, Campus Arraias. Doutora em Direito pela Universidade de São Paulo (USP) e em Ciências Sociais pela Universidade de Osnabrück, Alemanha."
  },
  {
    id: "patricia-freitas",
    nome: "Patrícia Freitas",
    naProgramacao: ["Patrícia Freitas"],
    cargo: "Consultora em Financiamento Internacional e Projetos Sustentáveis",
    resumo: "Engenheira civil com mais de uma década de experiência em financiamento internacional e projetos de engenharia. Participou da elaboração de mais de 100 Cartas-Consulta à COFIEX, que somam cerca de US$ 5 bilhões em financiamentos aprovados.",
    minibio: "Engenheira civil com mais de uma década de experiência em financiamento internacional e projetos de engenharia. Participou da elaboração de mais de 100 Cartas-Consulta (pleitos) para projetos de desenvolvimento urbano, social e ambiental, contribuindo para a aprovação, na COFIEX, de financiamento da ordem de US$ 5 bilhões. Atua como consultora para organismos internacionais como BID, CAF e FONPLATA, com experiência em estruturação de pleitos à COFIEX, preparação de programas junto a bancos multilaterais e planos de financiamento para entes públicos."
  },
  {
    id: "paulo-davila-ferreira",
    nome: "Paulo D’Ávila Ferreira",
    naProgramacao: ["Paulo D’Ávila", "Paulo D’Ávila Ferreira"],
    cargo: "Presidente do IDESA",
    /* PROVISÓRIO: texto copiado do cartão em "Quem somos". A minibio
       enviada por ele está num anexo no Drive, ainda não lido. */
    resumo: "Consultor com mais de três décadas em gestão ambiental pública. Foi diretor de Ecossistemas da Agência Goiana de Meio Ambiente (2004–2008).",
    pendente: true
  },
];
