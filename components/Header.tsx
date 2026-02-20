import React, { useState, useEffect, useRef } from 'react';
import { ManualPage } from '../types';

interface HeaderProps {
  content: ManualPage[];
}

const Header: React.FC<HeaderProps> = ({ content }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<{ page: number; text: string }[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const newResults: { page: number; text: string }[] = [];

    // Simple search logic through blocks
    content.forEach(page => {
      page.blocks.forEach(block => {
        if (block.toLowerCase().includes(lowerQuery)) {
          newResults.push({
            page: page.page,
            text: block
          });
        }
      });
    });

    setResults(newResults);
    setIsOpen(true);
  }, [query, content]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);

  const handleScrollTo = (page: number) => {
    const element = document.getElementById(`page-${page}`);
    if (element) {
      // Offset for the sticky header
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md print:hidden border-b border-gray-200">
      <div className="max-w-[1000px] mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <h1 className="font-bold text-xl text-blue-600 hidden sm:block whitespace-nowrap">DNAKE Cloud Manuale Utente</h1>
        <h1 className="font-bold text-xl text-blue-600 sm:hidden">DNAKE Cloud</h1>

        <div ref={wrapperRef} className="relative w-full max-w-md">
          <div className="relative">
            <input
              type="text"
              className="w-full border border-gray-300 rounded-full py-2 px-4 pl-10 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
              placeholder="Cerca nel manuale..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => query.length >= 2 && setIsOpen(true)}
            />
            <svg
              className="absolute left-3 top-2.5 h-4 w-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {query && (
              <button
                onClick={() => { setQuery(''); setResults([]); }}
                className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            )}
          </div>

          {isOpen && results.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl max-h-96 overflow-y-auto border border-gray-100 divide-y divide-gray-50">
              {results.map((res, idx) => (
                <button
                  key={idx}
                  className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors group"
                  onClick={() => handleScrollTo(res.page)}
                >
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">Pagina {res.page}</span>
                  </div>
                  <div className="text-sm text-gray-700 line-clamp-2 group-hover:text-blue-800">{res.text}</div>
                </button>
              ))}
            </div>
          )}

          {isOpen && query.length >= 2 && results.length === 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl p-4 text-center text-gray-500 border border-gray-100 text-sm">
              Nessun risultato trovato per "{query}"
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;