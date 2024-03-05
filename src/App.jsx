import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SectionHome from './sections/SectionHome';
import Header from './components/Header';

function App() {
  return (
    <>
      <BrowserRouter basename='/'>
          <div id="site-wrapper" className="bg-blue-950 text-white p-5 h-max min-h" >
          <Header />
            <Routes>
              <Route path="/" element={<SectionHome />} />
            </Routes>
          </div>
      </BrowserRouter>
    </>
  );
}

export default App;
