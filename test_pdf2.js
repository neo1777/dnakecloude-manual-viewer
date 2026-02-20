import puppeteer from 'puppeteer';
import { convert } from 'pdf-img-convert';
import { readFileSync, writeFileSync } from 'fs';

(async () => {
    console.log('Avvio browser headless...');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    console.log('Navigazione verso http://localhost:5179...');
    await page.goto('http://localhost:5179', { waitUntil: 'networkidle0' });

    // Attendere il rendering delle immagini
    await new Promise(r => setTimeout(r, 2000));

    console.log('Generazione del PDF...');
    await page.pdf({
        path: 'C:\\Users\\Administrator\\.gemini\\antigravity\\brain\\502b9ee8-eed2-492e-b5d8-0ee49e4f87ea\\test_dnake.pdf',
        format: 'A4',
        printBackground: true,
    });

    await browser.close();
    console.log('PDF Salvato correttamente!');

    console.log('Estrazione immagine pagina 1 dal PDF per verifica visiva...');
    const pdfArray = await convert('C:\\Users\\Administrator\\.gemini\\antigravity\\brain\\502b9ee8-eed2-492e-b5d8-0ee49e4f87ea\\test_dnake.pdf', {
        page_numbers: [1],
        base64: false
    });

    writeFileSync('C:\\Users\\Administrator\\.gemini\\antigravity\\brain\\502b9ee8-eed2-492e-b5d8-0ee49e4f87ea\\pdf_proof.png', pdfArray[0]);
    console.log('Immagine generata: pdf_proof.png');

})();
