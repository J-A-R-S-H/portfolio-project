import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLanding from './pages/PageLanding';
import PageProjects from './pages/PageProjects';
import PageSingleProject from './pages/PageSingleProject';

const restBase = "https://johnsjustwantstochill.ca/portfolio-project-headless/wp-json/wp/v2/"


function App() {
  return (
    <>
      <BrowserRouter basename='/'>
          <div id="site-wrapper" className="bg-background text-white  h-max min-h mb-14" >
            <Routes>
              <Route path="/" element={<PageLanding />} />
              <Route path='/projects' element={<PageProjects restBase={restBase}  />} />
              <Route path='/projects/:slug' element={<PageSingleProject restBase={restBase}  />} />

            </Routes>
          </div>
      </BrowserRouter>
    </>
  );
}

export default App;
