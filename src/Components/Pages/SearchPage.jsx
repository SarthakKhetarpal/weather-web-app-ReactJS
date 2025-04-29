import React, { useContext } from 'react'
import { Search } from '../Search'
import { AppContext } from '../../Context/AppContext'
import { Weather } from '../Weather';
import { Loader } from '../Loader';

export const SearchPage = () => {
  const { loading, showWeatherComponent } = useContext(AppContext);

  return (
    <div className="w-full px-4 py-8 flex flex-col items-center min-h-screen">
      <div className="w-full max-w-2xl">
        <Search />
      </div>

      {loading ? (<Loader/>) : (showWeatherComponent && (
        <div className="mt-8 w-full max-w-3xl">
          <Weather />
        </div>
      ))}
    </div>
  );
};