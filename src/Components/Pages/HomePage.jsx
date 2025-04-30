import React, { useContext, useEffect } from 'react'
import { Weather } from '../Weather'
import { AppContext } from '../../Context/AppContext'

export const HomePage = () => {
  const { getLocation, fetchWeatherData } = useContext(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      // console.log("Calling getLocation()");
      await getLocation();
      // console.log("Calling fetchWeatherData()");
      await fetchWeatherData();
    };

    fetchData();
  }, []);

  return (
    <div className="w-full px-4 py-8 flex justify-center items-center">
      <div className="max-w-3xl w-full">
        <Weather />
      </div>
    </div>
  )
}