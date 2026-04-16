import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Caching from './pages/Caching.jsx';
import Debouncing from './pages/Debouncing.jsx';
import Throttling from './pages/Throttling.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/caching" element={<Caching />} />
        <Route path="/debouncing" element={<Debouncing />} />
        <Route path="/throttling" element={<Throttling />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
