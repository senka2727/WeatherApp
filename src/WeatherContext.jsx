import { createContext, useState } from "react";

export const WeatherContext = createContext(null);

export const WeatherProvider = ({ children }) => {
    const [weather, setWeather] = useState(null);

    const search = async (city) => {
        try {
            const cityCoordsData = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${import.meta.env.VITE_APP_ID}`;
            
            const coordsResponse = await fetch(cityCoordsData);
            const coordsData = await coordsResponse.json();

            const lat = coordsData[0].lat;
            const lon = coordsData[0].lon;

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${import.meta.env.VITE_APP_ID}`

            const response = await fetch(url);
            const data = await response.json();

            setWeather({
                currentCity: city,
                temp: data.main.temp,
                humidity: data.main.humidity,
                wind: data.wind.speed,
                type: data.weather[0].main
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <WeatherContext.Provider value={{ weather, search }}>
            {children}
        </WeatherContext.Provider>
    );
};