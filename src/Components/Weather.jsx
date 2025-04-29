import React, { useContext, useEffect } from 'react'
import { AppContext } from '../Context/AppContext'
import { Loader } from './Loader';
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { BsCloudsFill } from "react-icons/bs";
import { TbError404 } from "react-icons/tb";

export const Weather = () => {
  const { loading, weatherData, showWeatherComponent } = useContext(AppContext);

  useEffect(() => {
    console.log('Reading weather data ', weatherData);
  }, [weatherData]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <Loader />
      </div>
    );
  }

  return (
    <div>
      {weatherData && showWeatherComponent ? (
        <div className="bg-white rounded-xl shadow-lg p-6 text-center space-y-6">
          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold text-gray-800">{weatherData.name}</p>
            <img
              src={`https://flagcdn.com/144x108/${weatherData.sys.country.toLowerCase()}.png`}
              alt="Country Flag"
              loading="lazy"
              className="w-12 h-auto mt-2"
            />
          </div>

          <p className="capitalize text-lg text-gray-600">{weatherData.weather[0].description}</p>
          <img
            src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
            alt="Weather Icon"
            className="w-16 h-16 mx-auto"
          />
          <p className="text-4xl font-semibold text-blue-600">{weatherData.main.temp}°C</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <div className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow">
              {/* <img src="./assets/wind.png" alt="Wind" className="w-8 mb-2" /> */}
              <FaWind className='text-3xl'/>
              <p className="text-sm text-gray-500">Wind</p>
              <p className="text-lg font-medium">{weatherData.wind.speed} m/s</p>
            </div>

            <div className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow">
              {/* <img src="./assets/humidity.png" alt="Humidity" className="w-8 mb-2" /> */}
              <WiHumidity className='text-4xl'/>
              <p className="text-sm text-gray-500">Humidity</p>
              <p className="text-lg font-medium">{weatherData.main.humidity}%</p>
            </div>

            <div className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow">
              {/* <img src="./assets/cloud.png" alt="Clouds" className="w-8 mb-2" /> */}
              <BsCloudsFill className='text-3xl'/>
              <p className="text-sm text-gray-500">Cloudiness</p>
              <p className="text-lg font-medium">{weatherData.clouds.all}%</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-16 p-6 text-center">
          <TbError404 className="text-8xl text-red-500 mb-4" />
          <p className="text-xl font-semibold text-gray-700">City not found!</p>
          <p className="text-gray-500 mt-1">Please check the city name and try again.</p>
        </div>
      )}
    </div>
  );
};