import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Details from './pages/Details';

const App = () => {
  return (
    <div>
      <div className='min-h-screen bg-white text-gray-600 text-lg'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recipe-item/:id" element={<Details />} />
        </Routes>
      </div>
    </div>
  )
};

export default App;