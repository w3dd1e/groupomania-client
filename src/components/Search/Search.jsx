import "./search.css";
import { FaMagnifyingGlass } from "react-icons/fa6";

function Search() {
  return (
    <div className='searchContainer'>
      <form className='search'>
        <input type='search' aria-label='search' id='search' name='q'></input>
        <button type='submit' className='searchButton'>
          <FaMagnifyingGlass className='searchIcon' />
        </button>
      </form>
    </div>
  );
}

export default Search;
