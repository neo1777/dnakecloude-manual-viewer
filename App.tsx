import React, { useState } from 'react';
import { MANUAL_CONTENT } from './data/manualContent';
import ManualPage from './components/ManualPage';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';

export const SearchContext = React.createContext<{ searchQuery: string, setSearchQuery: (q: string) => void }>({ searchQuery: '', setSearchQuery: () => { } });

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      <Header content={MANUAL_CONTENT} />
      <div className="pt-20">
        <div className="max-w-[1000px] mx-auto">
          {MANUAL_CONTENT.map((pageData) => (
            <ManualPage key={pageData.page} data={pageData} />
          ))}
        </div>
      </div>

      <ScrollToTop />
    </SearchContext.Provider>
  );
}

export default App;