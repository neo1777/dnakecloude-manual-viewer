import puppeteer from 'puppeteer';

(async () => {
    console.log('Avvio browser headless...');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    console.log('Navigazione verso http://localhost:5173...');
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });

    // Attendere il rendering delle immagini
    await new Promise(r => setTimeout(r, 2000));

    console.log('Generazione del PDF...');
    await page.pdf({
        path: 'test_dnake.pdf',
        format: 'A4',
        printBackground: true,
    });

    await browser.close();
    console.log('PDF Salvato correttamente: test_dnake.pdf');
})();
