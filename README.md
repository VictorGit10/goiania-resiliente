# Goiânia Resiliente — Versão Estática (Sem Node.js)

Esta pasta contém a versão estática completa do website **Goiânia Resiliente** (2ª edição), totalmente independente de Node.js, npm, Vite ou qualquer ferramenta de build.

## Estrutura de Arquivos

```
versao-html/
├── index.html               # Página principal (estrutura modular)
├── index-standalone.html    # Versão alternativa completa (tudo em um único arquivo HTML)
├── css/
│   └── style.css            # Estilos CSS completos e responsivos
├── js/
│   └── main.js              # JavaScript puro (menu mobile, abas da programação, filtros)
└── assets/
    ├── fonts/               # Fontes locais Host Grotesk (Regular, Medium, SemiBold, Bold, ExtraBold)
    ├── img/                 # Fotos em alta resolução e subpasta logos/ com as marcas
    └── logo/                # Identidade visual em vetor (SVG)
```

## Como Usar / Visualizar

1. **Abertura direta no navegador**:
   - Basta dar um clique duplo em `index.html` (ou `index-standalone.html`). Ele abrirá imediatamente em qualquer navegador (Safari, Chrome, Firefox, Edge) via protocolo de arquivo local (`file://`).

2. **Servidor local simples (opcional)**:
   - Se preferir rodar via HTTP local sem instalar nada extra no macOS, abra o Terminal nesta pasta e execute:
     ```bash
     python3 -m http.server 8000
     ```
   - Acesse no navegador: `http://localhost:8000`

3. **Publicação / Hospedagem**:
   - Pronto para publicação direta em qualquer hospedagem estática (GitHub Pages, Vercel, Netlify, Cloudflare Pages, servidores Apache, Nginx, cPanel ou AWS S3).
   - Não requer compilação ou instalação de dependências no servidor.

---

## Como atualizar o site (sem programar)

Tudo o que muda com frequência fica em **duas listas de texto** na pasta `dados/`.
Abra o arquivo, copie um bloco de exemplo, troque os textos e salve. Cada bloco
termina com uma vírgula: `{ ... },`. As instruções completas estão no topo de cada arquivo.

### Acrescentar um perfil de convidado — `dados/convidados.js`

1. Copie um bloco `{ ... },` e cole antes do `];` final.
2. Preencha `id` (ex.: `"joao-silva"`), `nome`, `cargo`, `resumo` e, se houver, `minibio`.
3. Em `naProgramacao`, escreva o nome **exatamente como está na programação**
   (sem a instituição entre parênteses). É isso que transforma o nome da
   programação num link para o perfil.
4. Salve a foto como `assets/img/convidados/<id>.jpg` (ex.: `joao-silva.jpg`).
   Sem a foto, o cartão mostra as iniciais e "Foto em breve".

Nome sem perfil continua como texto comum na programação.

### Acrescentar um vídeo, PDF ou transcrição ao acervo — `dados/acervo.js`

```
{ tipo: "videos", edicao: 2026, painel: "Dia 1 · As Cidades do Cerrado",
  titulo: "Conferência de Carlos Gurjão",
  link: "https://www.youtube.com/watch?v=XXXXXXXXXXX" },
```

- `tipo`: `videos`, `apresentacoes`, `transcricoes`, `fotos`, `relatorios` ou `artigos`.
- `link`: vídeo do YouTube (o cartão mostra a miniatura), link público do Google
  Drive, ou um PDF guardado no próprio site (ponha o arquivo em `materiais/2026/`
  e escreva `"materiais/2026/nome.pdf"`).
- O aviso "Disponível após o evento" daquele tipo e edição some sozinho quando
  entra o primeiro material com link.

As listas são arquivos `.js` (e não `.json`) de propósito: assim o site também
funciona abrindo o `index.html` direto no computador, sem servidor.
