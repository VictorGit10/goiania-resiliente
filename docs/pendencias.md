# Pendências

Atualizado em 09/11/2026. O site funciona com tudo o que está abaixo em aberto: o que falta aparece como "Foto em breve", "Disponível após o evento" ou simplesmente não aparece.

## Antes de publicar

| O que | Onde mexer | Depende de |
|---|---|---|
| **Respostas do Pedro de 08/11/2026** — publicadas na `main` em 08/11/2026 (commits `c5f6cf0` e `91107f9`): Sara Moraes, Carolina Stange Moulin, Sabrina Garcez, Dr. Pedro Baima, Antônio, Conselho Consultivo/Equipe 2026, relatório final de 2024 e foto do Pedro Novaes. | `index.html`, `dados/convidados.js`, `dados/acervo.js`, `js/main.js`, `css/style.css`, `materiais/2024/` e `assets/img/convidados/` | — |
| **Troca de "minibio" por "biografia"** — publicada na `main` em 07/11/2026 (commit `e50733b`). | `index.html`, `js/main.js` | — |
| **Atualização das fotos de 2024** (branch `fotos-2024`): publicada na `main` em 07/11/2026 (commit `eb3833a`). | `index.html`, `dados/acervo.js`, `assets/img/edicao-2024/` | — |
| **Divergências do zip alinhadas ao site no ar** (rodapé, SEGOV, Abertura/Zilma, Pedro Baima, título da Governança, Sandro/Silvio): publicadas na `main` em 07/11/2026 (commit `98fbcd9`). | `index.html`, `docs/resumos-das-sessoes.md`, `dados/sessoes.js` | — |
| Aprovação do visual das seções novas (Participantes em verde, 1ª edição em rosa, detalhe das sessões) | — | Pedro e Marck (NB–Studio) |

## Fotos dos perfis

Salvar em `assets/img/convidados/` com estes nomes (JPG, de preferência quadrado ou 4:3, até ~300 KB):

- `carlos-gurjao.jpg` (ele mandou 3 opções no formulário)
- `pedro-baima.jpg`
- `carolina-stange-moulin.jpg`
- `patricia-freitas.jpg`
- `paulo-davila-ferreira.jpg`
- `manuel-ferreira.jpg`
- `zilma-peixoto.jpg` (não está no formulário; pedir foto oficial)
- `gabriel-tenaglia.jpg` (não está no formulário; pedir foto oficial)
- ✓ `pedro-novaes.jpg` (foto enviada em 08/11/2026; 800×600)
- ✓ `thomaz-ramalho.jpg` (do documento "Equipe 2024"; parece antiga, vale pedir uma atual)
- `daniela-melo-e-silva.jpg` (se ela enviar)
- `guilherme-franco-netto.jpg` (se ele enviar)
- `sabrina-garcez.jpg` (se ela enviar)

As fotos enviadas pelo formulário estão numa pasta do Drive do Pedro que ainda não foi compartilhada (a planilha foi). Angel Chovert, José Alexandre Felizola, Fabiana Nunes e Marcel Sant'Ana também enviaram foto e bio, mas ainda não têm perfil no site.

## Conteúdo

| O que | Onde mexer | Depende de |
|---|---|---|
| Perfis dos demais participantes de 2026 | `dados/convidados.js` | Respostas ao formulário |
| Descrição de cada mesa (opcional) | `dados/sessoes.js`, campo `descricao` | Pedro |
| Sites oficiais da Fiocruz Cerrados e da ESA–OAB/GO (hoje só o CIAMB tem link) | `index.html`, seção Quem somos | Confirmar endereços |
| **Fotos da 1ª edição**: 4 das 5 fotos da seção foram trocadas por versões em alta resolução do Drive (1000 px); o álbum completo está linkado. A foto do painel final foi mantida a do relatório (525 px) por decisão do Victor. Publicadas na `main` em 07/11/2026 (commit `eb3833a`). | `assets/img/edicao-2024/`, `index.html` e `dados/acervo.js` | — |
| **Relatório final de 2024**: publicado na branch `respostas-pedro-08-11` em `materiais/2024/relatorio-final-2024.pdf` (versão final, março de 2025, 59 páginas). Os vídeos de 2024 saíram do acervo a pedido do Pedro. | `dados/acervo.js`, `index.html`, `materiais/2024/` | — |
| **Foto do painel final**: mantida a do PDF (525 px) por decisão do Victor em 07/11/2026; alternativas em alta eram `_MG_9473` (Thomaz apresentando) e `_MG_9481` (mesa do painel). | `assets/img/edicao-2024/painel-goiania-resiliente.jpg` | — |
| **Mediação da mesa de monitoramento** (Dia 1, 16h15): está como "SECTI-GO", sem nome de pessoa. O Pedro pediu para manter por enquanto. | `index.html` (programação) | Pedro (futuro) |
| **Logo do CEMPA**: corrigida em 08/11/2026 — a versão horizontal oficial entrou no rodapé, no lugar da vertical antiga. Os arquivos para o Pedro estão em `materiais/logo-cempa.zip`. | `index.html`, `assets/img/logos/cempa-horizontal.png` | — |
| **Fotos do Conselho Consultivo**: Daniela Melo e Silva, Guilherme Franco Netto e Sabrina Garcez estão com "Foto em breve". | `assets/img/convidados/` | Fotos dos três |
| Pontos completos para a conversa com o Pedro | `materiais/2026-11-07-pontos-para-pedro.md` (fora do repositório) | Pedro |

## Depois do evento (25 e 26/11)

| O que | Onde mexer |
|---|---|
| Slides de cada sessão | `materiais/2026/` + `dados/acervo.js` (`tipo: "apresentacoes"`, `sessao: "…"`) |
| Vídeos | YouTube + `dados/acervo.js` (`tipo: "videos"`) |
| Transcrições | `materiais/2026/` ou Google Doc + `dados/acervo.js` (`tipo: "transcricoes"`) |
| Resumos | `dados/sessoes.js` (ver `docs/resumos-das-sessoes.md`) |
| Fotos do simpósio | álbum público + `dados/acervo.js` (`tipo: "fotos"`) |
| Relatório preliminar | `dados/acervo.js` (`tipo: "relatorios"`) |

## Para avaliar

- **Versão em inglês** (pedida como "avaliar" no documento de estrutura). Com o conteúdo já separado em `dados/`, uma versão em inglês das seções fixas e dos perfis é viável; os resumos teriam de ser traduzidos um a um.
- **Hospedagem e DNS**: concluído em 09/11/2026 — `goianiaresiliente.com` aponta para o GitHub Pages (quatro A `@` e CNAME `www`), com HTTPS e `www` redirecionando para o domínio principal. A hospedagem antiga do Marck fica como backup. Para desfazer, voltar o A `@` para `62.72.62.176` e o CNAME `www` para `goianiaresiliente.com`.
