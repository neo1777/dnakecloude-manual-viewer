export interface ManualPage {
  page: number;
  blocks: string[];
  images: string[];
}

export enum BlockType {
  TITLE_COVER = 'TITLE_COVER',
  VERSION = 'VERSION',
  HEADING_1 = 'HEADING_1',
  HEADING_2 = 'HEADING_2',
  HEADING_3 = 'HEADING_3',
  LIST_ITEM = 'LIST_ITEM',
  NOTE = 'NOTE',
  TOC_ITEM = 'TOC_ITEM',
  PARAGRAPH = 'PARAGRAPH',
  DISCLAIMER_TITLE = 'DISCLAIMER_TITLE',
}

export interface ParsedBlock {
  type: BlockType;
  content: string;
  extra?: string; // For TOC page numbers or extra data
}