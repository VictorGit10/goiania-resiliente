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
