# Instruções para o Claude neste repositório

Site do simpósio Goiânia Resiliente (goianiaresiliente.com). Responsável: Victor Amaral (LAPIG/UFG). Coordenação: Pedro Novaes. Design original: NB–Studio (Marck).

## Regras

- **Responda sempre em português.** O Victor não lê código: termine cada trabalho com um resumo em português claro do que mudou na página, do que ficou pendente e de quem depende.
- **HTML/CSS/JS puros, sem build e sem dependências novas.** O site precisa funcionar abrindo o `index.html` direto (por isso os dados são `.js`, não `.json` com `fetch`).
- **Identidade visual do NB–Studio:** use só as variáveis de `css/style.css` (`--preto`, `--amarelo`, `--branco`, `--cinza`, `--rosa`, `--azul`, `--verde`, `--vermelho`, `--borda`, `--borda-grossa`), a fonte Host Grotesk e o padrão `sec-head` (número + título). Texto preto sobre os fundos coloridos. Não altere logos.
- **Dados pessoais:** publique só nome, cargo/instituição, minibio e foto. Nunca e-mail, telefone, data/hora de resposta de formulário ou outras respostas internas.
- **Não mexa** em DNS, Hostinger, visibilidade do repositório ou GitHub Pages (nem crie `CNAME`). A troca do domínio já foi feita em 09/11/2026; mudanças futuras são feitas pelo Victor.
- Trabalhe numa branch e abra PR para `main`. **Não faça merge.**
- Não mude nomes na programação sem confirmação (há divergências listadas em `docs/pendencias.md`).

## Onde está cada coisa

- `index.html`: programação (cada sessão tem `id="sessao-<código>"`), textos fixos, Quem somos, Edição 2024.
- `dados/convidados.js`: perfis. `naProgramacao` liga o perfil ao nome escrito na programação.
- `dados/sessoes.js`: `descricao` e `resumo` por código de sessão.
- `dados/acervo.js`: materiais; `sessao` liga o material à sessão.
- `js/main.js`: monta perfis, detalhe das sessões, lista de participantes, acervo e filtros.
- `docs/resumos-das-sessoes.md`: fluxo e prompts do NotebookLM; checklist de revisão.
- `docs/pendencias.md`: manter atualizado a cada mudança.

## Ao revisar resumos de sessão

Siga a seção 4 de `docs/resumos-das-sessoes.md`: nomes só da programação/perfis, nada atribuído à plateia, siglas pela tabela, números iguais às fontes, nenhuma marca `[VERIFICAR]` publicada. O resumo só entra no site depois da aprovação do Pedro (via PR).

## Verificação

Antes de abrir o PR, abra a página com Playwright (Chromium já instalado) em 1440 px e no iPhone 13: sem erros no console, sem rolagem lateral, abas, menu, filtros, janela de perfil e `#sessao-…` funcionando. Atualize as capturas em `docs/capturas/`.
