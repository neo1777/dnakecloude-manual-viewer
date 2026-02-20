import { exportImages } from 'pdf-export-images';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Replace with actual determined path
const pdfPath = path.join(__dirname, "DNAKE-Cloud-Platform-V2.2.0-User-Manual_V1.0.pdf");
const outputDir = path.join(__dirname, 'public', 'images');

// Ensure output dir exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

exportImages(pdfPath, outputDir)
    .then(images => {
        console.log(`Successfully exported ${images.length} images!`);
        console.log(images);
    })
    .catch(err => {
        console.error("Error exporting images:", err);
    });
