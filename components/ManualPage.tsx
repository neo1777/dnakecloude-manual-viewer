import React from 'react';
import { ManualPage as PageType } from '../types';
import { parseBlock } from '../utils/textParser';
import BlockRenderer from './BlockRenderer';
import ImageBox from './ImageBox';

interface ManualPageProps {
  data: PageType;
}

const ManualPage: React.FC<ManualPageProps> = ({ data }) => {
  return (
    <div id={`page-${data.page}`} className="flex flex-col relative min-h-[1100px] mb-20 bg-white shadow-2xl mx-auto max-w-[900px] rounded-sm overflow-hidden border border-gray-200 print:shadow-none print:border-none print:mb-0 page-break">
      <div className="flex-grow p-12 sm:p-16">
        <div className="content mb-12">
          {data.blocks.map((text, idx) => (
            <BlockRenderer key={idx} block={parseBlock(text, data.page)} />
          ))}
        </div>

        <ImageBox images={data.images} />
      </div>

      <div className="w-full px-16 py-8 flex justify-between items-center text-xs font-semibold tracking-widest text-gray-400 uppercase border-t border-gray-50 bg-gray-50/30">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
          DNAKE Cloud Manuale Utente
        </div>
        <span>Pagina {data.page}</span>
      </div>
    </div>
  );
};

export default ManualPage;