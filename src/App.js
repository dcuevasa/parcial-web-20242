import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './components/MainPage';
import UserView from './components/UserView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/usuario" element={<UserView />} />
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
