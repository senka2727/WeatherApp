import BGDayCloudy from './assets/Backgrounds/BGCloudyDay.jpg'
import BGDaySunny from './assets/Backgrounds/BGSunnyDay.jpg'
import BGDayRainy from './assets/Backgrounds/BGRainyDay.jpg'
import BGDaySnowy from './assets/Backgrounds/BGSnowyDay.jpg'

import BGNightCloudy from './assets/Backgrounds/BGCloudyNight.jpg'
import BGNightSunny from './assets/Backgrounds/BGSunnyNight.jpg'
import BGNightRainy from './assets/Backgrounds/BGRainyNight.jpg'
import BGNightSnowy from './assets/Backgrounds/BGSnowyNight.jpg'

export default function getBackgroundImage(weather, isDay) {
  console.log(weather);
  if (!weather) return BGDaySunny; // default

  let condition = weather.toLowerCase();

  if(isDay){
    if (condition.includes("clouds")) return BGDayCloudy;
    if (condition.includes("rain")) return BGDayRainy;
    if (condition.includes("snow")) return BGDaySnowy;
    return BGDaySunny;
  } else {
    if (condition.includes("clouds")) return BGNightCloudy;
    if (condition.includes("rain")) return BGNightRainy;
    if (condition.includes("snow")) return BGNightSnowy;
    return BGNightSunny;
  }
}