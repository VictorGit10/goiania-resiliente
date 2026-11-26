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
  "d1-abertura":               { descricao: "", resumo: `A abertura institucional da segunda edição do simpósio Goiânia Resiliente reuniu poder público, academia e organizações parceiras para avaliar avanços desde 2024 e articular ações de adaptação climática. Com condução de Pedro Novaes, participaram Rodrigo Lustosa (em vídeo pela ESA–OAB/GO), Zilma Peixoto (AMMA), Wendel Couto (pró-reitor de Pesquisa e Inovação da UFG), Paulo D’Ávila (IDESA) e Guilherme Franco Netto (Fiocruz Cerrados). As falas enfatizaram a passagem do diagnóstico à prevenção, diante de extremos como o temporal de 70 mm que atingiu Goiânia em 21 de novembro.

## Principais pontos
- Pedro Novaes citou o relatório preliminar do evento, o impasse da COP31 na Turquia e auditoria do TCU sobre segurança hídrica, defendendo o planejamento preventivo em vez de respostas apenas emergenciais.
- Zilma Peixoto apresentou a estruturação da diretoria e da gerência de mudanças climáticas na AMMA, a institucionalização do Fórum Goianiense de Mudanças Climáticas (Lei nº 11.381/2025), a entrada no AdaptaCidades, a classificação da Zona de Desenvolvimento Sustentável no Programa Cidades Verdes Resilientes, com cerca de R$ 917 milhões em financiamentos do BNDES e do CAF, o projeto do parque-esponja no Parque Maracanã e a atuação da Brigada Bacurau na prevenção de incêndios nos parques em 2026.
- Pela UFG, destacou-se o apoio estadual aos centros de excelência, com cerca de R$ 20 milhões do Estado para o LaMCAD, centro de processamento de dados de alto desempenho da UFG, e previsão de inauguração em 15 de dezembro; a nova sede foi estimada em R$ 13–14 milhões, e há ainda um projeto financiado pela FINEP, sem valor detalhado na fala.
- Paulo D’Ávila alertou para a segurança dos 51 barramentos em parques urbanos de Goiânia, citando sete lagos em cascata no Parque Zoológico e demandas no Jardim Botânico, e pediu resoluções para encaminhamento ao Executivo.
- Guilherme Franco Netto tratou a crise climática como crise de saúde e parte da tripla crise planetária, propondo Goiânia como cidade-laboratório no Cerrado com governança transversal e indicadores alinhados à Agenda 2030 e ao ODS 18.

## Debate
Não houve debate nem perguntas da plateia nesta sessão.

## Encaminhamentos
- Incorporar as discussões dos dois dias à versão final do relatório do Goiânia Resiliente, a ser publicada no site do evento junto às apresentações, vídeos, transcrições e fotos.
- Disponibilizar o auditório da Pró-Reitoria de Pesquisa e Inovação da UFG para próximos encontros e apresentar o projeto de urbanização do Parque Tecnológico da UFG para eventual parceria com o município.
- Elaborar resoluções ao fim do simpósio para envio ao Poder Executivo, conforme proposto pelo IDESA.` }, /* Abertura institucional */
  "d1-cidades-cerrado":        { descricao: "", resumo: `A sessão analisou como a dinâmica atmosférica do Cerrado e o modelo de urbanização produzem riscos climáticos desiguais nas cidades. Na conferência, Carlos Gurjão explicou a relação entre alterações no uso do solo, chuvas extremas e ondas de calor em Goiânia, potencializadas pelo Super El Niño. Nos comentários, Celene Cunha e João Batista de Deus, sob mediação de Ary Soares dos Santos, relacionaram os dados climáticos ao planejamento urbano, aos instrumentos do Estatuto da Cidade e às disputas pelo território e pela água na Região Metropolitana de Goiânia.

## Principais pontos
- Carlos Gurjão mostrou que a troca de áreas vegetadas por concreto e asfalto altera o balanço de energia, eleva as temperaturas mínimas noturnas e a frequência de dias acima de 38 °C, além de agravar o escoamento superficial em chuvas convectivas localizadas, como a de 21 de novembro, com pico de 70,6 mm na Paróquia São José, no Setor Sul.
- O conferencista explicou que a fumaça de queimadas locais e da Amazônia (transportada por rios atmosféricos) degrada a qualidade do ar e inibe a precipitação (as nuvens se dissipam sem chover), e citou projeção da Fiocruz de 866 mil casos de dengue e 90 mil de chikungunya até abril de 2027 sob atuação do El Niño.
- Como prioridades de adaptação, Carlos Gurjão defendeu a instalação de um radar meteorológico abrangendo a Região Metropolitana de Goiânia, ampliação da arborização e de áreas permeáveis, proteção de nascentes e integração com Defesa Civil e saúde.
- Celene Cunha apresentou o projeto Adaptação – Rede AIPUAC (Ministério das Cidades, INCT Observatório das Metrópoles e Fiocruz), que selecionou 50 propostas na primeira chamada do Edital SNDUM nº 03/2025 (Cidade de Goiás e Catalão em Goiás) para inserir a pauta climática em instrumentos como zoneamento, parcelamento do solo (Lei nº 6.766/1979) e REURB, priorizando áreas vulneráveis e o enfrentamento ao racismo ambiental.
- João Batista de Deus criticou a responsabilização de técnicos municipais pelo crescimento urbano, afirmando que a lógica do mercado orienta a expansão periférica, a dependência de automóveis, o baixo reaproveitamento de resíduos e a redução de APPs no Plano Diretor de Goiânia.

## Debate
No debate, Celene Cunha alertou que o Plano Diretor vigente liberou a expansão imobiliária na região norte de Goiânia sem dialogar com o plano metropolitano (PDUI) elaborado pela UFG, ainda parado antes da aprovação pela Assembleia Legislativa, ameaçando mananciais de abastecimento e remanescentes do Mato Grosso Goiano; João Batista de Deus reforçou o risco futuro de falta de água na região metropolitana, e Ary Soares dos Santos destacou que os mesmos eventos extremos atingem de forma muito mais severa as periferias. Não houve perguntas da plateia por falta de tempo.

## Encaminhamentos
- Ministrar, no próximo ano, curso de extensão de 40 horas para gestores municipais sobre adaptação climática e instrumentos de planejamento urbano, anunciado por Celene Cunha.
- Retomar a pauta de aprovação e gestão do PDUI e compatibilizar o Plano Diretor de Goiânia com a proteção hídrica da região norte.` }, /* As Cidades do Cerrado: ciência para entender o que muda… */
  "d1-goiania-onde-estamos":   { descricao: "", resumo: `O painel apresentou a estruturação institucional da agenda climática na AMMA desde a primeira edição do simpósio e os projetos de adaptação em curso em Goiânia. Sob mediação de Fernando Augusto Paiva do Prado e Silva, Gabriel Tenaglia detalhou a criação da gerência climática e a captação de recursos federais e internacionais, enquanto Pedro Baima expôs o conceito de cidade biocêntrica e o projeto Zona de Desenvolvimento Sustentável. Janaína Holanda trouxe a perspectiva do Ministério das Cidades sobre planejamento urbano e programas federais.

## Principais pontos
- Gabriel Tenaglia relatou a criação da Diretoria de Gestão Ambiental e Mudanças Climáticas e da gerência climática (GERCARB) na AMMA, a reativação do Fórum Goianiense de Mudanças Climáticas (anteriormente vetado) e a proposta de integrar o fundo climático ao Fundo Municipal de Meio Ambiente no COMAM.
- A equipe técnica da AMMA foi selecionada entre os 50 municípios da primeira fase do Cidades Verdes Resilientes e entre as 20 cidades goianas do AdaptaCidades, recebeu apoio do Bloomberg Philanthropies (YCAF, com US$ 50 mil para 10 projetos de jovens de 15 a 24 anos, R$ 20 mil por projeto — gerando o desafio inédito de operacionalizar doação externa direta no município) e do ITDP, chegou à final do FinanCidades e teve o projeto de resfriamento de edifícios **pré-selecionado** no programa da ONU.
- Segundo Gabriel Tenaglia, Goiânia reservou cerca de R$ 917 milhões em financiamentos, sendo R$ 584,4 milhões pelo BNDES (25 anos de prazo e cinco de carência) e R$ 332,4 milhões pelo CAF.
- Os recursos do BNDES incluem a reconstrução da Marginal Botafogo, a microdrenagem do Jardim Atlântico, pontes e travessias, o Parque Linear Barreiro, o Parque Atlântico, o Bosque dos Buritis e o Parque Buracão; os do CAF, drenagem e pavimentação em Vila Canaã, Mundo Novo III, Jardim das Orquídeas, Chácara São José e Santa Genoveva, o canal do Botafogo, a Marginal Leste e equipamentos sociais (6 CRAS reformados, 3 novos, 4 CREAS e 1 Centro-Dia).
- Pedro Baima apresentou a proposta de cidade biocêntrica — integrando infraestrutura cinza aos sistemas azul, verde e vermelho (fauna e microrganismos) — e detalhou a Zona de Desenvolvimento Sustentável, baseada em subsistemas hidrológicos para retardar o escoamento, recuperar nascentes, implantar jardins de chuva em rotatórias, criar corredores de bioeconomia, conectar oito parques no anel de Atílio Corrêa Lima e estruturar o complexo bioclimático da Vila Canaã, módulo-piloto de edificações públicas resilientes da ZDS.
- Janaína Holanda ressaltou a relevância de dar lugar institucional ao clima nos municípios, convidou Goiânia a participar do edital aberto do projeto Adaptação e reforçou a necessidade de articular planos locais de adaptação (PLACs), Plano Diretor e PDUI metropolitano.

## Debate
Fernando Augusto Paiva do Prado e Silva questionou na abertura como as ações de adaptação e mitigação equilibram os pilares da sustentabilidade, ponto ilustrado pelas apresentações da AMMA ao associar drenagem, mobilidade ativa e bioeconomia; Janaína Holanda comentou os avanços municipais e recomendou acrescentar a população em situação de rua no capítulo de vulnerabilidade às ondas de calor do relatório preliminar do evento. Não houve perguntas da plateia por falta de tempo.

## Encaminhamentos
- Submeter até três instrumentos urbanísticos de Goiânia ao edital do projeto Adaptação (aberto até 12 de janeiro na plataforma Redus) e inscrever as práticas locais no banco de experiências do Portal Capacidades.
- Incluir a população em situação de rua no recorte de vulnerabilidade a ondas de calor na versão final do relatório do Goiânia Resiliente.
- Articular politicamente a retomada do PDUI da Região Metropolitana de Goiânia na pauta estadual e municipal.` }, /* Goiânia: onde estamos? Projetos estruturantes para adaptação */
  "d1-governanca":             { descricao: "", resumo: `O painel discutiu quem decide, quem financia e quem arca com os custos da crise climática entre União, Estados e municípios. Sob mediação de Thomaz Ramalho, Carolina Stange Moulin (SEMAD-GO), Dep. Antônio Gomide (Alego) e Pollyana Borges (SVMA/Aparecida de Goiânia) examinaram os limites do pacto federativo, a escassez de recursos não reembolsáveis e o descompasso entre mandatos de quatro anos e desafios climáticos de longo prazo, contrapondo programas em execução no Estado e em Aparecida de Goiânia a gargalos de coordenação e capacidade técnica.

## Principais pontos
- Thomaz Ramalho destacou que planos não se autoexecutam e enfrentam restrições fiscais, pulverização orçamentária por emendas parlamentares e insegurança jurídica sobre gestores, defendendo a institucionalização do planejamento na administração indireta.
- Carolina Stange Moulin relatou que na COP31 os países em desenvolvimento cobraram US$ 1,3 trilhão por ano, apontando que repasses externos priorizam a União e a Amazônia (com o Cerrado excluído do Fundo de Florestas Tropicais para Sempre) e que bancos multilaterais cobram retorno comercial (financing e bancabilidade) em vez de doações (funding).
- A subsecretária detalhou ações custeadas pelo Tesouro estadual e por três fundos em operação (Compensação Ambiental, Conversão de Multas e Recursos Hídricos), a estruturação do REDD+ jurisdicional, três frentes de PSA (Cerrado em Pé, Povos e Comunidades Tradicionais e Brigadas, com queda de 68% na área queimada em 2026), redução de 72% no desmatamento (PRODES) e o programa Goiás Resiliente para apoiar municípios.
- Pollyana Borges ressaltou que problemas ambientais ultrapassam limites entre Goiânia e Aparecida de Goiânia, lamentou a falta de recursos federais para drenagem preventiva e citou o primeiro plano de contingência, os estudos finais para o decreto de uso responsável da Serra das Areias (95% privada), a expectativa de entregar mais de cinco parques até o fim da gestão e obras de drenagem e saneamento em assentamentos.
- Dep. Antônio Gomide afirmou que os entes federativos decidem, mas a sociedade — sobretudo moradores de fundos de vale e áreas alagáveis — paga a conta, configurando transferência regressiva de renda; defendeu transparência, inventário atualizado, projetos prioritários, prazos e andamento das obras, o clima como política pública permanente e o fim das emendas parlamentares; para ele, a Lei 11.381/2025 criou o espaço de participação, mas não criou automaticamente a prática.
- O deputado lembrou que Goiânia já tem Plano Diretor (2020), Plano de Saneamento (2019, com contrato até 2049) e o Plano de Drenagem em elaboração com a UFG; o problema, disse, não é diagnóstico, mas prioridade orçamentária e execução.

## Debate
No debate, Dep. Antônio Gomide apontou ausência de diálogo entre município, Estado e União, citando impasses no lixão de Goiânia e a falta de planos municipais de drenagem nos 246 municípios goianos; Carolina Stange Moulin contrapôs que há divergências específicas próprias da democracia, mas que o Estado conduz diálogo contínuo na regionalização de saneamento e resíduos e na gestão de APAs, defendendo incorporar a lente climática em concessões com horizonte de 30 a 50 anos. Pollyana Borges pediu mais suporte técnico aos municípios menores e integração metropolitana; não houve perguntas da plateia.` }, /* Quem decide e quem paga a conta do clima? Um debate sobre governança e articulação federativa */
  "d1-matchmaking":            { descricao: "", resumo: `A sessão detalhou requisitos técnicos, institucionais e financeiros para transformar propostas locais de adaptação climática em projetos financiáveis. Com mediação de Manuel Ferreira, Patrícia Freitas apresentou os caminhos e exigências para operações de crédito externo e fontes nacionais e lembrou que 25% da população de Goiânia vive em áreas de vulnerabilidade alta ou muito alta, enquanto Marcel Sant’Ana explicou a atuação do BID em gestão de risco de desastres e projetos urbanos integrados. Iniciado antes da chegada do prefeito para o painel de gestão municipal, o painel foi interrompido por essa sessão e concluído ao final da tarde com a fala do BID e perguntas do público.

## Principais pontos
- Patrícia Freitas afirmou que o financiamento para adaptação chega a quem leva projeto pronto à fonte certa e no tempo certo, detalhando as condições do crédito externo: municípios com ao menos 80 mil habitantes, CAPAG A ou B (Goiânia possui CAPAG A+), contrapartida mínima de 20%, aprovação e garantia da União, com GTEC, COFIEX, Tesouro e Senado, operações em geral acima de US$ 50 milhões e ciclo de 18 a 24 meses até o contrato.
- A consultora comparou fontes disponíveis — bancos multilaterais (BID, CAF, Banco Mundial) para programas integrados, Fundo Clima do BNDES para escopo ambiental específico, linhas nacionais em reais e cooperações técnicas não reembolsáveis voltadas a estudos e preparação, e não a grandes obras.
- Apoiada no Guia Prático do MPO/SEAID e CAF, Patrícia Freitas destacou como pilares de aprovação a lógica vertical (problema delimitado por dados oficiais, causas, soluções e indicadores de resultado em vez de métricas de obra), plano de manutenção, mitigação de riscos de desapropriação e aderência ao PPA da União, respeitando as quatro janelas anuais da COFIEX e o teto de US$ 100 milhões para projetos ambientais e climáticos em 2026 (US$ 40 milhões restantes em junho).
- Marcel Sant’Ana frisou que gestão de risco de desastres e adaptação climática são transversais a saúde, educação, transporte e habitação e apresentou o gargalo em números: 68% das Defesas Civis municipais acumulam funções, 70% operam com menos de R$ 50 mil por mês e só 15% atuam em consórcios; no iGOPP Brasil, a implementação está em 31% e a recuperação, em 24%. Universidades e centros como o CEMPA-Cerrado são parceiros estratégicos.
- Marcel Sant’Ana apresentou o diagnóstico de Goiânia — 134 pontos de alagamento, 120 setores de risco e 6.464 pessoas expostas, com maior risco no Centro e no Norte — e apontou três lacunas de prontidão: revisar a curva IDF de 2018 com cenários de clima futuro (estudo de cerca de R$ 1 milhão), dar custo e meta à infiltração e ter projetos prontos.
- O representante do BID explicou que o banco também opera cooperações técnicas não reembolsáveis — inclusive cooperações emergenciais após desastres para estudos e priorização de investimentos — e que o contato pode ser feito por ponto focal governamental.

## Debate
Manuel Ferreira perguntou sobre pleitos por consórcios metropolitanos (Patrícia Freitas confirmou a aceitação pela COFIEX, apesar de dificuldades de gestão) e sobre como viabilizar a aquisição de um radar meteorológico em operação de crédito, respondendo Marcel Sant’Ana que o equipamento deve compor um sistema integrado de serviços, salas de crise e capacitação institucional. No público, uma participante vinculada ao INMET perguntou como o órgão pode apresentar projetos (sendo orientada a atuar como executor via prefeitura ou via ministério em cooperação nacional), e um participante da plateia questionou se o BID financia parques a fundo perdido citando parque linear de 24 km iniciado em 2001 em Goiânia, esclarecendo Marcel Sant’Ana que obras exigem financiamento reembolsável inserido em estratégia urbana integrada.

## Encaminhamentos
- Disponibilizar as apresentações e os contatos dos palestrantes no portal do evento para continuidade das consultas técnicas por e-mail.
- Articular a aproximação entre centros de excelência (como o CEMPA-Cerrado/UFG), consultorias especializadas e pontos focais da administração pública municipal ou estadual para estruturar projetos integrados e pleitos de cooperação técnica junto ao BID.` }, /* Matchmaking: bons projetos para financiamentos reais */
  "d1-monitoramento":          { descricao: "", resumo: `Realizada antes da sessão de matchmaking por ajuste na programação, a roda de conversa abordou como o monitoramento e a previsão do tempo e do clima apoiam a resposta a eventos extremos em Goiânia e em Goiás. Sob mediação de Gislaine Cristina Luiz, Elizabete Alves Ferreira (INMET), Angel Chovert (CEMPA-Cerrado/UFG) e Marcelo Luz dos Santos (Defesa Civil de Goiânia) discutiram tendências observadas nas chuvas e temperaturas, carências de infraestrutura e de pessoal especializado, e os protocolos interinstitucionais que transformam previsões em alertas e ações em campo.

## Principais pontos
- Elizabete Ferreira relatou aumento de temperaturas e chuvas mais intensas e irregulares em Goiás desde os anos 1990 (com episódios de 50 mm em uma hora, 70 mm em duas horas, máximas de 35 °C a 40 °C em setembro de 2023 e ondas de calor de agosto a dezembro de 2024), detalhando a rede do INMET (23 estações automáticas e seis convencionais no estado, com 17 novas previstas para o próximo ano, mas ainda com lacuna no norte goiano).
- A meteorologista explicou a combinação de modelos (COSMO, europeu e americano), as reuniões diárias entre INMET, CEMADEN e Defesa Civil e os encontros mensais com a ANA, apontando a necessidade de integrar o serviço geológico e combater notícias falsas que distorcem avisos meteorológicos.
- Angel Chovert distinguiu tempo (previsível em até 15 a 20 dias, escala das tempestades convectivas rápidas) de clima (médias de 30 anos e sua variabilidade) e apontou três frentes prioritárias para Goiânia: integração entre órgãos, customização dos boletins técnicos para o usuário final e comunicação voltada à percepção de risco.
- Ambos os meteorologistas defenderam a instalação de um radar meteorológico na Região Metropolitana de Goiânia para previsão imediata (nowcasting), enquanto Angel Chovert ressaltou a ausência de monitoramento da qualidade do ar e a escassez de profissionais (sete meteorologistas identificados em Goiás e nenhum na Prefeitura de Goiânia).
- Marcelo Luz dos Santos detalhou o funcionamento do sistema municipal de Defesa Civil (integrado à Guarda Civil Metropolitana e ao gabinete de crises climáticas criado no início de janeiro), com três níveis de alerta acionados por gatilhos como 10 mm em 10 minutos nos pluviômetros e posicionamento preventivo de equipes da Comurg, Bombeiros, trânsito e AMMA, permitindo liberar a Marginal Botafogo em cerca de uma hora após a chuva de 70 mm do sábado, 21 de novembro.

## Debate
Durante a roda de conversa conduzida por Gislaine Cristina Luiz, os participantes debateram a separação de papéis entre avisos meteorológicos (do INMET, baseados em probabilidades) e alertas operacionais à população (pela Defesa Civil), os efeitos da desinformação digital, a baixa percepção de risco de condutores em vias alagáveis, a necessidade de continuidade das políticas climáticas entre gestões e a democratização dos dados meteorológicos e ambientais. Não houve perguntas da plateia por falta de tempo.

## Encaminhamentos
- Incorporar ao menos um meteorologista na Prefeitura de Goiânia e avançar na implantação de radar meteorológico, ampliação da rede de estações de superfície e monitoramento da qualidade do ar.
- Fortalecer a integração de dados entre INMET, CEMADEN, ANA, Serviço Geológico, Estado e municípios, mantendo fluxo unificado de emissão de alertas via Defesa Civil.` }, /* Monitoramento, previsão meteorológica e adaptação */
  "d1-gestao-municipal":       { descricao: "", resumo: `A sessão apresentou o balanço das ações emergenciais e estruturais da Prefeitura de Goiânia frente a chuvas intensas e alagamentos, culminando na entrega do relatório preliminar do simpósio. Em diálogo mediado por Pedro Novaes, o prefeito Sandro Mabel expôs medidas de limpeza da rede de drenagem, operação automatizada do gabinete de crise, obras de retenção e infiltração, além da aquisição de radar meteorológico. Ao final, recebeu o relatório preliminar das instituições realizadoras com apontamentos para o planejamento climático de médio e longo prazo.

## Principais pontos
- Sandro Mabel relatou a limpeza de cerca de oito mil bueiros com uso de robôs de inspeção e caminhões sugadores, aplicação de multas contra descarte de concreto em bocas de lobo, correções hidráulicas pontuais (como no HUGO e na Avenida Independência) e atuação do gabinete de crise com pluviômetros, equipes pré-posicionadas, cancelas automáticas e integração com o Waze.
- O prefeito previu um investimento inicial de R$ 1 bilhão — com até R$ 500 milhões do Fundo Clima — para três piscinões (quase 400 milhões de litros, entre eles o da Segunda Radial/Jardim Botânico e o do Areião), caixas de retenção na Avenida 87 e no Estádio Serra Dourada (3 a 4 milhões de litros nesta última), jardins de chuva, o parque-esponja do Parque Maracanã e bolsões de retenção perto do Buriti e da Assembleia.
- A administração anunciou a compra de um radar meteorológico de 150 km, expansão de pluviômetros, testes de poços de infiltração em calçadas antigas, uso de tomógrafo para laudos de supressão e poda de árvores (permitindo contralaudo com termo de responsabilidade) e preparação de escolas com alimentos e colchões para o Super El Niño, após chuvas de 102 mm em três horas no centro e 68 mm na periferia, segundo o prefeito, no sábado anterior.
- Para o Parque Macambira-Anicuns, Sandro Mabel informou o uso de recursos do CAF e próprios para ocupar os 24 km previstos (apenas cinco quilômetros implantados até então) e conter invasões, impermeabilização, descarte de lixo e assoreamento em córregos como Cascavel e Barreiro.
- Pedro Novaes apontou a rápida defasagem da curva IDF de 2018 usada no plano de drenagem — cuja atualização com cenários de clima futuro é estimada em cerca de R$ 1 milhão — e alertou para a falta de estações de monitoramento da qualidade do ar na capital (hoje baseada em modelos do CEMPA-Cerrado), levando o prefeito a solicitar à presidente da AMMA que inclua a pauta na agenda.

## Debate
Na conversa entre Pedro Novaes e Sandro Mabel, discutiu-se a baixa visibilidade política de obras subterrâneas de drenagem, a necessidade de mudar o paradigma de escoamento rápido para retenção e infiltração da água e os desafios de integrar secretarias municipais e centros científicos. Durante a entrega do relatório preliminar pelas entidades realizadoras (UFG, AMMA, IDESA, Instituto Iandé Verde e CEMPA-Cerrado), o prefeito afirmou que avaliará o texto para enviar contribuições à versão final; não houve perguntas da plateia.

## Encaminhamentos
- Analisar o relatório preliminar do Goiânia Resiliente entregue ao prefeito e incorporar as observações da prefeitura na versão final do documento.
- Colocar na pauta da AMMA a implantação do monitoramento da qualidade do ar em Goiânia.
- Testar poços de infiltração em calçadas de regiões urbanas consolidadas, em possível parceria com a UFG, e ajustar o projeto de ocupação e drenagem ao longo dos 24 km do Parque Macambira-Anicuns.` }, /* Goiânia: clima, vulnerabilidade e gestão municipal */

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
