import { FaSearch } from 'react-icons/fa'
import './Search.css'
import { useContext, useRef } from 'react'
import { WeatherContext } from '../WeatherContext';

const Search = () => {
  const { search } = useContext(WeatherContext);

  const inputField = useRef(null);

  function PerformSearch(){
    search(inputField.current.value);
    inputField.current.value = "";
  }

  const handleKeyDown = (e) => {
        if(e.key === "Enter"){
            PerformSearch();
        }
    };

  return (
    <section className='SearchElement ElementStyles'>
        <input placeholder="Enter your city here..." ref={inputField} onKeyDown={handleKeyDown}></input>
        <button onClick={PerformSearch}><FaSearch/></button>        
    </section>
  )
}

export default Search
