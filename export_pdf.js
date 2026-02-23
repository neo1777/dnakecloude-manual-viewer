import puppeteer from 'puppeteer';
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function exportPDF() {
    const app = express();
    const port = 3001;
    const distPath = join(__dirname, 'dist');

    app.use(express.static(distPath));

    const server = app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });

    try {
        console.log('Starting Puppeteer...');
        const browser = await puppeteer.launch({ headless: 'new' });
        const page = await browser.newPage();

        console.log('Navigating to page...');
        await page.goto(`http://localhost:${port}/`, { waitUntil: 'networkidle0', timeout: 60000 });

        // Emulate print media type
        await page.emulateMediaType('print');

        console.log('Generating PDF...');

        // Generate PDF
        await page.pdf({
            path: 'DNAKE_Cloud_Manual.pdf',
            format: 'A4',
            printBackground: true,
            margin: {
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px'
            }
        });

        console.log('PDF generated successfully at DNAKE_Cloud_Manual.pdf');
        await browser.close();
    } catch (error) {
        console.error('Error during PDF generation:', error);
    } finally {
        server.close();
    }
}

if (!fs.existsSync(join(__dirname, 'dist'))) {
    console.error("Error: Please run 'npm run build' first so dist/ is available.");
    process.exit(1);
}

exportPDF().catch(err => {
    console.error(err);
    process.exit(1);
});
