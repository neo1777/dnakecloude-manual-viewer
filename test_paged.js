import puppeteer from 'puppeteer';
import fs from 'fs';

const html = `
<!DOCTYPE html>
<html>
<head>
<style>
  @page { 
    size: A4; 
    margin: 20mm 15mm 25mm 15mm; 
    
    @bottom-left {
      content: "Manuale Utente DNAKE";
      font-family: sans-serif;
      font-size: 10px;
      color: #888;
    }
    
    @bottom-right {
      content: "Pagina " counter(page);
      font-family: sans-serif;
      font-size: 10px;
      color: #888;
    }
  }

  body { 
    margin: 0; 
    font-family: sans-serif; 
  }

  .section {
    page-break-after: always;
    padding: 10mm 0;
  }
  
  .spacer {
    height: 100mm;
    background: #f0f0f0;
    margin: 10mm 0;
  }
</style>
</head>
<body>
  <div class="section">
    <h1>Capitolo 1</h1>
    <p>Questo contenuto dovrebbe avere il footer generato nativamente dai margini della pagina.</p>
    <div class="spacer"></div>
  </div>

  <div class="section">
    <h1>Capitolo 2</h1>
    <p>Verifichiamo il salto pagina e la numerazione.</p>
    <div class="spacer"></div>
    <div class="spacer"></div>
  </div>
</body>
</html>
`;
fs.writeFileSync('test_paged.html', html);

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('file://' + process.cwd() + '/test_paged.html', { waitUntil: 'networkidle0' });
    await page.pdf({
        path: 'test_paged.pdf',
        format: 'A4',
        printBackground: true,
        displayHeaderFooter: false // Importante: usiamo quelli CSS, non quelli del browser
    });
    await browser.close();
    console.log('PDF Paged Media Generated!');
})();
