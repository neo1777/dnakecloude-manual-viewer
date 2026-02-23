# DNAKE Cloud Platform - Manual Viewer

Un visualizzatore di manuali utente avanzato, progettato come applicazione React (Vite + TypeScript) con un focus estremo sull'impaginazione nativa A4 e sull'esportazione PDF pixel-perfect.

## 🚀 Architettura e Stack

- **Framework**: React 18 + Vite
- **Linguaggio**: TypeScript
- **Styling**: Tailwind CSS
- **Automazione PDF**: Puppeteer (Node.js) + Express

---

## 💻 Caratteristiche Tecniche (Nerd Features)

### 1. Motore di Rendering A4 Nativo (CSS Paged Media)
L'applicazione non utilizza librerie esterne per la generazione del PDF (come `jspdf` o `html2canvas`), ma sfrutta le specifiche native CSS per il media di stampa (`@media print`).
- **Aspect Ratio Immutabile**: Il DOM è contenuto in istanze `.a4-page` con metriche rigide di `210mm x 297mm`.
- **Zoom Adattivo**: Un sistema di zoom dinamico basato su media queries scala la visualizzazione a schermo per adattarla a schermi di diverse dimensioni (mantenendo il layout A4 reale immutato in sottofondo).
- **Controllo di Interruzione di Pagina**: Implementazione di `page-break-after: always !important;` per forzare l'engine di stampa del browser (Chromium/Webkit) a splittare esattamente alla fine del componente React, prevenendo antiestetici troncamenti di testo o immagini.

### 2. Search Engine con Context Highlighting & Auto-Centering
La navigazione e ricerca dispongono di logiche di astrazione UI avanzate:
- **Global SearchContext**: Il termine ricercato (se > 2 caratteri) viene iniettato nel React Context Tree, rendendolo accessibile in modo reattivo a qualsiasi componente nested (come il `BlockRenderer`).
- **Dynamic Regex Highlighting**: Il `BlockRenderer` intercetta la stringa in arrivo e, usando espressioni regolari (RegExp), "splitta" il testo avvolgendo in realtime il match desiderato con un tag HTML `<mark>` stilizzato via Tailwind.
- **Smart Offset Scrolling**: Aggiunta una matematica custom nello scrolling automatico (in `Header.tsx`). Invece di limitarsi a scorrere all'ID della pagina o della sezione, l'app prima attende il ciclo di render di React (per far apparire il `<mark>`), poi ricerca quel preciso elemento nel DOM, ne calcola la `getBoundingClientRect()` e sottrae l'offset dell'header sticky *più* 1/3 della viewport (`window.innerHeight / 3`). Il risultato posiziona la singola parola cercata perfettamente al centro dello schermo.

### 3. Pipeline Esportazione PDF Automatica (Puppeteer)
Per un risultato da tipografia (senza marginazioni anomale inserite dal SO), è presente uno script Node.js indipendente (`export_pdf.js`).
- Boota un server Express effimero su `dist/`.
- Pilota un'istanza Headless Chrome con flag di sistema rimossi.
- Forza la mode `emulateMediaType('print')`, bypassando l'UI interattiva (es. Header).
- Esporta a disco (`DNAKE_Cloud_Manual.pdf`) attendendo il network e l'hydration dei font.
- Inseribile comodamente in Pipeline CI/CD GitHub.

### 4. Ottimizzazione Asset e Reflow Algoritmico
Gli spazi dei text-node (p, l, h1-3) e i padding asimmetrici per l'elemento `ImageBox` sono stati calcolati matematicamente in modo che una pagina non sfori minimamente i 297mm (-20mm di padding in-box). Per il contenuto JSON/TS denso, è stato operato uno split chirurgico manuale per garantire che testi con molte immagini godano sempre del loro canvas A4 perimetro-perfetto senza buffer overflow.

### 5. CI/CD e Deployment (GitHub Pages)
L'intero ciclo di vita dell'applicazione è automatizzato tramite **GitHub Actions**:
- Ogni `git push` sul branch `main` innesca un workflow CI/CD.
- L'action installa le dipendenze, esegue `npm run build` assemblando l'applicazione React statica ottimizzata (Vite).
- Una volta compilata, la directory `dist` viene servita online dinamicamente tramite **GitHub Pages**. Nessun server Node/PHP aggiuntivo è richiesto.
- Il deploy è configurato ad-hoc specificando le base route nei file config, risultando raggiungibile globalmente all'URL stabilito.

## Comandi Utili

```bash
# Avvio locale (hot-reload)
npm run dev

# Build di produzione
npm run build

# Generazione PDF (Puppeteer) - lancia the build directory
npm run export:pdf
```
