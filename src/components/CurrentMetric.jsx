import './CurrentMetric.css'

import CloudyIMG from '../assets/WeatherIcons/cloudy.png'
import RainyIMG from '../assets/WeatherIcons/rainy.png'
import SnowyIMG from '../assets/WeatherIcons/snowy.png'
import SunnyIMG from '../assets/WeatherIcons/sun.png'
import WindyIMG from '../assets/WeatherIcons/windy.png'

import { useContext, useEffect, useState } from 'react'
import { WeatherContext } from '../WeatherContext'

const CurrentMetric = () => {
    const { weather, search } = useContext(WeatherContext);

    const GetWeatherIcon = () => {
        switch(weather.type){
            case "Clear":
                return SunnyIMG;
            case "Clouds":
                return CloudyIMG;
            case "Rain":
                return RainyIMG;
            case "Drizzle":
                return RainyIMG;
            case "Snow":
                return SnowyIMG;
            case "Thunderstorm":
                return RainyIMG;
            case "Wind":
                return WindyIMG;
            default:
                return CloudyIMG;
        }
    }

    // useEffect(() => {
    //     search("London");
    // }, [])
    
  return (
    <section className='CurrentTemperatureElement ElementStyles'>
        {weather ? 
            <> 
                <h3>Current weather in {weather.currentCity}:</h3>
                <div className='Metric'>
                    <img src={GetWeatherIcon()}></img>
                    <h1>{weather.temp}°C</h1>
                </div>
                <div className='Divider'></div>
            </>

            :

            <h3>info is not available</h3>
        }
    </section>
  )
}

export default CurrentMetric
