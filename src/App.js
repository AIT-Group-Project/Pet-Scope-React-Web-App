import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import { Navbar, Footer } from './components';
import { Home, Staff, PlayDate, AboutUs, UserProfile } from './pages';

const App = () => {

  return (
    <div className='overflow-hidden min-w-[690px]'>
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
              <Route path='/playdate' element={<PlayDate />} />
              <Route path='/about-us' element={<AboutUs />} />
              <Route path='/user-profile' element={<UserProfile />} />
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
