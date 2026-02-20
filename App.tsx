import React from 'react';
import { MANUAL_CONTENT } from './data/manualContent';
import ManualPage from './components/ManualPage';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Header content={MANUAL_CONTENT} />
      <div className="min-h-screen bg-gray-100 py-10 print:bg-white print:py-0">
        <div className="max-w-[1000px] mx-auto print:max-w-none">
          {MANUAL_CONTENT.map((pageData) => (
            <ManualPage key={pageData.page} data={pageData} />
          ))}
        </div>
      </div>
      <ScrollToTop />
    </>
  );
}

export default App;