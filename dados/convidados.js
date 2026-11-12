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
                 "Ler biografia completa".
   pendente    → (opcional) true enquanto o texto for provisório.
   ocultoNoGrid → (opcional) true para perfis que aparecem só no bloco
                  "Conselho Consultivo" do "Quem somos", sem cartão na
                  seção Participantes.

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
    naProgramacao: ["Carolina Stange Moulin"],
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

  /* ---------- Conselho Consultivo 2026 (só no "Quem somos") ---------- */
  {
    id: "daniela-melo-e-silva",
    nome: "Daniela Melo e Silva",
    ocultoNoGrid: true,
    cargo: "Vice-coordenadora · CIAMB/UFG",
    resumo: "Professora associada da UFG e vice-coordenadora do Programa de Pós-Graduação em Ciências Ambientais. Doutora em Biologia Animal pela UnB, pesquisa mutagênese ambiental e impactos de agrotóxicos na saúde humana e animal.",
    minibio: "Possui graduação em Biomedicina pela PUC Goiás (1997), mestrado em Genética pela Universidade Federal de Goiás (2000) e doutorado em Biologia Animal pela Universidade de Brasília (2006). Atualmente é professora associada da UFG, bolsista de produtividade nível 1 C, membro do Comitê de Assessoramento da área de Ciências Ambientais do CNPq e vice-coordenadora do Programa de Pós-Graduação em Ciências Ambientais da UFG. Tem experiência na área de mutagênese ambiental, principalmente nos temas: avaliação do impacto de agrotóxicos na saúde humana e animal; ensaios de mutagenicidade e genotoxicidade; risco associado à exposição a diversos estressores ambientais; e impactos em organismos não alvo."
  },
  {
    id: "guilherme-franco-netto",
    nome: "Guilherme Franco Netto",
    cargo: "Coordenador · Programa Cerrados em Rede/Fiocruz",
    resumo: "Médico, doutor em epidemiologia e coordenador do Programa de Saúde, Ambiente e Sustentabilidade da Fiocruz. É secretário executivo da Estratégia Fiocruz para a Agenda 2030.",
    minibio: "Médico, doutor em epidemiologia (PhD), com pós-doutorado no Departamento de Medicina Preventiva e Social da Faculdade de Medicina da Universidade Estadual de Campinas. Coordenador do Programa de Saúde, Ambiente e Sustentabilidade da Fundação Oswaldo Cruz no âmbito da Vice-Presidência de Ambiente, Atenção e Promoção da Saúde (VPAAPS/Fiocruz) e secretário executivo da Estratégia Fiocruz para a Agenda 2030."
  },
  {
    id: "sabrina-garcez",
    nome: "Sabrina Garcez",
    ocultoNoGrid: true,
    cargo: "Secretária de Governo · Prefeitura de Goiânia",
    resumo: "Advogada, especialista em Direito Constitucional e Administrativo. Foi vereadora por dois mandatos e a primeira mulher a presidir a CCJ da Câmara Municipal de Goiânia. Hoje é Secretária Municipal de Governo.",
    minibio: "Sabrina Garcez é advogada, especialista em Direito Constitucional e Administrativo. Iniciou sua trajetória no movimento estudantil, onde ajudou a criar o Passe Livre Estudantil. Eleita vereadora em 2017, foi a primeira mulher a presidir a CCJ da Câmara Municipal de Goiânia. Em seu segundo mandato, relatou projetos importantes como o novo Plano Diretor e os Códigos de Posturas e Tributário. Atualmente, é Secretária Municipal de Governo de Goiânia, trabalhando por uma cidade mais acessível, justa e inclusiva."
  },

  /* ---------- Participantes que responderam ao formulário ---------- */
  {
    id: "angel-chovert",
    nome: "Angel Domínguez Chovert",
    naProgramacao: ["Angel Chovert", "Angel Domínguez Chovert"],
    cargo: "Docente do IF/UFG · Meteorologista do CEMPA-Cerrado",
    resumo: "Meteorologista formado em Cuba, com mestrado pela UFPel e doutorado pelo INPE. É professor do Instituto de Física da UFG e meteorologista do CEMPA-Cerrado, atuando em previsão de tempo, clima e qualidade do ar.",
    minibio: "Possui graduação em Meteorologia pelo Instituto Superior de Tecnologias e Ciências Aplicadas, Havana, Cuba (2013), mestrado em Meteorologia pela Universidade Federal de Pelotas, Rio Grande do Sul, Brasil (2016) e doutorado em Meteorologia pelo Instituto Nacional de Pesquisas Espaciais, São Paulo, Brasil (2021). Tem experiência na área de Geociências, com ênfase em Meteorologia, atuando principalmente nos seguintes temas: modelos numéricos de previsão de tempo, clima e qualidade do ar, meteorologia física com destaque para as parametrizações de microfísica de nuvens, química da atmosfera, monitoramento das condições de tempo utilizando sensoriamento remoto, precipitação extrema em regiões urbanas, previsão operacional de tempo meteorológico e agrometeorologia. Atualmente atua como Professor de Magistério Superior no Instituto de Física da Universidade Federal de Goiás e como meteorologista do CEMPA-Cerrado, participando do desenvolvimento de um sistema de multiprodutos meteorológicos para a região do Cerrado no Centro-Oeste do Brasil."
  },
  {
    id: "jose-alexandre-felizola",
    nome: "José Alexandre Felizola Diniz Filho",
    naProgramacao: ["José Alexandre Felizola", "Jose Alexandre Diniz Filho", "José Alexandre Felizola Diniz Filho"],
    cargo: "Professor titular · Universidade Federal de Goiás",
    resumo: "Biólogo, professor titular da UFG e membro da Academia Brasileira de Ciências. Coordena o INCT em Ecologia, Evolução e Conservação da Biodiversidade e o eixo de Modelagem do CETI-Saúde.",
    minibio: "Graduado em Ciências Biológicas (bacharelado) pela Universidade Federal de Sergipe (1989), com mestrado (1992) e doutorado (1994) em Ciências Biológicas (Zoologia) pela Universidade Estadual Paulista Júlio de Mesquita Filho (UNESP). Desde 1994 é professor da Universidade Federal de Goiás (professor titular desde 1996) e entre 2014 e 2016 foi Pró-Reitor de Pós-Graduação desta universidade. Foi membro de diversos comitês da CAPES e coordenador adjunto da área de Ecologia Meio Ambiente entre 2009 e 2011. É bolsista de produtividade em pesquisa nível 1A do Conselho Nacional de Desenvolvimento Científico e Tecnológico. Em 2014 passou a ser membro da Academia Brasileira de Ciências e em 2018 recebeu a Comenda da Ordem Nacional do Mérito Científico, da Presidência da República. Coordena, desde 2017, o INCT em “Ecologia, Evolução e Conservação da Biodiversidade” (aprovado para um segundo ciclo começando em 2025). Coordenador do eixo de “Modelagem” do “Centro de Excelência em Tecnologia e Inovação em Saúde” (CETI-Saúde), da UFG, e financiado pela FAPEG. Tem experiência nas áreas de macroecologia, genética e ecologia geográfica e métodos filogenéticos comparativos, sendo atualmente editor associado da “NPJ Biodiversity”."
  },
  {
    id: "fabiana-nunes",
    nome: "Fabiana Nunes",
    naProgramacao: ["Fabiana Nunes"],
    cargo: "Gerente de Inovação para Economia Circular · SECTI-GO",
    resumo: "Arquiteta e urbanista com especialização em Planejamento e Gestão Urbana e MBA em Gerenciamento de Projetos. É gerente de Inovação para Economia Circular na SECTI-GO, onde lidera o Programa Sukatech.",
    minibio: "Fabiana Maria Nunes é arquiteta e urbanista (PUC) com especialização em Planejamento e Gestão Urbana (UFG) e MBA em Gerenciamento de Projetos (FGV). Com mais de duas décadas de trajetória profissional atuando na interface entre planejamento urbano, infraestrutura e desenvolvimento sustentável, exerce atualmente o cargo de Gerente de Inovação para Economia Circular na Secretaria de Estado de Ciência, Tecnologia e Inovação de Goiás (SECTI-GO). Nesse papel, lidera o Programa Sukatech, uma política pública estadual estruturante focada na logística reversa e reciclagem de resíduos eletroeletrônicos (REEE), unindo sustentabilidade, ecoinovação e inclusão sociodigital. Anteriormente, atuou como Gerente de Economia Verde na Secretaria de Estado de Meio Ambiente e Desenvolvimento Sustentável (SEMAD), onde presidiu o Comitê de Logística Reversa do estado. Pelo impacto prático e socioambiental de sua atuação à frente do Sukatech, foi reconhecida nacionalmente em 2026 como finalista do Prêmio Espírito Público, na categoria Meio Ambiente e Emergência Climática, e do Prêmio Top Inovação UNINTER."
  },
  {
    id: "marcel-santana",
    nome: "Marcel Sant'Ana",
    naProgramacao: ["Marcell Sant’Anna", "Marcel Sant'Ana", "Marcel Sant’Ana", "Marcel Claudio Sant'Ana"],
    cargo: "Especialista em Gestão de Risco de Desastres · BID",
    resumo: "Doutor em Arquitetura e Urbanismo, com mais de 20 anos de experiência em planejamento urbano, gestão de risco de desastres e mudança do clima. Atualmente é especialista em Gestão de Risco de Desastres no BID.",
    minibio: "Marcel Cláudio Sant'Ana é doutor em Arquitetura e Urbanismo, com mais de 20 anos de experiência em planejamento urbano, gestão de risco de desastres e mudança do clima. No Ministério das Cidades, coordenou uma série de projetos nacionais, incluindo o Projeto GIDES (Brasil-Japão), premiado com o Sasakawa Award da UNDRR (2017). Tem experiência com BID, JICA, GIZ e ICLEI. Atualmente atua como Especialista em Gestão de Risco de Desastres no Banco Interamericano de Desenvolvimento (BID)."
  },
  {
    id: "karla-faria",
    nome: "Karla Maria Silva de Faria",
    naProgramacao: ["Karla Faria", "Karla Maria Silva de Faria"],
    cargo: "Docente do CIAMB e do PPGEO · UFG",
    resumo: "Geógrafa, com mestrado e doutorado pela UFG. É docente do CIAMB e do PPGEO e coordena a Unidade de Pesquisa em Biodiversidade Prof. José Ângelo Rizzo. Pesquisa geoecologia e planejamento ambiental, com foco nas paisagens do Cerrado.",
    minibio: "Graduada em Geografia, com mestrado e doutorado pela Universidade Federal de Goiás. Tem experiência na área de Geografia, com ênfase em Geoecologia e Planejamento Ambiental. Coordena o Grupo de Pesquisa Geoecologia das Paisagens do Cerrado. É docente do quadro permanente do Programa de Pós-Graduação em Ciências Ambientais (CIAMB) e do Programa de Pós-Graduação em Geografia (PPGEO), ambos da UFG. Representa a UFG em conselhos consultivos de unidades de conservação no estado de Goiás e coordena a Unidade de Pesquisa em Biodiversidade Prof. José Ângelo Rizzo, da UFG."
  },
  {
    id: "cristina-musmanno",
    nome: "Cristina Paragó Musmanno",
    naProgramacao: ["Cristina Musmanno", "Cristina Paragó Musmanno"],
    cargo: "Gerente de Emergências em Saúde Pública · SES-GO",
    resumo: "Bióloga, doutora em Medicina Tropical e Saúde Pública pela UFG. É tecnologista do Ministério da Saúde, cedida à SES-GO, onde gerencia as emergências em saúde pública e a Rede VigiarSUS. Graduada pela UERJ e mestre pela UFRJ.",
    minibio: "Bióloga, doutora em Medicina Tropical e Saúde Pública pela Universidade Federal de Goiás. Servidora pública efetiva, no cargo de Tecnologista do Ministério da Saúde, cedida desde 2023 para a Secretaria de Estado da Saúde de Goiás, onde ocupa a função de Gerente de Emergências em Saúde Pública, liderando as áreas técnicas afetas à Rede Nacional de Vigilância, Alerta e Resposta às Emergências em Saúde Pública no âmbito do Sistema Único de Saúde (Rede VigiarSUS) e à Rede Nacional de Centros de Informação e Assistência Toxicológica (Renaciat). Graduada em Ciências Biológicas pela Universidade do Estado do Rio de Janeiro e mestre em Ciências Biológicas pela Universidade Federal do Rio de Janeiro. Possui especialização em Vigilância em Saúde Ambiental pela Universidade Federal do Rio de Janeiro e especialização em Análise em Situação de Saúde pela Universidade Federal de Goiás."
  },
  {
    id: "rodrigo-lustosa",
    nome: "Rodrigo Lustosa",
    naProgramacao: ["Rodrigo Lustosa", "Rodrigo Lustosa Victor"],
    cargo: "Diretor-presidente · ESA-OAB/GO",
    resumo: "Advogado criminalista, especialista em Direito Penal e mestre em Direitos Humanos. É diretor-presidente da ESA-OAB/GO e foi presidente da Comissão de Segurança Pública da OAB-GO.",
    minibio: "Diretor-presidente da ESA, a Escola Superior de Advocacia da OAB-GO. É advogado em Direito Criminal, especialista em Direito Penal e mestre em Direitos Humanos. Atua em Goiânia e foi presidente da Comissão de Segurança Pública da OAB-GO."
  },
  {
    id: "celene-cunha",
    nome: "Celene Cunha",
    naProgramacao: ["Celene Cunha", "Celena Cunha", "Celene Cunha Monteiro Antunes Barreira"],
    cargo: "Professora · IESA/UFG",
    resumo: "Geógrafa, com mestrado pela UFG e doutorado pela USP; fez pós-doutorado na UERJ. É professora do IESA/UFG e coordena o Núcleo Goiânia do Observatório das Metrópoles. Pesquisa análise regional, desenvolvimento e planejamento urbano no Cerrado.",
    minibio: "Graduada em Geografia pela Universidade Federal de Goiás (1978). Mestre em História das Sociedades Agrárias pela Universidade Federal de Goiás (1989). Doutora em Geografia (Geografia Humana) pela Universidade de São Paulo (1997). Pós-doutorado pela Universidade Estadual do Rio de Janeiro (2013). Atualmente é professora voluntária integrando o corpo docente do Programa de Pós-Graduação em Geografia/IESA/UFG. Na UFG exerceu as funções acadêmicas de Tutora de PET-Geografia/UFG (1997-2003), Diretora do Instituto de Estudos Socioambientais (IESA)/UFG (1998-2002 e 2014-2018) e Pró-Reitora de Graduação/UFG (2002-2006). Fez parte da equipe de Avaliação da Pós-graduação da CAPES, na área de Geografia, entre 2020-2022. Coordena o Núcleo Goiânia do Observatório das Metrópoles/INCT/CNPq. Tem experiência em pesquisas na área de Geografia, com ênfase em Análise Regional e Planejamento Urbano e Regional, atuando principalmente nos seguintes temas: análise regional, desenvolvimento regional, configuração socioespacial, cerrado, cidade e regiões metropolitanas."
  },
  {
    id: "joao-batista-de-deus",
    nome: "João Batista de Deus",
    naProgramacao: ["João Batista de Deus"],
    cargo: "Professor · IESA/UFG",
    resumo: "Geógrafo, com mestrado e doutorado em Geografia Humana pela USP. É professor do IESA/UFG e pesquisa geografia urbana e regional, planejamento urbano, cidades médias e urbanização.",
    minibio: "Possui graduação em Geografia pela Universidade Federal de Goiás (1990), mestrado em Geografia (Geografia Humana) pela Universidade de São Paulo (1996) e doutorado em Geografia (Geografia Humana) pela Universidade de São Paulo (2002). Atualmente é professor da Universidade Federal de Goiás. Tem experiência na área de Geografia, com ênfase em Geografia Urbana e Regional, atuando principalmente nos seguintes temas: planejamento urbano, geografia urbana, espaço urbano, cidade média e urbanização."
  },
  {
    id: "antonio-gomide",
    nome: "Antônio Gomide",
    naProgramacao: ["Antônio Gomide", "Dep. Antônio Gomide", "Antonio Gomide", "Antonio Roberto Ottoni Gomide"],
    cargo: "Deputado estadual · Alego",
    resumo: "Deputado estadual por Goiás, em seu terceiro mandato. Foi vereador por quatro vezes e prefeito de Anápolis entre 2009 e 2014; preside a Comissão de Meio Ambiente da Alego.",
    minibio: "Deputado estadual por Goiás, reeleito para seu terceiro mandato neste ano. Foi, por quatro vezes, vereador de Anápolis, e prefeito da cidade entre 2009 e 2014. Preside hoje a Comissão de Meio Ambiente da Assembleia Legislativa de Goiás."
  },
  {
    id: "danielle-oliveira",
    nome: "Danielle Oliveira",
    naProgramacao: ["Danielle Oliveira", "Danielle Gomes de Oliveira"],
    cargo: "Secretária de Articulação Institucional e Captação · Prefeitura de Goiânia",
    resumo: "Engenheira de Computação pela UFG, com MBA em Inteligência e Negócios. Servidora pública de carreira, é secretária municipal de Articulação Institucional e Captação de Goiânia.",
    minibio: "Danielle Gomes de Oliveira é graduada em Engenharia de Computação pela Universidade Federal de Goiás e possui MBA Executivo em Inteligência e Negócios, além de formação internacional em consultoria empresarial e desenvolvimento humano. Servidora pública de carreira, iniciou sua trajetória em 1999 no Governo do Estado de Goiás. Ao longo de mais de duas décadas de atuação no setor público, consolidou experiência nas áreas de planejamento, governança, tecnologia e gestão estratégica, com forte atuação na estruturação, coordenação, execução e monitoramento de projetos governamentais prioritários. Danielle é servidora efetiva da Saneamento de Goiás S.A. e foi Secretária Adjunta, Subsecretária de Governança e Superintendente de Prioridades Governamentais da Secretaria-Geral de Governo de Goiás. Atuou ainda nas Secretarias de Estado de Economia, Políticas para Mulheres e Promoção da Igualdade Racial, Ciência e Tecnologia, Cidadania e na Universidade Estadual de Goiás."
  },
  {
    id: "pollyana-borges",
    nome: "Pollyana Borges",
    naProgramacao: ["Pollyana Borges"],
    cargo: "Secretária de Meio Ambiente · Aparecida de Goiânia",
    resumo: "Advogada, é secretária municipal do Verde e do Meio Ambiente de Aparecida de Goiânia desde 2025. Foi secretária de Governo do município.",
    minibio: "Pollyana Borges é advogada e titular da Secretaria do Verde e do Meio Ambiente de Aparecida de Goiânia desde 2025. Foi também secretária de Governo do município."
  },
  {
    id: "elizabete-ferreira",
    nome: "Elizabete Alves Ferreira",
    naProgramacao: ["Elisabete Ferreira", "Elizabete Ferreira", "Elizabete Alves Ferreira"],
    cargo: "Chefe do 10º Distrito de Meteorologia · INMET/GO-TO",
    resumo: "Meteorologista, com mestrado em Meteorologia Agrícola pela UFV. É chefe do 10º Distrito de Meteorologia (DISME) do INMET, responsável por Goiás e Tocantins.",
    minibio: "Possui graduação em Meteorologia pela Universidade Federal do Pará (1997) e mestrado em Meteorologia Agrícola pela Universidade Federal de Viçosa (2000). Atualmente ocupa o cargo de Chefe do 10º DISME GO/TO/INMET. Tem experiência nas áreas de Meteorologia e Agrometeorologia, atuando principalmente nos seguintes temas: estresse hídrico, soja e agronegócio."
  },
  {
    id: "marcia-lobo",
    nome: "Márcia Lobo",
    naProgramacao: ["Márcia Lobo"],
    cargo: "Gerente de CT&I para Sustentabilidade · SECTI-GO",
    resumo: "Física, com especializações em gestão. É gerente de CT&I para Sustentabilidade na SECTI-GO, onde coordena iniciativas como o Goiás Verde e o Programa Oasis.",
    minibio: "Márcia Lobo é gerente de CT&I para Sustentabilidade na Secretaria de Estado de Ciência, Tecnologia e Inovação de Goiás. Atua na articulação de parcerias entre governo, universidades e institutos de pesquisa para acelerar soluções ambientais baseadas em evidências. Lidera iniciativas como o Goiás Verde e o Programa Oasis (infraestrutura verde nas Escolas do Futuro), além da Plataforma Integrada de Dados de GEE e estoques de carbono em agroecossistemas. Com formação em Física e especializações em gestão, coordena contratações de P&D e inovação, estrutura governança e indicadores, e impulsiona projetos de monitoramento (torres de fluxo, radares meteorológicos) voltados a resultados para a sociedade."
  },
  {
    id: "sandro-mabel",
    nome: "Sandro Mabel",
    naProgramacao: ["Sandro Mabel"],
    cargo: "Prefeito de Goiânia",
    resumo: "Prefeito de Goiânia desde 2025. Foi deputado federal por quatro mandatos e deputado estadual por Goiás; presidiu a FIEG.",
    minibio: "Sandro Mabel é prefeito de Goiânia desde 2025. Foi deputado federal durante quatro mandatos e serviu também como deputado estadual por Goiás, durante uma legislatura. É formado em Administração de Empresas e foi também presidente da FIEG, a Federação das Indústrias do Estado de Goiás."
  },
  {
    id: "adriano-da-rocha-lima",
    nome: "Adriano da Rocha Lima",
    naProgramacao: ["Adriano da Rocha Lima", "ADRIANO DA ROCHA LIMA"],
    cargo: "Ex-secretário-geral de Governo de Goiás",
    resumo: "Engenheiro eletricista e de telecomunicações pela PUC-RJ, com mestrado em Filosofia pela UFRJ. Foi secretário de Desenvolvimento e Inovação e secretário-geral de Governo de Goiás; atuou em multinacionais como Claro e Promon.",
    minibio: "Adriano da Rocha Lima é engenheiro eletricista e de telecomunicações pela PUC-RJ, mestre em Filosofia pela UFRJ, com especializações em Administração Executiva de Negócios e Planejamento Estratégico de Redes. Com sólida trajetória na iniciativa privada, atuou em multinacionais como Nortel, Promon e Claro Brasil, onde foi diretor de Engenharia por dez anos, além de fundar e presidir a WebRadar, empresa de tecnologia especializada em Big Data e Internet das Coisas. Na gestão pública, foi secretário de Desenvolvimento e Inovação de Goiás (2019–2020) e secretário-geral de Governo (2020–2026), com atuação estratégica em projetos de inovação, inteligência artificial, mobilidade urbana, energia e desenvolvimento econômico. Participou da criação do Centro de Excelência em Inteligência Artificial (CEIA-UFG), da implantação de políticas estaduais de inovação e da modernização do transporte coletivo da Região Metropolitana de Goiânia. Também exerceu funções em importantes conselhos e órgãos de governança, além de atuar como coordenador-executivo da campanha presidencial de Ronaldo Caiado em 2026. É coautor do livro Inovação e Traição, publicado em 2017 pela Editora Vozes, em parceria com o filósofo Clóvis de Barros Filho."
  },
  {
    id: "natalia-brito",
    nome: "Natalia Almeida Brito",
    naProgramacao: ["Natalia Almeida Brito", "Natalia Brito", "Nathalia Brito"],
    cargo: "Gerente de Mudanças Climáticas e Serviços Ecossistêmicos · SEMAD-GO",
    resumo: "Advogada pela UFG, é gerente de Mudanças Climáticas e Serviços Ecossistêmicos da SEMAD-GO. Atua na implementação do Programa Goiás Resiliente, do PSA, do PPCDQIF e da abordagem jurisdicional para REDD+.",
    minibio: "Advogada, graduada em Direito pela Universidade Federal de Goiás. É gerente de Mudanças Climáticas e Serviços Ecossistêmicos na Secretaria de Estado de Meio Ambiente e Desenvolvimento Sustentável de Goiás. Nesse papel, atua na tomada de decisão da gestão pública baseada em evidências e na implementação do Programa Estadual Goiás Resiliente, Adaptacidades, Programa de Pagamento por Serviços Ambientais (PSA), Plano de Prevenção e Controle do Desmatamento, Incêndios e Queimadas Florestais (PPCDQIF) e Abordagem Jurisdicional para REDD+, com vistas a contribuir para o desenvolvimento sustentável, adaptação baseada em ecossistemas, mitigação das emissões de GEE e conservação do Cerrado."
  },
];
