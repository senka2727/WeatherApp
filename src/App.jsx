import './App.css'
import CurrentMetric from './components/CurrentMetric'
// import MetricForCurrentDay from './components/MetricForCurrentDay'
import OtherCurrentMetric from './components/OtherCurrentMetric'
import Search from './components/Search'

function App() {
  return (
    <>
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
    </>
  )
}

export default App
