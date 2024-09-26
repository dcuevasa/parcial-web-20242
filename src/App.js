import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './components/MainPage';
import Images from './components/Images';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/images" element={<Images />} />
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
