import React, { useRef, useEffect, useState } from 'react';
import { ManualPage as PageType } from '../types';
import { parseBlock } from '../utils/textParser';
import BlockRenderer from './BlockRenderer';
import ImageBox from './ImageBox';

interface ManualPageProps {
  data: PageType;
}

const ManualPage: React.FC<ManualPageProps> = ({ data }) => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [overflows, setOverflows] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (pageRef.current) {
        // A4 height is 297mm. If inner content is higher, it overflows.
        const isOverflowing = pageRef.current.scrollHeight > pageRef.current.clientHeight;
        setOverflows(isOverflowing);
      }
    };

    // Give images time to load
    setTimeout(checkOverflow, 1000);
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, []);

  return (
    <div className="a4-container" id={`page-${data.page}`}>
      <div className="a4-page" ref={pageRef}>
        {/* Main Content Area */}
        <div className="pt-[20mm] px-[20mm] pb-[25mm] relative z-0">
          <div className="content mb-4">
            {data.blocks.map((text, idx) => (
              <BlockRenderer key={idx} block={parseBlock(text, data.page)} />
            ))}
          </div>

          <ImageBox images={data.images} />
        </div>

        {/* Footer Area within A4 bounds */}
        <div className="absolute bottom-0 left-0 w-full px-[20mm] h-[20mm] flex justify-between items-center text-[10px] font-semibold tracking-widest text-gray-400 uppercase border-t border-gray-100 bg-white z-10">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
            DNAKE Cloud Manuale Utente
          </div>
          <span className="text-blue-600">Pagina {data.page}</span>
        </div>
      </div>
    </div>
  );
};

export default ManualPage;