# Goiânia Resiliente — site do simpósio

Site da 2ª edição do simpósio **Goiânia Resiliente: da atmosfera à vulnerabilidade social** (25 e 26 de novembro de 2026, Auditório da ESA–OAB/GO, Goiânia), com a memória da 1ª edição (2024).

Visual e estrutura originais: **NB–Studio**. É um site estático: HTML, CSS e JavaScript puros, **sem build e sem dependências**. Funciona abrindo o `index.html` direto no navegador.

## O que a página tem

| Seção | O que mostra | De onde vem o conteúdo |
|---|---|---|
| Inscrição, 01–03 | Inscrição, contexto, adaptação e mitigação, Goiânia | `index.html` |
| 04 · Programação | Abas dos dois dias. Ao abrir uma sessão: participantes (com perfis), descrição, um teaser do resumo, materiais e o botão “Abrir a sessão” (o resumo completo, os slides e a transcrição ficam na página da sessão) | `index.html` + `dados/` |
| 05 · Participantes | Perfis com foto e minibio e um índice recolhível de todos os participantes, com links para as atividades | `dados/convidados.js` |
| 06 · Quem somos | Realizadores (com "ler mais"), parcerias estratégicas e equipe 2026 | `index.html` |
| 07 · Edição 2024 | Números, fotos, programação e equipe da 1ª edição | `index.html` |
| 08 · Acervo | Materiais filtráveis por edição, sessão e tipo; a grade é agrupada por sessão | `dados/acervo.js` + resumos de `dados/sessoes.js` |
| Rodapé | Logos com link para os textos de cada instituição | `index.html` |

## Estrutura de arquivos

```
index.html              página única (textos fixos, programação, seções)
sessao.html             página "tudo sobre a sessão" (?sessao=<código>)
css/style.css           estilos (cores e bordas em variáveis: --preto, --amarelo…)
css/sessao.css          estilos da página da sessão
js/main.js              junta a programação com os dados abaixo
js/sessao.js            monta a página da sessão e carrega a transcrição sob demanda
dados/
  convidados.js         perfis dos participantes (nome, cargo, minibio)
  sessoes.js            descrição e resumo de cada sessão, pelo código da sessão
  acervo.js             vídeos, slides, transcrições, fotos, relatórios
  transcricoes/         uma transcrição por sessão, carregada só na página da sessão
assets/
  img/convidados/       fotos dos perfis: <id>.jpg (ex.: carlos-gurjao.jpg)
  img/edicao-2024/      fotos da 1ª edição
  img/logos/, logo/, fonts/   identidade visual (não alterar)
materiais/2026/, 2024/  PDFs publicados no próprio site
docs/
  resumos-das-sessoes.md   roteiro original (NotebookLM); o fluxo real de 2026 está no handoff
  pendencias.md            o que falta e de quem depende
  capturas/                capturas de tela (computador e celular)
```

As listas em `dados/` são arquivos `.js` (e não `.json`) de propósito: assim o site funciona mesmo aberto direto do computador, sem servidor.

## Como atualizar (sem programar)

Abra o arquivo, copie um bloco de exemplo, troque os textos e salve. Cada bloco termina com uma vírgula: `{ ... },`. As instruções completas estão no topo de cada arquivo.

### Perfil novo — `dados/convidados.js`

1. Copie um bloco `{ ... },` e cole antes do `];` final.
2. Preencha `id` (ex.: `"joao-silva"`), `nome`, `cargo`, `resumo` e, se houver, `minibio`.
3. Em `naProgramacao`, escreva o nome **exatamente como está na programação** (sem a instituição entre parênteses). Isso liga o nome ao perfil, cria o cartão na sessão e o link na lista de participantes.
4. Salve a foto como `assets/img/convidados/<id>.jpg`. Sem foto, aparecem as iniciais.

### Slides, vídeo ou transcrição — `dados/acervo.js`

```
{ tipo: "videos", edicao: 2026, sessao: "d1-cidades-cerrado",
  titulo: "Vídeo completo da sessão",
  link: "https://www.youtube.com/watch?v=XXXXXXXXXXX" },
```

- `tipo`: `videos`, `apresentacoes`, `transcricoes`, `fotos`, `relatorios` ou `artigos`.
- `sessao`: o código da sessão (lista em `dados/sessoes.js`). O material aparece dentro da sessão na programação **e** no acervo.
- `link`: YouTube (o cartão mostra a miniatura), link público do Drive, ou um PDF em `materiais/2026/` (`"materiais/2026/nome.pdf"`).
- O aviso "Disponível após o evento" de um tipo some quando entra o primeiro material daquele tipo.

### Resumo de uma sessão — `dados/sessoes.js`

Cole o texto revisado e aprovado no campo `resumo` da sessão, entre crases. O passo a passo completo, com os prompts do NotebookLM, está em [`docs/resumos-das-sessoes.md`](docs/resumos-das-sessoes.md). O fluxo real do Dia 1/2026 (WhisperX + Gemini) está no handoff `gravacoes/2026-11-25/DOCUMENTACAO-DIA1.md`.

### Página da sessão e transcrições — `sessao.html` + `dados/transcricoes/`

- `sessao.html?sessao=<código>` carrega `dados/transcricoes/<código>.js` só quando aberta e monta hero, subnav, resumo, participantes, slides e transcrição.
- O arquivo da transcrição define:
  ```js
  window.GR_TRANSCRICAO = {
    codigo: "d1-...", titulo: "...", dia: "Dia 1 · 25 nov 2026", hora: "9h–9h30",
    locutores: [{ nome: "Pedro Novaes", falas: 120 }],
    segmentos: [{ t: "00:00:11", s: "Pedro Novaes", x: "texto" }]
  };
  ```
- Para publicar uma sessão nova: gerar o `.js`, colocar em `dados/transcricoes/`, acrescentar o material em `acervo.js` (`tipo: "transcricoes"`, `sessao`, `link: "sessao.html?sessao=<código>#transcricao"`) e liberar o código em `sessao.js` (hoje o filtro aceita só `d1-`).
- A íntegra do dia fica em `materiais/2026/dia1-transcricao-completa.md`.

### Link direto para uma sessão ou perfil

- Sessão: `goianiaresiliente.com/#sessao-d1-matchmaking` (abre a aba e a sessão).
- Página da sessão: `goianiaresiliente.com/sessao.html?sessao=d1-matchmaking` (resumo, slides e transcrição).
- Perfil: `goianiaresiliente.com/#convidado-carlos-gurjao`.

**Não mude os códigos** das sessões nem os `id` dos perfis depois de publicados: eles são os endereços.

## Visualizar

- Clique duplo em `index.html`, ou
- `python3 -m http.server 8000` nesta pasta e abra `http://localhost:8000`.

## Publicação

O site está no GitHub Pages e é servido em https://goianiaresiliente.com desde 09/11/2026. A hospedagem antiga do Marck fica como backup; qualquer mudança futura de hospedagem ou DNS é combinada com o Victor.
