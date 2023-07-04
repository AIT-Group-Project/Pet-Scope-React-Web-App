import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useStateContext } from './contexts/ContextProvider';
import './App.css'
import { Navbar } from './components';
import { HomePage } from './pages';

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
              <Route path='/' element={<HomePage />} />
              <Route path='/home-page' element={<HomePage />} />

              {/* Pages */}
              <Route path='/page-1' element='page-1' />
              <Route path='/page-2' element='page-2' />
              <Route path='/page-3' element='page-3' />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
