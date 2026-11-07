# Pendências

Atualizado em 07/11/2026. O site funciona com tudo o que está abaixo em aberto: o que falta aparece como "Foto em breve", "Disponível após o evento" ou simplesmente não aparece.

## Antes de publicar

| O que | Onde mexer | Depende de |
|---|---|---|
| **Nome da Carolina**: o formulário diz "Carolina **Stange** Moulin"; a programação diz "Carolina **Azevedo** Moulin". O perfil já está ligado aos dois; a programação não foi alterada. | `index.html` (programação) | Confirmar com ela |
| **"Dr. Pedro Baima"**: nome pedido por ele no formulário; a programação e "Quem somos" dizem "Pedro Baima". | `index.html` | Pedro Novaes decide |
| Aprovação do visual das seções novas (Participantes em verde, 1ª edição em rosa, detalhe das sessões) | — | Pedro e Marck (NB–Studio) |

## Fotos dos perfis

Salvar em `assets/img/convidados/` com estes nomes (JPG, de preferência quadrado ou 4:3, até ~300 KB):

- `carlos-gurjao.jpg` (ele mandou 3 opções no formulário)
- `pedro-baima.jpg`
- `carolina-stange-moulin.jpg`
- `patricia-freitas.jpg`
- `paulo-davila-ferreira.jpg`
- `zilma-peixoto.jpg`
- `gabriel-tenaglia.jpg`
- `manuel-ferreira.jpg`
- `pedro-novaes.jpg`
- ✓ `thomaz-ramalho.jpg` (do documento "Equipe 2024"; parece antiga, vale pedir uma atual)

As fotos enviadas pelo formulário estão numa pasta do Drive do Pedro que ainda não foi compartilhada (a planilha foi).

## Conteúdo

| O que | Onde mexer | Depende de |
|---|---|---|
| Perfis dos demais participantes de 2026 | `dados/convidados.js` | Respostas ao formulário |
| Descrição de cada mesa (opcional) | `dados/sessoes.js`, campo `descricao` | Pedro |
| Sites oficiais da Fiocruz Cerrados e da ESA–OAB/GO (hoje só o CIAMB tem link) | `index.html`, seção Quem somos | Confirmar endereços |
| Fotos maiores da 1ª edição (as atuais vêm do PDF do relatório, 525 px) | `assets/img/edicao-2024/` (mesmos nomes) | Seleção na pasta "Fotos Dia 1" / "Fotos Dia 2" do Drive |
| "Fotos Dia 2" de 2024 não está visível no Drive compartilhado | — | Pedro compartilhar |
| Links de 2024: fotos, vídeos e relatório final | `dados/acervo.js` | Relatório com link público |
| Grafias: Thomaz/Tomaz (usado: Thomaz); Sabrina Garcez/Garcêz; Antonio/Antônio Zayek | — | Só confirmar |

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
- **Hospedagem e DNS** (hoje na Hostinger do Marck).
