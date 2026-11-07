/* =====================================================================
   PERFIS DOS PARTICIPANTES · 2ª edição (2026)
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
    resumo: "Consultor em meio ambiente e desenvolvimento sustentável, com mais de três décadas em gestão ambiental pública e projetos socioambientais. Foi Diretor de Ecossistemas da Agência Goiana de Meio Ambiente (2004–2008) e preside o IDESA.",
    minibio: "Paulo d'Ávila Ferreira é consultor em meio ambiente e desenvolvimento sustentável, com mais de três décadas de atuação em gestão ambiental pública e em projetos socioambientais. Foi Diretor de Ecossistemas da Agência Goiana de Meio Ambiente (2004-2008), responsável pelas áreas protegidas do estado, pelas ações integradas de educação ambiental e conservação e pelo monitoramento da qualidade do ar e das águas. Na Secretaria Municipal de Meio Ambiente de Goiânia, participou da elaboração e do acompanhamento das obras de parques urbanos como Vaca Brava, Areião, Carmo Bernardes, Taquaral e Botafogo. Preside o Instituto de Desenvolvimento Econômico e Socioambiental (IDESA), OSCIP voltada à conservação, ao manejo sustentável e ao desenvolvimento socioeconômico de comunidades, e é sócio da Urucum Socioambiental, que desenvolve consultorias e projetos nessa área. Foi também Superintendente Executivo do Instituto Brasil Criativo (2013-2023), organização social que atua em meio ambiente, educação, cultura e turismo, e dirigiu por seis anos o Grupo Nativa, com diagnósticos, planejamentos participativos e projetos ambientais."
  },
  {
    id: "thomaz-ramalho",
    nome: "Thomaz Ramalho",
    naProgramacao: ["Thomaz Ramalho"],
    cargo: "Diretor de Planejamento · IPPUC/Curitiba",
    resumo: "Arquiteto e urbanista (USP), mestre em Planejamento Urbano e Desenvolvimento Internacional (IUAV, Itália). É diretor de planejamento do IPPUC – Instituto de Pesquisa e Planejamento Urbano de Curitiba e coordenador geral da revisão do Plano Diretor da cidade. Coordenou tecnicamente a 1ª edição do Goiânia Resiliente.",
    minibio: "Arquiteto e Urbanista (USP), mestre em Planejamento Urbano e Desenvolvimento Internacional (IUAV, Itália), associado ao Globalization Studio (TU Delft, Holanda) e Especialização em Gestão de Programas e Liderança (UNSSC, Nações Unidas) e em Políticas de Gestão Fundiária (Instituto Lincoln de Políticas do Solo e Rede Global de Instrumentos Fundiários – GLTN). Foi Professor de Urbanismo na Pontifícia Universidade Católica do Paraná (PUC-PR) e professor voluntário na Universidade Metodista de Angola (UMA). Co-autor ou colaborador em várias publicações da ONU-Habitat e do Ministério das Cidades. É pesquisador e consultor da FIPE (USP) em políticas de habitação e desenvolvimento urbano sustentável e consultor em inovação urbana e membro do conselho de impacto social do Instituto IKONE Liga Social Global. Foi Assessor Técnico Sênior da Cooperação Técnica Alemã (GIZ) no Brasil e Oficial Internacional de Gestão de Programas do Escritório Regional para África do ONU-Habitat. Atualmente é diretor de planejamento do IPPUC - Instituto de Pesquisa e Planejamento Urbano de Curitiba e coordenador geral da revisão do Plano Diretor da cidade."
  },

  /* ---------- Equipe 2026 que também está na programação ----------
     Textos do documento "GR2 - Estrutura site" (Pedro Novaes). */
  {
    id: "zilma-peixoto",
    nome: "Zilma Percussor Campos Peixoto",
    naProgramacao: ["Zilma Peixoto"],
    cargo: "Presidente da AMMA",
    resumo: "Mais de 35 anos de experiência em gestão pública e privada. Graduada em Direito pela UFG, com especialização pela FGV. Foi secretária municipal de Planejamento Urbano e Habitação e de Finanças de Goiânia.",
    minibio: "Presidente da AMMA, a Agência Municipal do Meio Ambiente de Goiânia, possui mais de 35 anos de experiência em gestão, tanto no poder público quanto em empresas privadas. Graduada em Direito pela Universidade Federal de Goiás (UFG), possui especialização em Gestão Financeira com ênfase em Mercado de Capitais pela Fundação Getúlio Vargas (FGV) e MBA em Gestão Empresarial pela mesma instituição de ensino. No poder público, Zilma foi diretora de Ordenamento Urbano e superintendente de Planejamento e Gestão Sustentável da Secretaria Municipal de Planejamento Urbano e Habitação (Seplanh) em 2017. Também coordenou o Grupo Executivo de Revisão do Plano Diretor de Goiânia; integrou o Comitê Técnico de Uso e Ocupação do Solo da Seplanh e foi conselheira do Conselho Municipal de Política Urbana da Prefeitura de Goiânia (Compur). Em seguida, assumiu a Secretaria municipal de Planejamento Urbano e Habitação, e a Secretaria de Finanças, durante a gestão Iris Rezende. Foi também superintendente do Conselho Regional de Engenharia e Agronomia (CREA-GO) e prestou consultorias para empresas."
  },
  {
    id: "gabriel-tenaglia",
    nome: "Gabriel Tenaglia Carneiro",
    naProgramacao: ["Gabriel Tenaglia"],
    cargo: "Gerente de Combate às Mudanças Climáticas · AMMA",
    resumo: "Doutor em Ciências Ambientais pela UFG e especialista em Políticas Públicas. Desenvolve políticas públicas e projetos ambientais estruturantes para o município.",
    minibio: "Graduado e licenciado em Biologia pela PUC-GO (2004), mestre em Ciências Ambientais e Saúde pela PUC-GO (2007) e Doutor em Ciências Ambientais pela UFG (2012), é também Alumnus do International Visitor Leadership Program (IVLP) (2019) e especialista em Políticas Públicas pela Faculdade de Ciências Sociais da UFG (2022). Atualmente, atua como Gerente de Combate às Mudanças Climáticas e Fomento à Política de Redução de Carbono na Agência Municipal de Meio Ambiente de Goiânia, onde desenvolve políticas públicas e projetos ambientais estruturantes para o município. Destacou-se em sua trajetória como coordenador de Unidade no Escritório de Prioridades de Goiânia (2021–2022), coordenador do processo de Modernização da Agência Municipal de Meio Ambiente e Assessor Técnico da Presidência da Pasta (2018–2020). Entre 2013 e 2015, ocupou a Gerência de Monitoramento Ambiental, tendo desenvolvido projetos de monitoramento da qualidade da água e do ar na capital. Foi, ainda, representante titular do município no Comitê da Bacia Hidrográfica do Rio Paranaíba (2018–2022) e suplente no Comitê da Bacia Hidrográfica do Rio Meia Ponte. Possui sólida experiência em Geociências e Políticas Públicas, com foco em Gestão Ambiental, Análise e Planejamento Ambiental, Valoração Ambiental, Ação Antrópica, Ecologia de Paisagem, Fragmentação da Paisagem, Licenciamento Ambiental, Monitoramento Ambiental e Consultoria Ambiental."
  },
  {
    id: "manuel-ferreira",
    nome: "Manuel Eduardo Ferreira",
    naProgramacao: ["Manuel Ferreira", "Manuel Eduardo Ferreira"],
    cargo: "Direção Executiva · CEMPA-Cerrado",
    resumo: "Geógrafo, professor da UFG e pesquisador do LAPIG. Doutor em Ciências Ambientais, atua em sensoriamento remoto, agricultura regenerativa e REDD+.",
    minibio: "Manuel Eduardo Ferreira é geógrafo, mestre em Geociências e Doutor em Ciências Ambientais. Desde 2009, é professor da Universidade Federal de Goiás - Instituto de Estudos Socioambientais e vice-coordenador do Lab. de Sensoriamento Remoto (LAPIG), onde exerce a carreira de pesquisador. Desde 2023, ocupa a Direção Executiva do Centro de Excelência em Estudos, Monitoramento e Previsões Ambientais do Cerrado (CEMPA-Cerrado). Na pós-graduação, integra o quadro permanente dos Programas de Pós-Graduação em Geografia (PPGEO), Ciências Ambientais (PPG-CIAMB) e Agronegócio (PPGAGRO). Seus interesses acadêmicos envolvem o monitoramento e a modelagem ambiental de paisagens naturais e antrópicas nos biomas Cerrado, Amazônia e Mata Atlântica, a partir de Sensoriamento Remoto (aéreo e orbital) e Geoprocessamento. Nos últimos anos, tem trabalhado com drones no mapeamento de ativos ambientais, restauração ecológica e agricultura regenerativa. Em 2024, integrou o Grupo de Trabalho Técnico em Mensuração, Reportação e Verificação de estoque de carbono, no âmbito da Comissão Nacional de REDD+ do Ministério do Meio Ambiente (GTT MRV - CONAREDD+)."
  },
  {
    id: "pedro-novaes",
    nome: "Pedro Novaes",
    naProgramacao: ["Pedro Novaes"],
    cargo: "Coordenação geral · Pesquisador LAPIG/UFG",
    resumo: "Geógrafo e documentarista, mestre em Ciência Ambiental pela USP. Foi secretário adjunto de Meio Ambiente de Goiás e é fellow do programa LEAD.",
    minibio: "Pedro Novaes é geógrafo e também documentarista. É mestre em Ciência Ambiental pela USP e doutorando em Ciências Ambientais pela Universidade Federal de Goiás. Foi chefe de gabinete da Agência Ambiental de Goiás e Secretário Adjunto de Meio Ambiente e Recursos Hídricos do Estado de Goiás entre 2000 e 2004. É fellow do Programa LEAD, de lideranças para meio ambiente e desenvolvimento. Trabalha como pesquisador no LAPIG, Laboratório de Sensoriamento Remoto e Geoprocessamento da UFG e no CEMPA-Cerrado. É também membro da equipe da Iniciativa Cerrados da Fiocruz. É colunista do site “A Redação” e colaborador da revista piauí. Escreveu o livro “O Jogo das Utopias Cruzadas - Participação, Natureza e Desenvolvimento”, publicado pela Editora Dialética."
  },
];
