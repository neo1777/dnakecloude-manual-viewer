import React from 'react';
import { BlockType, ParsedBlock } from '../types';

interface BlockRendererProps {
  block: ParsedBlock;
}

const BlockRenderer: React.FC<BlockRendererProps> = ({ block }) => {
  if (!block.content) return null;

  switch (block.type) {
    case BlockType.TITLE_COVER:
      return <h1 className="text-4xl sm:text-5xl font-black text-blue-600 tracking-tight text-center mt-32 md:mt-40 mb-8 leading-tight drop-shadow-sm">{block.content}</h1>;

    case BlockType.VERSION:
      return <div className="text-base sm:text-lg text-gray-400 mt-2 text-center mb-32 md:mb-40 font-medium tracking-widest uppercase">{block.content}</div>;

    case BlockType.HEADING_1:
      return (
        <div className="mt-5 mb-3 group">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{block.content}</h1>
          <div className="h-1.5 w-12 sm:w-16 bg-blue-500 rounded-full transition-all group-hover:w-20"></div>
        </div>
      );

    case BlockType.HEADING_2:
      return <h2 className="text-lg sm:text-xl text-blue-600 font-bold mt-4 mb-2 tracking-tight border-l-4 border-blue-600 pl-2 sm:pl-3">{block.content}</h2>;

    case BlockType.HEADING_3:
      return <h3 className="text-base sm:text-lg text-gray-800 font-bold mt-3 mb-1">{block.content}</h3>;

    case BlockType.DISCLAIMER_TITLE:
      return <div className="text-base sm:text-lg font-bold mb-2 mt-4 text-gray-950 border-b border-gray-100 pb-1">{block.content}</div>;

    case BlockType.LIST_ITEM:
      const isNumbered = /^\d+\./.test(block.content);
      const isIconDesc = block.content.trim().startsWith(':');

      let content = block.content;
      if (block.content.startsWith("") || block.content.startsWith("⚫") || block.content.startsWith("-") || block.content.startsWith("•")) {
        content = block.content.substring(1).trim();
      }

      return (
        <div className="flex mb-1 pl-3 sm:pl-4 group">
          {!isNumbered && !isIconDesc && (
            <span className="mr-2 sm:mr-3 text-blue-500 font-bold transition-transform group-hover:scale-125 select-none">•</span>
          )}
          <span className={`text-[12px] sm:text-[13px] leading-snug sm:leading-relaxed text-gray-700 ${isNumbered ? 'font-semibold text-gray-900' : ''} ${isIconDesc ? 'font-medium text-blue-700 bg-blue-50/50 px-1 rounded' : ''}`}>
            {content}
          </span>
        </div>
      );

    case BlockType.NOTE:
      return (
        <div className="relative bg-blue-50/40 border-l-4 border-blue-500 p-2 sm:p-3 my-2 sm:my-3 rounded-r-lg sm:rounded-r-xl overflow-hidden group">
          <div className="absolute top-0 right-0 p-2 opacity-5 transition-opacity group-hover:opacity-10">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" /></svg>
          </div>
          <strong className="text-blue-700 uppercase tracking-tighter text-[9px] sm:text-[10px] font-black block mb-0.5 sm:mb-1">Nota Informativa</strong>
          <span className="text-[11px] sm:text-xs text-gray-800 leading-snug sm:leading-relaxed font-medium">{block.content.replace(/^Nota:/, '').replace(/^Note:/, '').trim()}</span>
        </div>
      );

    case BlockType.TOC_ITEM:
      return (
        <div className="flex justify-between items-baseline mb-0.5 sm:mb-1 text-[12px] sm:text-[13px] group cursor-default">
          <span className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{block.content}</span>
          <span className="flex-grow border-b border-gray-200 mx-2 sm:mx-3 relative top-[-3px] sm:top-[-4px] opacity-40"></span>
          <span className="text-blue-600 font-black text-sm sm:text-base">{block.extra}</span>
        </div>
      );

    default: // PARAGRAPH
      return <p className="mb-2 sm:mb-3 text-[12px] sm:text-[13px] leading-snug text-gray-700 text-justify">{block.content}</p>;
  }
};

export default BlockRenderer;