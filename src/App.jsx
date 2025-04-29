import React from 'react';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './Components/Pages/HomePage';
import { SearchPage } from './Components/Pages/SearchPage';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col">
      <header className="text-4xl font-bold text-center text-blue-800 my-6 drop-shadow-sm">
        WEATHER WEB APP
      </header>
      <Navbar />
      <main className="flex-grow flex justify-center items-start px-4">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/search' element={<SearchPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;