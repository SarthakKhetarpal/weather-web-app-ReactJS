import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const { setShowWeatherComponent, currentPage, setCurrentPage } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <nav className="w-full px-6 py-4 flex justify-center items-center text-white text-sm sm:text-base">
      <div className="flex gap-10">
        <button
          onClick={async () => {
            setCurrentPage('home');
            setShowWeatherComponent(true);
            navigate('/');
          }}
          className={`${currentPage==='home'?"bg-blue-500 font-bold":"bg-blue-400"} text-white hover:bg-blue-600 transition-colors px-5 py-2 rounded-md shadow-md hover:cursor-pointer`}
        >
          Current Location Weather
        </button>

        <button
          onClick={() => {
            setCurrentPage('search');
            setShowWeatherComponent(false);
            navigate('/search');
          }}
          className={`${currentPage==='search'?"bg-blue-500 font-bold":"bg-blue-400"} text-white hover:bg-blue-600 transition-colors px-5 py-2 rounded-md shadow-md hover:cursor-pointer`}
        >
          Search Weather
        </button>
      </div>
    </nav>
  );
};