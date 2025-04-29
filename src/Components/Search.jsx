import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { AppContext } from '../Context/AppContext';
import { FaSearchLocation } from "react-icons/fa";

export const Search = () => {
  const { fetchSearchedWeatherData, setShowWeatherComponent, setLoading, setWeatherData } = useContext(AppContext);
  const { register, handleSubmit } = useForm();

  const searchBtnClick = async (data) => {
    setWeatherData(null);
    const city = data.city;
    setLoading(true);
    await fetchSearchedWeatherData(city);
    setShowWeatherComponent(true);
  };

  return (
    <form
      onSubmit={handleSubmit(searchBtnClick)}
      className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-lg"
    >
      <input
        type="text"
        placeholder="Search for a City..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        {...register("city", { required: true })}
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition hover:cursor-pointer"
      >
        <FaSearchLocation className='text-2xl'/>
      </button>
    </form>
  );
};