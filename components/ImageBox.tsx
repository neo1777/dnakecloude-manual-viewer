import React, { useState } from 'react';
import { getImageUrl } from '../utils/imageLoader';

interface ImageBoxProps {
  images: string[];
}

const RenderImage = ({ img }: { img: string }) => {
  const [error, setError] = useState(false);
  const src = getImageUrl(img);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center bg-gray-50 border border-gray-200 text-gray-400 text-[10px] p-2 text-center min-h-[60px] w-full rounded-md m-1">
        <span className="font-mono text-[8px] truncate max-w-full italic">{img}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={`Figura ${img}`}
      className="manual-img h-auto object-contain shadow-md border border-gray-100 bg-white rounded-lg p-1 mx-auto"
      style={{ maxHeight: '100%', maxWidth: '100%' }}
      loading="lazy"
      onError={() => setError(true)}
    />
  );
};

const ImageBox: React.FC<ImageBoxProps> = ({ images }) => {
  if (!images || images.length === 0) return null;

  const count = images.length;

  // Decide layout strategy
  const isIconGrid = count > 8; // Pages with many small icons (e.g. 9, 13, 14, 21, 35)

  if (isIconGrid) {
    return (
      <div className="flex flex-wrap justify-center items-center gap-2 my-4 w-full px-4 py-3 bg-gray-50/50 rounded-xl border border-gray-100/50 shadow-inner">
        {images.map((img, idx) => (
          <div key={`${img}-${idx}`} className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] p-1 bg-white rounded-lg shadow-sm border border-gray-200/60 flex justify-center items-center overflow-hidden hover:scale-105 transition-transform duration-200">
            <RenderImage img={img} />
          </div>
        ))}
      </div>
    );
  }

  // Grid for screenshots
  let gridCols = 'grid-cols-1';
  if (count === 2) gridCols = 'grid-cols-2';
  else if (count === 3) gridCols = 'grid-cols-3';
  else if (count === 4) gridCols = 'grid-cols-4';
  else if (count >= 5) gridCols = 'grid-cols-3';

  return (
    <div className={`grid ${gridCols} gap-4 my-6 w-full items-start justify-items-center px-4`}>
      {images.map((img, idx) => (
        <div key={`${img}-${idx}`} className="w-full flex justify-center group">
          <RenderImage img={img} />
        </div>
      ))}
    </div>
  );
};

export default ImageBox;