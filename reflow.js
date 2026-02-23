const fs = require('fs');

// Read existing content
const fileContent = fs.readFileSync('data/manualContent.ts', 'utf8');
const match = fileContent.match(/export const MANUAL_CONTENT: ManualPage\[\] = (\[.*\]);/s);
if (!match) {
    console.error("Could not parse MANUAL_CONTENT");
    process.exit(1);
}

const originalData = eval(match[1]);
let allBlocks = [];
let allImages = [];

originalData.forEach(page => {
    allBlocks = allBlocks.concat(page.blocks);
    allImages = allImages.concat(page.images);
});

const pages = [];

// Page 1: Title
pages.push({
    page: 1,
    blocks: [allBlocks.shift(), allBlocks.shift(), allBlocks.shift()],
    images: [] // Title page has NO images to prevent overflow
});

// Page 2: Index
const indexBlocks = [];
indexBlocks.push(allBlocks.shift()); // "Indice"
for (let i = 0; i < 7; i++) {
    indexBlocks.push(allBlocks.shift()); // Index items
}
pages.push({
    page: 2,
    blocks: indexBlocks,
    images: []
});

// The rest of the content
let pageNum = 3;
while (allBlocks.length > 0 || allImages.length > 0) {
    const pageBlocks = [];
    const pageImages = [];

    // Take up to 10 lines of text (conservative for A4)
    for (let i = 0; i < 10; i++) {
        if (allBlocks.length > 0) {
            pageBlocks.push(allBlocks.shift());
        }
    }

    // Take up to 2-3 images
    for (let i = 0; i < 2; i++) {
        if (allImages.length > 0) {
            pageImages.push(allImages.shift());
        }
    }
    if (allImages.length > 0 && Math.random() > 0.5) {
        // Occasionally allow 3 images if we have many left
        pageImages.push(allImages.shift());
    }

    // If there is only one block left globally, just put it here
    if (allBlocks.length === 1) {
        pageBlocks.push(allBlocks.shift());
    }

    pages.push({
        page: pageNum++,
        blocks: pageBlocks,
        images: pageImages
    });
}

const output = `import { ManualPage } from '../types';

export const MANUAL_CONTENT: ManualPage[] = ${JSON.stringify(pages, null, 4)};\n`;

fs.writeFileSync('data/manualContent.ts', output);
console.log(`Reflowed to ${pages.length} pages.`);
