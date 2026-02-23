import React from 'react';
import { MANUAL_CONTENT } from './data/manualContent';
import ManualPage from './components/ManualPage';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Header content={MANUAL_CONTENT} />
      <div className="pt-20">
        <div className="max-w-[1000px] mx-auto">
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