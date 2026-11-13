# Pendências

Atualizado em 13/11/2026. O site funciona com tudo o que está abaixo em aberto: o que falta aparece como "Foto em breve", "Disponível após o evento" ou simplesmente não aparece.

## Antes de publicar

| O que | Onde mexer | Depende de |
|---|---|---|
| **Respostas do Pedro de 08/11/2026** — publicadas na `main` em 08/11/2026 (commits `c5f6cf0` e `91107f9`): Sara Moraes, Carolina Stange Moulin, Sabrina Garcez, Dr. Pedro Baima, Antônio, Conselho Consultivo/Equipe 2026, relatório final de 2024 e foto do Pedro Novaes. | `index.html`, `dados/convidados.js`, `dados/acervo.js`, `js/main.js`, `css/style.css`, `materiais/2024/` e `assets/img/convidados/` | — |
| **Troca de "minibio" por "biografia"** — publicada na `main` em 07/11/2026 (commit `e50733b`). | `index.html`, `js/main.js` | — |
| **Atualização das fotos de 2024** (branch `fotos-2024`): publicada na `main` em 07/11/2026 (commit `eb3833a`). | `index.html`, `dados/acervo.js`, `assets/img/edicao-2024/` | — |
| **Divergências do zip alinhadas ao site no ar** (rodapé, SEGOV, Abertura/Zilma, Pedro Baima, título da Governança, Sandro/Silvio): publicadas na `main` em 07/11/2026 (commit `98fbcd9`). | `index.html`, `docs/resumos-das-sessoes.md`, `dados/sessoes.js` | — |
| **Programação do Dia 2 ajustada em 12/11/2026**: o prefeito de Maringá cancelou; o painel foi dividido em "2 países, 2 climas, 2 cidades" (14h–15h30) e "Gestão territorial na Amazônia" (16h–17h). A sessão "Como se governa..." saiu; o código `d2-juarez-paragominas` foi mantido e a nova mesa usa `d2-paragominas`. | `index.html`, `dados/sessoes.js`, `docs/resumos-das-sessoes.md` | — |
| Aprovação do visual das seções novas (Participantes em verde, 1ª edição em rosa, detalhe das sessões) | — | Pedro e Marck (NB–Studio) |
| **Captura do áudio das sessões** — confirmar o link da live e testar a captura. | `docs/gravacao-do-audio.md` | Victor/Pedro |

## Fotos dos perfis

Salvar em `assets/img/convidados/` com estes nomes (JPG, de preferência quadrado ou 4:3, até ~300 KB):

- ✓ `carlos-gurjao.jpg` (opção 1 do formulário; publicada em 09/11/2026)
- ✓ `pedro-baima.jpg` (publicada em 09/11/2026)
- ✓ `carolina-stange-moulin.jpg` (publicada em 09/11/2026)
- ✓ `patricia-freitas.jpg` (publicada em 09/11/2026)
- ✓ `paulo-davila-ferreira.jpg` (publicada em 09/11/2026)
- ✓ `manuel-ferreira.jpg` (publicada em 09/11/2026)
- ✓ `angel-chovert.jpg` (publicada em 09/11/2026)
- ✓ `jose-alexandre-felizola.jpg` (publicada em 09/11/2026)
- ✓ `fabiana-nunes.jpg` (publicada em 09/11/2026)
- ✓ `marcel-santana.jpg` (publicada em 09/11/2026)
- ✓ `zilma-peixoto.jpg` (publicada em 12/11/2026)
- ✓ `gabriel-tenaglia.jpg` (publicada em 12/11/2026)
- ✓ `pedro-novaes.jpg` (foto enviada em 08/11/2026; 800×600)
- ✓ `thomaz-ramalho.jpg` (do documento "Equipe 2024"; parece antiga, vale pedir uma atual)
- ✓ `karla-faria.jpg` (publicada em 11/11/2026)
- ✓ `cristina-musmanno.jpg` (publicada em 11/11/2026)
- ✓ `daniela-melo-e-silva.jpg` (publicada em 12/11/2026)
- ✓ `guilherme-franco-netto.jpg` (publicada em 12/11/2026)
- ✓ `sabrina-garcez.jpg` (publicada em 12/11/2026)
- ✓ `adriano-da-rocha-lima.jpg` (publicada em 12/11/2026)
- ✓ `celene-cunha.jpg` (publicada em 12/11/2026)
- ✓ `joao-batista-de-deus.jpg` (publicada em 12/11/2026)
- ✓ `antonio-gomide.jpg` (publicada em 12/11/2026)
- ✓ `danielle-oliveira.jpg` (publicada em 12/11/2026)
- ✓ `pollyana-borges.jpg` (publicada em 12/11/2026)
- ✓ `marcia-lobo.jpg` (publicada em 12/11/2026)
- ✓ `sandro-mabel.jpg` (publicada em 12/11/2026)
- ✓ `rodrigo-lustosa.jpg` (publicada em 12/11/2026)
- ✓ `natalia-brito.jpg` (publicada em 12/11/2026)
- ✓ `elizabete-ferreira.jpg` (publicada em 13/11/2026)
- ✓ `felipe-vazquez.jpg` (publicada em 13/11/2026)
- ✓ `dominique-castanheira.jpg` (publicada em 13/11/2026)
- ✓ `maxiely-scaramussa.jpg` (publicada em 13/11/2026)
- ✓ `sara-moraes.jpg` (publicada em 13/11/2026)
- ✓ `marcelo-luz.jpg` (publicada em 13/11/2026)
- `jose-moraes-neto.jpg` (foto pronta em `materiais/fotos-perfis/`; falta o currículo)

As fotos do formulário e da pasta do Pedro foram baixadas. Todos os perfis publicados têm foto. José Moraes Neto já tem foto, mas ainda não tem perfil.

## Conteúdo

| O que | Onde mexer | Depende de |
|---|---|---|
| **Perfis de Angel Chovert, José Alexandre Felizola, Fabiana Nunes e Marcel Sant'Ana**: publicados em 09/11/2026 com as bios do formulário. | `dados/convidados.js`, `index.html`, `assets/img/convidados/` | — |
| Descrição de cada mesa (opcional) | `dados/sessoes.js`, campo `descricao` | Pedro |
| **Perfis de Karla Maria Silva de Faria e Cristina Paragó Musmanno**: publicados em 11/11/2026 com as bios do formulário. | `dados/convidados.js`, `assets/img/convidados/` | — |
| **Perfis de Adriano da Rocha Lima, Celene Cunha, João Batista de Deus, Antônio Gomide, Danielle Oliveira, Pollyana Borges, Elizabete Alves Ferreira, Márcia Lobo, Sandro Mabel e Rodrigo Lustosa**: publicados em 12/11/2026 com as bios da planilha. | `dados/convidados.js`, `assets/img/convidados/` | — |
| **Perfil de José Moraes Neto**: foto pronta em `materiais/fotos-perfis/`, falta o currículo. | `dados/convidados.js`, `assets/img/convidados/` | Pedro |
| **Robledo Farias**: substituído por Marcelo Luz dos Santos no painel de monitoramento; não precisa mais de perfil. | `index.html`, `docs/resumos-das-sessoes.md` | — |
| **Perfil de Natalia Almeida Brito**: publicado em 12/11/2026 com a bio do formulário. | `dados/convidados.js`, `assets/img/convidados/` | — |
| **Perfis de Felipe Adrián Vázquez, Dominique Castanheira, Maxiely Scaramussa, Sara Moraes e Marcelo Luz dos Santos**: publicados em 13/11/2026 com as bios da planilha e as informações do Pedro. | `dados/convidados.js`, `assets/img/convidados/` | — |
| Sites oficiais da Fiocruz Cerrados e da ESA–OAB/GO (hoje só o CIAMB tem link) | `index.html`, seção Quem somos | Confirmar endereços |
| **Fotos da 1ª edição**: 4 das 5 fotos da seção foram trocadas por versões em alta resolução do Drive (1000 px); o álbum completo está linkado. A foto do painel final foi mantida a do relatório (525 px) por decisão do Victor. Publicadas na `main` em 07/11/2026 (commit `eb3833a`). | `assets/img/edicao-2024/`, `index.html` e `dados/acervo.js` | — |
| **Relatório final de 2024**: publicado na `main` em 08/11/2026, em `materiais/2024/relatorio-final-2024.pdf` (versão final, março de 2025, 59 páginas). Os vídeos de 2024 saíram do acervo a pedido do Pedro. | `dados/acervo.js`, `index.html`, `materiais/2024/` | — |
| **Foto do painel final**: mantida a do PDF (525 px) por decisão do Victor em 07/11/2026; alternativas em alta eram `_MG_9473` (Thomaz apresentando) e `_MG_9481` (mesa do painel). | `assets/img/edicao-2024/painel-goiania-resiliente.jpg` | — |
| **Mediação da mesa de monitoramento** (Dia 1, 16h15): está como "SECTI-GO", sem nome de pessoa. O Pedro pediu para manter por enquanto. | `index.html` (programação) | Pedro (futuro) |
| **Logo do CEMPA**: corrigida em 08/11/2026 — a versão horizontal oficial entrou no rodapé, no lugar da vertical antiga. Os arquivos para o Pedro estão em `materiais/logo-cempa.zip`. | `index.html`, `assets/img/logos/cempa-horizontal.png` | — |
| **Fotos do Conselho Consultivo**: Daniela Melo e Silva, Guilherme Franco Netto e Sabrina Garcez publicadas em 12/11/2026. | `assets/img/convidados/` | — |
| Pontos completos para a conversa com o Pedro | `materiais/2026-11-07-pontos-para-pedro.md` (fora do repositório) | Pedro |

## Depois do evento (25 e 26/11)

| O que | Onde mexer |
|---|---|
| Áudio das sessões (decisão desta edição: captura da live) | `docs/gravacao-do-audio.md` |
| Slides de cada sessão | `materiais/2026/` + `dados/acervo.js` (`tipo: "apresentacoes"`, `sessao: "…"`) |
| Vídeos | YouTube + `dados/acervo.js` (`tipo: "videos"`) |
| Transcrições | `materiais/2026/` ou Google Doc + `dados/acervo.js` (`tipo: "transcricoes"`) |
| Resumos | `dados/sessoes.js` (ver `docs/resumos-das-sessoes.md`) |
| Fotos do simpósio | álbum público + `dados/acervo.js` (`tipo: "fotos"`) |
| Relatório preliminar | `dados/acervo.js` (`tipo: "relatorios"`) |

## Para avaliar

- **Versão em inglês** (pedida como "avaliar" no documento de estrutura). Com o conteúdo já separado em `dados/`, uma versão em inglês das seções fixas e dos perfis é viável; os resumos teriam de ser traduzidos um a um.
- **Hospedagem e DNS**: concluído em 09/11/2026 — `goianiaresiliente.com` aponta para o GitHub Pages (quatro A `@` e CNAME `www`), com HTTPS e `www` redirecionando para o domínio principal. A hospedagem antiga do Marck fica como backup. Para desfazer, voltar o A `@` para `62.72.62.176` e o CNAME `www` para `goianiaresiliente.com`.
