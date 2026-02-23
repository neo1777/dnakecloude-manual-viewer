import React, { useState, useEffect, useRef, useContext } from 'react';
import { ManualPage } from '../types';
import { SearchContext } from '../App';

interface HeaderProps {
  content: ManualPage[];
}

const Header: React.FC<HeaderProps> = ({ content }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<{ page: number; text: string }[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { setSearchQuery } = useContext(SearchContext);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    const searchResults: { page: number; text: string }[] = [];
    content.forEach((page) => {
      page.blocks.forEach((block) => {
        if (block.toLowerCase().includes(query.toLowerCase())) {
          // Check if we already have this page to avoid duplicates from the same page
          if (!searchResults.find(r => r.page === page.page)) {
            searchResults.push({
              page: page.page,
              text: block.substring(0, 100) + (block.length > 100 ? '...' : '')
            });
          }
        }
      });
    });
    setResults(searchResults.slice(0, 8)); // Limit results
  }, [query, content]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToPage = (pageNum: number) => {
    // 1. Set the query first so the <mark> elements render
    setSearchQuery(query);
    setIsOpen(false);

    // 2. Wait for React to render the <mark> elements
    setTimeout(() => {
      const pageElement = document.getElementById(`page-${pageNum}`);
      if (!pageElement) return;

      // 3. Look for the highlighted <mark> inside this specific page
      const markElement = pageElement.querySelector('mark');

      const headerOffset = 100; // Account for sticky header

      if (markElement) {
        // Scroll to the specific highlighted word and center it
        const elementPosition = markElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset - (window.innerHeight / 3); // Center slightly above middle

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        // Fallback: scroll to the top of the page if no mark found (e.g. image name match)
        const elementPosition = pageElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100); // 100ms delay to allow React context propagation
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between gap-8">
        {/* Title */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
          </div>
          <div>
            <h1 className="text-lg font-black text-gray-900 tracking-tight leading-none uppercase">DNAKE Cloud Platform</h1>
            <p className="text-[10px] font-bold text-blue-600 tracking-widest uppercase mt-1">Manuale Utente</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-grow max-w-2xl relative" ref={wrapperRef}>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-500 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
            <input
              type="text"
              placeholder="Cerca comandi o funzioni..."
              className="w-full bg-gray-50/50 border-2 border-transparent focus:bg-white focus:border-blue-500/20 focus:ring-4 focus:ring-blue-500/5 rounded-2xl py-2.5 pl-12 pr-4 transition-all duration-300 text-sm font-medium outline-none"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSearchQuery('');
                setIsOpen(true);
              }}
              onFocus={() => setIsOpen(true)}
            />
          </div>

          {/* Results Dropdown */}
          {isOpen && results.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-3 bg-white rounded-2xl shadow-2xl shadow-blue-900/10 border border-blue-50 py-3 animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="px-4 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                Risultati trovati
              </div>
              {results.map((res, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToPage(res.page)}
                  className="w-full px-4 py-3 hover:bg-blue-50 flex items-start gap-4 transition-colors group"
                >
                  <span className="shrink-0 bg-blue-100 text-blue-600 text-[10px] font-black w-10 h-6 flex items-center justify-center rounded-lg mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    P{res.page}
                  </span>
                  <p className="text-xs text-gray-600 leading-relaxed text-left group-hover:text-gray-900 line-clamp-2">
                    {res.text}
                  </p>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Action Button - Simplified */}
        <div className="shrink-0 hidden md:block">
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-gray-50 px-3 py-2 rounded-full border border-gray-100 italic">
            DNAKE v2.2
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;