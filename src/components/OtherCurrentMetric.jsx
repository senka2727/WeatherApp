import './OtherCurrentMetric.css'
import WaterDropsIMG from '../assets/WeatherIcons/humidity.png'
import WindIMG from '../assets/WeatherIcons/windy.png'
import { useContext } from 'react';
import { WeatherContext } from '../WeatherContext';

const OtherCurrentMetric = () => {
  const { weather } = useContext(WeatherContext);

  return (
    <section className='OtherMetricsElement ElementStyles'>
        <div className='Container'>
          {weather ? 
            <>
              <div className='OtherMetric'> 
                <img src={WindIMG}/>
                <p>{weather.wind} km/h</p>
              </div>

              <div className='OtherMetric'>
                <img src={WaterDropsIMG}/>
                <p>{weather.humidity}%</p>
              </div>
            </>
        :
          <h3>info is not available</h3>
        }
        </div>
    </section>
  )
}

export default OtherCurrentMetric
