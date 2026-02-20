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

      {/* Footer globale per stampa PDF (ripetuto magicamente su ogni foglio vettoriale) */}
      <div className="hidden print:flex fixed bottom-[-15mm] left-0 right-0 h-[10mm] px-16 justify-between items-center text-[10px] font-semibold tracking-widest text-gray-400 uppercase bg-white z-50">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
          DNAKE Cloud Manuale Utente
        </div>
        <span>Pagina <span className="print-page-number"></span></span>
      </div>

      <ScrollToTop />
    </>
  );
}

export default App;