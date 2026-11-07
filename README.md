# Goiânia Resiliente — site do simpósio

Site da 2ª edição do simpósio **Goiânia Resiliente: da atmosfera à vulnerabilidade social** (25 e 26 de novembro de 2026, Auditório da ESA–OAB/GO, Goiânia), com a memória da 1ª edição (2024).

Visual e estrutura originais: **NB–Studio**. É um site estático: HTML, CSS e JavaScript puros, **sem build e sem dependências**. Funciona abrindo o `index.html` direto no navegador.

## O que a página tem

| Seção | O que mostra | De onde vem o conteúdo |
|---|---|---|
| Inscrição, 01–03 | Inscrição, contexto, adaptação e mitigação, Goiânia | `index.html` |
| 04 · Programação | Abas dos dois dias. Ao abrir uma sessão: participantes (com perfis), descrição, materiais, resumo e link direto | `index.html` + `dados/` |
| 05 · Participantes | Perfis com foto e minibio e a lista de todos os participantes, com links para as atividades | `dados/convidados.js` |
| 06 · Quem somos | Realizadores (com "ler mais"), parcerias estratégicas e equipe 2026 | `index.html` |
| 07 · Edição 2024 | Números, fotos, programação e equipe da 1ª edição | `index.html` |
| 08 · Acervo | Materiais filtráveis por tipo, edição e atividade | `dados/acervo.js` + resumos de `dados/sessoes.js` |
| Rodapé | Logos com link para os textos de cada instituição | `index.html` |

## Estrutura de arquivos

```
index.html              página única (textos fixos, programação, seções)
css/style.css           estilos (cores e bordas em variáveis: --preto, --amarelo…)
js/main.js              junta a programação com os dados abaixo
dados/
  convidados.js         perfis dos participantes (nome, cargo, minibio)
  sessoes.js            descrição e resumo de cada sessão, pelo código da sessão
  acervo.js             vídeos, slides, transcrições, fotos, relatórios
assets/
  img/convidados/       fotos dos perfis: <id>.jpg (ex.: carlos-gurjao.jpg)
  img/edicao-2024/      fotos da 1ª edição
  img/logos/, logo/, fonts/   identidade visual (não alterar)
materiais/2026/, 2024/  PDFs publicados no próprio site
docs/
  resumos-das-sessoes.md   gravação → NotebookLM → revisão → publicação, com os prompts
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

Cole o texto revisado e aprovado no campo `resumo` da sessão, entre crases. O passo a passo completo, com os prompts do NotebookLM, está em [`docs/resumos-das-sessoes.md`](docs/resumos-das-sessoes.md).

### Link direto para uma sessão ou perfil

- Sessão: `goianiaresiliente.com/#sessao-d1-matchmaking` (abre a aba e a sessão). Dentro de cada sessão há o botão "Copiar link desta sessão".
- Perfil: `goianiaresiliente.com/#convidado-carlos-gurjao`.

**Não mude os códigos** das sessões nem os `id` dos perfis depois de publicados: eles são os endereços.

## Visualizar

- Clique duplo em `index.html`, ou
- `python3 -m http.server 8000` nesta pasta e abra `http://localhost:8000`.

## Publicação

Pronto para qualquer hospedagem estática (Hostinger, GitHub Pages etc.). A troca de hospedagem e de DNS é uma decisão à parte, combinada com o Pedro e o Marck.
