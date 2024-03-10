import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLanding from './pages/PageLanding';

function App() {
  return (
    <>
      <BrowserRouter basename='/'>
          <div id="site-wrapper" className="bg-background text-white p-5 h-max min-h mb-14" >
            <Routes>
              <Route path="/" element={<PageLanding />} />
            </Routes>
          </div>
      </BrowserRouter>
    </>
  );
}

export default App;
