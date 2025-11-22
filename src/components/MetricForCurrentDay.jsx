import { useEffect, useState } from 'react'
import './MetricForCurrentDay.css'

const MetricForCurrentDay = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='FurtherInfoElement ElementStyles'>
      {/* <h3 className='CurrentTime'>{time.getHours()}:{time.getMinutes()}</h3> */}
      <h3 className='CurrentTime'>{time.toLocaleString()}</h3>
      <div className='Content'>
        <div className='Element'></div>
        <div className='Element'></div>
        <div className='Element'></div>
        <div className='Element'></div>
        <div className='Element'></div>
      </div>
    </section>
  )
}

export default MetricForCurrentDay
