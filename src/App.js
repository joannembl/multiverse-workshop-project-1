import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Admin from './routes/Admin';
import Home from './routes/Home';
import CarDetails from './routes/CarDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details' element={<CarDetails />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
