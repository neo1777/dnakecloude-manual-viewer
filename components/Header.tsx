import React, { useState, useEffect, useRef } from 'react';
import { ManualPage } from '../types';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

interface HeaderProps {
  content: ManualPage[];
}

const Header: React.FC<HeaderProps> = ({ content }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<{ page: number; text: string }[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const exportPDF = async () => {
    if (isExporting) return;
    setIsExporting(true);
    try {
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();

      // Itera su tutte le pagine fornite nei props context
      for (let i = 0; i < content.length; i++) {
        const pageElement = document.getElementById(`page-${content[i].page}`);
        if (pageElement) {
          // Rimuove temporaneamente shadow e border per un export pulito
          const originalShadow = pageElement.style.boxShadow;
          const originalBorder = pageElement.style.border;
          pageElement.style.boxShadow = 'none';
          pageElement.style.border = 'none';

          const canvas = await html2canvas(pageElement, {
            scale: 2,
            useCORS: true,
            logging: false
          });

          pageElement.style.boxShadow = originalShadow;
          pageElement.style.border = originalBorder;

          const imgData = canvas.toDataURL('image/jpeg', 0.95);
          const imgProps = pdf.getImageProperties(imgData);
          const ratio = imgProps.width / imgProps.height;
          const adjustedHeight = pdfWidth / ratio;

          if (i > 0) {
            pdf.addPage();
          }
          pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, adjustedHeight);
        }
      }

      pdf.save('Manuale_DNAKE_Cloud.pdf');
    } catch (error) {
      console.error("Errore durante l'esportazione PDF:", error);
      alert("Si è verificato un errore durante l'esportazione del PDF.");
    } finally {
      setIsExporting(false);
    }
  };

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

        <button
          onClick={exportPDF}
          disabled={isExporting}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-colors text-sm whitespace-nowrap ml-2 ${isExporting
              ? 'bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed'
              : 'bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-200'
            }`}
          title="Esporta il manuale in formato PDF"
        >
          {isExporting ? (
            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          )}
          <span className="hidden sm:inline">{isExporting ? 'Attendere...' : 'PDF'}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;