import puppeteer from 'puppeteer';

(async () => {
    console.log('Avvio browser headless...');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    console.log('Navigazione verso http://127.0.0.1:8080...');
    await page.goto('http://127.0.0.1:8080', { waitUntil: 'networkidle0' });

    // Attendere il rendering delle immagini
    await new Promise(r => setTimeout(r, 2000));

    console.log('Emulazione media screen(print)...');
    await page.emulateMediaType('print');

    console.log('Generazione dello screenshot layout CSS...');
    await page.screenshot({
        path: 'C:\\Users\\Administrator\\.gemini\\antigravity\\brain\\502b9ee8-eed2-492e-b5d8-0ee49e4f87ea\\pdf_proof.png',
        fullPage: false,
        clip: { x: 0, y: 0, width: 800, height: 1100 } // Simuliamo la proporzione A4 top page
    });

    // Generiamo anche il pdf come controprova formale
    await page.pdf({
        path: 'C:\\Users\\Administrator\\.gemini\\antigravity\\brain\\502b9ee8-eed2-492e-b5d8-0ee49e4f87ea\\test_dnake_2.pdf',
        format: 'A4',
        printBackground: true,
    });

    await browser.close();
    console.log('Test Screenshot e Test PDF generati con successo!');
})();
