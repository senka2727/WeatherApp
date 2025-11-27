import './App.css'
import CurrentMetric from './components/CurrentMetric'
// import MetricForCurrentDay from './components/MetricForCurrentDay'
import OtherCurrentMetric from './components/OtherCurrentMetric'
import Search from './components/Search'

import BGDayCloudy from './assets/Backgrounds/BGCloudyDay.jpg'
import BGDaySunny from './assets/Backgrounds/BGSunnyDay.jpg'
import BGDayRainy from './assets/Backgrounds/BGRainyDay.jpg'
import BGDaySnowy from './assets/Backgrounds/BGSnowyDay.jpg'
import BGNightCloudy from './assets/Backgrounds/BGCloudyNight.jpg'
import BGNightSunny from './assets/Backgrounds/BGSunnyNight.jpg'
import BGNightRainy from './assets/Backgrounds/BGRainyNight.jpg'
import BGNightSnowy from './assets/Backgrounds/BGSnowyNight.jpg'

import getBackgroundImage from './getBackgroundImage'
import { useContext } from 'react'
import { WeatherContext } from './WeatherContext'

function App() {
  const { weather } = useContext(WeatherContext)

  const bgImage = getBackgroundImage(
    weather ? weather.type : "default",
    weather ? weather.is_day : 1
  ) 

  return (
    <div id='Site' style={{backgroundImage: `url(${bgImage})`}}>
      <main>
        <div className='LeftSide'>
          <Search/>
          <CurrentMetric/>
          <OtherCurrentMetric/>
        </div>
        {/* <div className='RightSide'>
          <MetricForCurrentDay/>
        </div> */}
      </main>
    </div>
  )
}

export default App
