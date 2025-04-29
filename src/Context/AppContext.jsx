import { createContext, useState } from "react";

const AppContext = createContext();

export function AppContextProvider({ children }) { 
    const [loading, setLoading] = useState(false);
    const [showWeatherComponent, setShowWeatherComponent] = useState(true);
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState('home');
    const API_KEY = import.meta.env.VITE_API_KEY;

    //function to fetch current user location coordinates
    async function getLocation() {
      return new Promise((resolve, reject) => {
        if (localStorage.getItem('Latitude') && localStorage.getItem('Longitude')) {
          resolve();
          return;
        }
    
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const latitude = position.coords.latitude;
              const longitude = position.coords.longitude;
              localStorage.setItem('Latitude', latitude);
              localStorage.setItem('Longitude', longitude);
              resolve(); // resolve only after setting
            },
            (err) => {
              console.error(err);
              setError('Location access denied or unavailable.');
              reject(err);
            }
          );
        } else {
          const msg = 'Geolocation is not supported by this browser.';
          setError(msg);
          reject(new Error(msg));
        }
      });
    }

    //Function to fetch weather data for city searched
    const fetchSearchedWeatherData = async(city) => {
      setLoading(true);
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setWeatherData(data);  
      } catch (error) {
          console.error("Error fetching weather data:", error);
          setError('Failed to fetch weather data.');
      } finally {
          setLoading(false);
      }
    }

    // Function to fetch weather data based on coordinates
    const fetchWeatherData = async () => {
        setLoading(true);
        try {
            const longitude = localStorage.getItem('Longitude');
            const latitude = localStorage.getItem('Latitude');
    
            if (!latitude || !longitude) {
                await getLocation(); 
                return; 
            }

            const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
            console.log(apiURL);
    
            const response = await fetch(apiURL);
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            setWeatherData(data);             
        } catch (error) {
            console.error("Error fetching weather data:", error);
            setError('Failed to fetch weather data.');
        } finally {
            setLoading(false);
        }
    }

    const value = {
        loading,
        setLoading,
        showWeatherComponent, 
        setShowWeatherComponent,
        weatherData,
        setWeatherData,
        getLocation,
        fetchWeatherData,
        error,
        setError,
        fetchSearchedWeatherData,
        currentPage,
        setCurrentPage
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

export { AppContext };