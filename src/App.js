import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import { Navbar, Footer, Darkmode } from './components';
import { Home, Staff, Services, AboutUs } from './pages';

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <div>
          <div className='w-full'>
            <Navbar />
          </div>


          <div>
            <Routes>
              {/* landing page */}
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />

              {/* Pages */}
              <Route path='/staff' element={<Staff />} />
              <Route path='/services' element={<Services />} />
              <Route path='/about-us' element={<AboutUs />} />
            </Routes>
          </div>
          <div>
          <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
