import mammoth from "mammoth";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const docxPath = path.join(__dirname, "DNAKE Cloud Platform V2.2.0 User Manual_V1.0.docx");
const outputPath = path.join(__dirname, "extracted_text.txt");

mammoth.extractRawText({ path: docxPath })
    .then(function (result) {
        const text = result.value; // The raw text
        const messages = result.messages; // Any messages, such as warnings during conversion

        fs.writeFileSync(outputPath, text);
        console.log("Extraction complete. Text saved to extracted_text.txt");
        if (messages.length > 0) {
            console.log("Warnings:", messages);
        }
    })
    .catch(function (error) {
        console.error("Error reading DOCX:", error);
    });
