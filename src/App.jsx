import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SectionHome from './sections/SectionHome';

function App() {
  return (
    <>
        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>

      <BrowserRouter basename='/'>
          <div id="site-wrapper">
            <Routes>
              
              <Route path="/" element={<SectionHome />} />
            </Routes>
          </div>
      </BrowserRouter>
    </>
  );
}

export default App;
