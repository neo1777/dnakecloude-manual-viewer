import { BlockType, ParsedBlock } from '../types';

export const parseBlock = (text: string, pageIndex: number): ParsedBlock => {
  const trimmed = text.trim();
  if (!trimmed) return { type: BlockType.PARAGRAPH, content: "" };

  // Page 1 Specifics
  if (pageIndex === 1) {
    if (trimmed.includes("Manuale utente")) return { type: BlockType.TITLE_COVER, content: text };
    if (trimmed.includes("Ver.")) return { type: BlockType.VERSION, content: text };
  }

  // Disclaimer Title
  if (trimmed === "Dichiarazione di non responsabilità") {
    return { type: BlockType.DISCLAIMER_TITLE, content: text };
  }

  // Table of Contents detection
  const tocMatch = trimmed.match(/^(.*?)\.{5,}\s*(\d+)$/);
  if (tocMatch) {
    return {
      type: BlockType.TOC_ITEM,
      content: tocMatch[1],
      extra: tocMatch[2]
    };
  }

  // Headings
  // H1: "1 Login", "2 Aggiunta di dispositivi" (Single digit start)
  if (/^\d+\s+[A-Za-zÀ-ÿ]/.test(trimmed) || trimmed === "Indice" || trimmed === "1 Accedi") {
    return { type: BlockType.HEADING_1, content: text };
  }

  // H2: "2.1 Configurazione" (X.X start)
  if (/^\d+\.\d+\s+[A-Za-zÀ-ÿ]/.test(trimmed)) {
    return { type: BlockType.HEADING_2, content: text };
  }

  // H3: "2.1.1 Connessione" (X.X.X start)
  if (/^\d+\.\d+\.\d+\s+[A-Za-zÀ-ÿ]/.test(trimmed)) {
    return { type: BlockType.HEADING_3, content: text };
  }

  // Special Bullet mapping for subsections (PDF artifact "")
  if (trimmed.startsWith("")) {
    return { type: BlockType.HEADING_3, content: trimmed.substring(1).trim() };
  }

  // List Items
  // Common bullets from PDF extraction:  (U+F06C), ⚫ (U+26AB), -, •
  if (trimmed.startsWith("") || trimmed.startsWith("⚫") || trimmed.startsWith("-") || trimmed.startsWith("•")) {
    return { type: BlockType.LIST_ITEM, content: trimmed };
  }

  // Icon descriptions often start with ":" or are just the icon name
  if (trimmed.startsWith(":") || (trimmed.length < 50 && trimmed.includes(":") && trimmed.split(":")[0].length < 10)) {
    return { type: BlockType.LIST_ITEM, content: trimmed };
  }


  // Numbered lists in text (e.g. "1. Scorri...") that aren't headers
  if (/^\d+\.\s+/.test(trimmed) && !/^\d+\.\d+/.test(trimmed)) {
    // Treat as list item style but keep content
    return { type: BlockType.LIST_ITEM, content: trimmed };
  }

  // Notes
  if (trimmed.startsWith("Nota:") || trimmed.startsWith("Note:")) {
    return { type: BlockType.NOTE, content: text };
  }

  return { type: BlockType.PARAGRAPH, content: text };
};