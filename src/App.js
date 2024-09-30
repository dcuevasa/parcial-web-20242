import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './components/MainPage';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<Home />} />
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
