# Gravação do áudio das sessões

Este documento responde a uma pergunta prática: **como ter o áudio de cada sessão para gerar os resumos no NotebookLM, se o evento é transmitido no YouTube?**

Ele complementa [`resumos-das-sessoes.md`](resumos-das-sessoes.md), que descreve o fluxo de resumo, revisão e publicação.

## Decisão

A fonte principal deve ser a gravação da equipe de audiovisual do evento. A captura da transmissão do YouTube é uma **segunda fonte** e um **adiantamento**: serve para começar o trabalho no mesmo dia e para garantir uma cópia se o material oficial demorar ou não existir.

Se o master chegar, ele tem prioridade: é menos comprimido, não depende da internet e normalmente tem o áudio da sala melhor do que o mix da live.

## O que confirmar antes

- Autorização dos palestrantes para gravar e publicar resumo/transcrição.
- Aviso à plateia na abertura.
- Slides em PDF até o dia anterior.
- Link do vídeo da transmissão (o link do player, não o do canal).
- Se a equipe de audiovisual grava localmente, pedir uma cópia do master de cada sessão.

## Captura da live (só áudio)

Não precisa de OBS nem gravar a tela: o `yt-dlp` baixa a faixa de áudio da transmissão.

Pré-requisitos: `yt-dlp` e `ffmpeg` instalados; computador ligado, sem suspender; rede estável; espaço em disco (áudio ocupa cerca de 100 MB por hora).

```bash
yt-dlp --no-part --hls-use-mpegts --live-from-start --wait-for-video 30 \
  -f bestaudio/best \
  -o "dia1-%(title)s.%(ext)s" \
  "https://www.youtube.com/watch?v=XXXX"
```

- `--wait-for-video 30`: espera a live começar.
- `--live-from-start`: puxa desde o início, quando o YouTube está com DVR.
- `--no-part`: mantém o arquivo válido se a captura for interrompida.
- Se o YouTube pedir login: `--cookies-from-browser chrome`.
- Se a live cair, rode de novo com outro nome; o trecho anterior fica salvo.

> O arquivo pode sair com extensão `.mp4` mesmo sendo só áudio (o YouTube entrega em MPEG-TS). O `ffmpeg` lê normalmente.

## Cortar por sessão

O site usa códigos fixos (`d1-cidades-cerrado`, `d2-saude-emergencias` etc.). O áudio de cada sessão deve usar o código, porque é ele que liga o material à programação e ao acervo.

Se a captura for um arquivo contínuo por dia, corte nos horários da programação:

```bash
ffmpeg -ss 09:30:00 -t 01:10:00 -i dia1.mp4 \
  -vn -ac 1 -ar 16000 -b:a 64k \
  d1-cidades-cerrado.mp3
```

- `-ss`: início da sessão; `-t`: duração.
- Mono, 16 kHz, 64 kbps é suficiente para fala e deixa o arquivo em cerca de 29 MB por hora.
- Se a sessão atrasar, ajuste os tempos com as anotações do dia.
- Se você já tem o master, use o mesmo comando nele.

## Depois da captura

1. Um caderno no NotebookLM por dia.
2. Suba os áudios do dia, os slides e as anotações da equipe.
3. Use os prompts de [`resumos-das-sessoes.md`](resumos-das-sessoes.md).
4. Revise nomes, siglas e números; publique o `resumo` em `dados/sessoes.js` via PR, com aprovação do Pedro.
5. Transcreva só as sessões em que a transcrição completa fizer sentido; salve em `materiais/2026/<codigo>-transcricao.pdf` e cadastre em `dados/acervo.js`.

## Limites e riscos

- **Mix da transmissão.** O áudio é mixado para o público (música, aplausos, compressão). O master da mesa de som é melhor para transcrição.
- **Perguntas da plateia.** Se os microfones da sala não estiverem abertos, a transcrição não pega as perguntas. As anotações da equipe são obrigatórias.
- **Quedas e atrasos.** Se a live cair, o `yt-dlp` tenta reconectar, mas pode haver trecho perdido. Se o DVR estiver desligado, `--live-from-start` não recupera o começo.
- **Disponibilidade.** O vídeo pode ser privado, sair do ar ou não ter gravação publicada. Ter uma cópia local é a garantia.
- **Direitos e autorização.** Gravar e publicar depende de autorização dos participantes e das regras do evento. O áudio bruto não precisa ser publicado; o site publica resumo e, quando houver, transcrição.
- **Tempo de revisão.** Capturar é a parte fácil. O trabalho real é conferir nomes, números e contexto e obter a aprovação. Para 12 sessões em dois dias, isso não sai no mesmo dia sem uma equipe dedicada.

## Vale a pena?

**Sim, como seguro e adiantamento; não como fonte única.**

A captura custa pouco, não depende de estar na sala e garante uma cópia utilizável no mesmo dia. Mas ela não substitui o master da equipe de audiovisual e não elimina a revisão humana.

Se o master oficial chegar em até alguns dias, a captura da live terá sido um seguro barato. Se o master não existir ou demorar, ela é o que viabiliza o compromisso do site de publicar os resumos logo depois do evento.

## Checklist

- [ ] Link do vídeo confirmado (não o do canal).
- [ ] Autorização dos palestrantes e aviso à plateia.
- [ ] `yt-dlp` atualizado e teste de 1 minuto feito no dia anterior.
- [ ] Computador ligado, sem suspender, com espaço em disco.
- [ ] Captura iniciada 10 minutos antes.
- [ ] Arquivos conferidos com `ffprobe` (duração e áudio).
- [ ] Cópia de segurança em outro disco ou nuvem.
- [ ] Áudios cortados com os códigos das sessões.
- [ ] Slides e anotações do dia separados para o NotebookLM.
