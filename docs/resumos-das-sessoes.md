# Resumos das sessões — passo a passo

Este é o fluxo para publicar, logo depois de cada dia do simpósio, o resumo de cada sessão no site. É o mesmo método usado no workshop Time2Graze (gravação → NotebookLM → revisão pelo Claude), adaptado para um evento público.

**Onde o resumo aparece:** dentro da sessão, na programação (botão "Ler o resumo da sessão"), com o selo "Resumo" na linha da sessão e um cartão "Resumo" no acervo. Tudo isso aparece sozinho quando o texto é colado em `dados/sessoes.js`.

## 1. Antes do evento

- **Autorização.** Confirmar com os palestrantes que as sessões serão gravadas e que vídeo, slides e resumo serão publicados. Avisar a plateia na abertura.
- **Slides.** Pedir os arquivos (de preferência em PDF) até o dia anterior. Nome sugerido: `<código-da-sessão>-slides-<nome>.pdf`, ex.: `d1-matchmaking-slides-patricia-freitas.pdf`.
- **Descrição das mesas (opcional).** Duas ou três frases por sessão podem entrar já agora, no campo `descricao` de `dados/sessoes.js`.

## 2. Durante o evento

- **Uma gravação de áudio por sessão.** Nome do arquivo com o código da sessão, ex.: `d1-cidades-cerrado.m4a`. Os códigos estão em `dados/sessoes.js` e no prompt abaixo.
- **Anotações da equipe** (um documento por dia): nomes de quem fez perguntas, siglas, números citados, encaminhamentos.
- Os vídeos completos, se houver filmagem, vão para o YouTube; o link entra em `dados/acervo.js`.

## 3. No fim de cada dia: NotebookLM

1. Crie um caderno no NotebookLM por dia (ex.: "GR 2026 · Dia 1").
2. Envie como fontes: as gravações do dia, os slides recebidos e as anotações.
3. Cole o prompt do dia (abaixo) e gere o rascunho.
4. Copie o resultado inteiro para um documento de texto.

## 4. Revisão pelo Claude

Abra uma sessão do Claude Code neste repositório e peça, por exemplo:

> Revise o rascunho dos resumos do Dia 1 (colado abaixo) seguindo `docs/resumos-das-sessoes.md`, confira nomes e siglas com a programação e com `dados/convidados.js`, e coloque cada resumo no campo `resumo` da sessão em `dados/sessoes.js`, numa branch com PR.

O que o Claude deve conferir em cada resumo:

- **Nomes de pessoas** exatamente como na programação (`index.html`) ou nos perfis (`dados/convidados.js`). Ninguém de fora da lista é citado pelo nome.
- **Falas do debate** não atribuídas a pessoas da plateia.
- **Instituições e siglas** com a grafia da tabela abaixo.
- **Números, leis, programas e lugares** iguais aos das fontes. Na dúvida, o trecho sai do texto.
- **Marcas `[VERIFICAR: …]`** deixadas pelo NotebookLM: resolver com as anotações ou com quem esteve na sala, e apagar a marca. **Nenhuma marca pode ser publicada.**
- **Tom**: registro de conteúdo, sem elogios, em português claro.
- **Formato** compatível com o site: parágrafos separados por linha em branco, `## ` para subtítulos, `- ` para listas.

## 5. Aprovação e publicação

1. O Claude abre um PR com os resumos em `dados/sessoes.js`.
2. **O Pedro lê e aprova** (o PR mostra o texto; as capturas de tela mostram como fica).
3. Com o merge, o site publica. Correções depois são uma edição no mesmo campo.

## 6. Transcrições

O resumo não substitui a transcrição. Para publicar a transcrição completa de uma sessão:

- gere o texto completo (pelo NotebookLM, se ele permitir copiar a transcrição da fonte de áudio, ou por outra ferramenta de transcrição);
- revise nomes e siglas com a mesma tabela;
- salve em PDF em `materiais/2026/<código>-transcricao.pdf` (ou num Google Doc público) e acrescente o link em `dados/acervo.js` com `tipo: "transcricoes"` e `sessao: "<código>"`.

## Prompts do NotebookLM

Os prompts foram gerados a partir da programação do site. Se a programação mudar (nome, horário, sessão nova), peça ao Claude para atualizar esta seção.

### Prompt do Dia 1

```text
Você vai escrever os resumos públicos das sessões do Dia 1 · quarta-feira, 25 de novembro de 2026, do simpósio Goiânia Resiliente (2ª edição, "Da atmosfera à vulnerabilidade social", Auditório da ESA–OAB/GO, Goiânia), a partir das fontes deste caderno: as gravações das sessões, os slides e as anotações da equipe.

O texto vai para o site público do evento. É um registro do CONTEÚDO: o que foi apresentado, debatido e proposto. Não é uma crônica do evento.

SESSÕES DO DIA, na ordem em que aconteceram. O código entre colchetes identifica a sessão; mantenha-o no título.

- 9h–9h30 · Abertura institucional [d1-abertura]
    Com: Zilma Peixoto (AMMA) · Karla Faria (CIAMB/UFG) · Paulo D’Ávila (IDESA) · Guilherme Franco Netto (Fiocruz Cerrados) · Manuel Ferreira (CEMPA-Cerrado/UFG) · Rodrigo Lustosa (OAB-GO) · Pedro Novaes (Iandé Verde e UFG)
- 9h30–10h40 · As Cidades do Cerrado: ciência para entender o que muda debaixo dos nossos pés e sobre nossas cabeças [d1-cidades-cerrado]
    Conferencista: Carlos Gurjão (CEMPA/UFG)
    Debatedores: Celene Cunha (IESA/UFG) · João Batista de Deus (IESA/UFG)
    Mediação: Pedro Novaes (UFG e Iandé Verde)
- 11h–12h15 · Goiânia: onde estamos? Projetos estruturantes para adaptação [d1-goiania-onde-estamos]
    Participantes: Gabriel Tenaglia (AMMA) · Pedro Baima (AMMA)
    Mediação: José Moraes Neto (OAB-GO)
- 14h–15h · Quem decide e quem paga a conta do clima? Um debate sobre governança e articulação federativa [d1-governanca]
    Participantes: Carolina Azevedo Moulin (SEMAD-GO) · Dep. Antônio Gomide (Alego) · Danielle Oliveira (SECAP/Goiânia) · Pollyana Borges (SVMA/Aparecida de Goiânia)
    Mediação: Thomaz Ramalho (IPPUC/Curitiba)
- 15h–16h · Matchmaking: bons projetos para financiamentos reais [d1-matchmaking]
    Palestrante: Patrícia Freitas (Consultora)
    Debatedor: Marcell Sant’Anna (BID)
    Mediação: Manuel Ferreira (CEMPA/UFG)
- 16h15–17h15 · Monitoramento, previsão meteorológica e adaptação: conhecer e monitorar para sobreviver [d1-monitoramento]
    Palestrante: Angel Chovert (CEMPA/UFG)
    Debatedores: Elisabete Ferreira (INMET) · Robledo Farias (Defesa Civil/Goiânia)
    Mediação: SECTI-GO
- 17h15–18h · Goiânia: clima, vulnerabilidade e gestão municipal [d1-gestao-municipal]
    Palestrante: Sandro Mabel (Prefeito de Goiânia)
    Mediação: Pedro Novaes

PARA CADA SESSÃO, escreva exatamente neste formato:

=== [código da sessão] Título da sessão ===
Um parágrafo de até 120 palavras com a ideia central da sessão.

## Principais pontos
- Um ponto por linha, de 3 a 6 linhas.

## Debate
Um parágrafo curto com as questões levantadas no debate e as respostas dadas.

## Encaminhamentos
- Só o que foi efetivamente proposto ou combinado na sessão. Omita este bloco se não houver.

REGRAS
- Português do Brasil, frases diretas, sem adjetivos de elogio ("brilhante", "excelente") e sem abertura ou conclusão genéricas.
- Nomes de pessoas: use SOMENTE os nomes da lista de sessões acima, escritos exatamente como estão. O palestrante ou conferencista pode ser citado como autor da própria apresentação ("Carlos Gurjão mostrou…").
- Não atribua falas do debate a pessoas da plateia nem a quem não está na lista. Escreva "foi perguntado…", "um participante observou…".
- Se não tiver certeza de quem disse algo, não atribua: descreva o conteúdo.
- Mantenha números, datas, siglas, nomes de programas, leis e lugares exatamente como aparecem nas fontes. Quando o áudio estiver duvidoso ou as fontes divergirem, escreva [VERIFICAR: motivo] no ponto exato, em vez de escolher.
- Use apenas o que as fontes sustentam. Não complete com conhecimento geral sobre o tema.
- Se uma sessão não tiver gravação nem anotações neste caderno, escreva apenas "Sem fonte para esta sessão." e passe para a próxima.
- Não use outra formatação além de "## " para subtítulos, "- " para listas e **negrito** em no máximo dois termos por sessão.
```

### Prompt do Dia 2

```text
Você vai escrever os resumos públicos das sessões do Dia 2 · quinta-feira, 26 de novembro de 2026, do simpósio Goiânia Resiliente (2ª edição, "Da atmosfera à vulnerabilidade social", Auditório da ESA–OAB/GO, Goiânia), a partir das fontes deste caderno: as gravações das sessões, os slides e as anotações da equipe.

O texto vai para o site público do evento. É um registro do CONTEÚDO: o que foi apresentado, debatido e proposto. Não é uma crônica do evento.

SESSÕES DO DIA, na ordem em que aconteceram. O código entre colchetes identifica a sessão; mantenha-o no título.

- 9h–10h15 · Eixo Adaptação — Poluição, calor e território: mudanças climáticas, saúde e emergências [d2-saude-emergencias]
    Palestrante: José Alexandre Felizola (CETI Saúde/UFG)
    Debatedora: Cristina Musmanno (SES-GO)
    Mediação: Natalia Almeida Brito (SEMAD-GO)
- 10h30–12h · Eixo Mitigação — Energia e Resíduos [d2-transicao-energetica]
    Conferencista: Adriano da Rocha Lima (ex-secretário de Governo do Estado de Goiás)
    Debatedores: Gabriel Tenaglia (AMMA) · Fabiana Nunes (SECTI-GO)
    Mediação: Pedro Baima (AMMA)
- 14h–15h30 · 2 países, 3 climas, 3 cidades: Juárez (México), Paragominas (PA) e Curitiba (PR) [d2-juarez-paragominas]
    Palestrante: Felipe Adrián Vázquez (Universidade de Juárez, México)
    Debatedores: Dominique Castanheira (Prefeitura de Paragominas) · Maxiely Scaramussa (Sindicato Rural de Paragominas) · Thomaz Ramalho (IPPUC/Curitiba)
    Mediação: Márcia Lobo (SECTI-GO)
- 16h–17h · Como se governa uma cidade em que o clima já mudou? [d2-governar-cidade]
    Palestrante: Silvio Barros (Prefeito de Maringá)
    Mediação: Sabrina Garcêz (Segov/Goiânia)
- 17h–17h30 · Recados finais e encerramento [d2-encerramento]
    Com: Zilma Peixoto (AMMA) · Pedro Novaes (UFG e Iandé Verde)

PARA CADA SESSÃO, escreva exatamente neste formato:

=== [código da sessão] Título da sessão ===
Um parágrafo de até 120 palavras com a ideia central da sessão.

## Principais pontos
- Um ponto por linha, de 3 a 6 linhas.

## Debate
Um parágrafo curto com as questões levantadas no debate e as respostas dadas.

## Encaminhamentos
- Só o que foi efetivamente proposto ou combinado na sessão. Omita este bloco se não houver.

REGRAS
- Português do Brasil, frases diretas, sem adjetivos de elogio ("brilhante", "excelente") e sem abertura ou conclusão genéricas.
- Nomes de pessoas: use SOMENTE os nomes da lista de sessões acima, escritos exatamente como estão. O palestrante ou conferencista pode ser citado como autor da própria apresentação ("Carlos Gurjão mostrou…").
- Não atribua falas do debate a pessoas da plateia nem a quem não está na lista. Escreva "foi perguntado…", "um participante observou…".
- Se não tiver certeza de quem disse algo, não atribua: descreva o conteúdo.
- Mantenha números, datas, siglas, nomes de programas, leis e lugares exatamente como aparecem nas fontes. Quando o áudio estiver duvidoso ou as fontes divergirem, escreva [VERIFICAR: motivo] no ponto exato, em vez de escolher.
- Use apenas o que as fontes sustentam. Não complete com conhecimento geral sobre o tema.
- Se uma sessão não tiver gravação nem anotações neste caderno, escreva apenas "Sem fonte para esta sessão." e passe para a próxima.
- Não use outra formatação além de "## " para subtítulos, "- " para listas e **negrito** em no máximo dois termos por sessão.
```

## Grafia de referência

| Escreva | Significa |
|---|---|
| AMMA | Agência Municipal do Meio Ambiente de Goiânia |
| SEMAD-GO / SEMAD/GO | Secretaria de Estado de Meio Ambiente e Desenvolvimento Sustentável de Goiás |
| CEMPA-Cerrado | Centro de Excelência em Estudos, Monitoramento e Previsões Ambientais do Cerrado (UFG) |
| IESA/UFG | Instituto de Estudos Socioambientais da UFG |
| CIAMB/UFG | Programa de Pós-Graduação em Ciências Ambientais da UFG |
| IDESA | Instituto de Desenvolvimento Econômico e Socioambiental |
| Iandé Verde | Instituto Iandé Verde |
| ESA–OAB/GO | Escola Superior de Advocacia da OAB Goiás |
| Fiocruz Cerrados | Iniciativa Fiocruz Cerrados |
| IPPUC | Instituto de Pesquisa e Planejamento Urbano de Curitiba |
| SECTI-GO | Secretaria de Estado de Ciência, Tecnologia e Inovação de Goiás |
| SES-GO | Secretaria de Estado da Saúde de Goiás |
| INMET | Instituto Nacional de Meteorologia |
| Alego | Assembleia Legislativa do Estado de Goiás |
| BID | Banco Interamericano de Desenvolvimento |
| COFIEX | Comissão de Financiamentos Externos |
| GCoM | Pacto Global de Prefeitas e Prefeitos pelo Clima e Energia |

**Nomes com divergência ainda não resolvida** (confira antes de publicar): Carolina **Stange** Moulin (formulário) × Carolina **Azevedo** Moulin (programação); "Dr. Pedro Baima" × "Pedro Baima"; Sabrina Garcez (2024) × Garcêz (2026).
