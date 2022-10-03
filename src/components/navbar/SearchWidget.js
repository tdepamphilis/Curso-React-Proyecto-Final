import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import '../../Styles/SearchWidget.css'

function SearchWidget({text, items}) {

    const [extended, setExtended] = useState(false)
    
    return (   
       <div className="search__container">
       <BiSearchAlt  className={`  ${extended ? "search__icon--open" : "search__icon"}`}  onClick={() => setExtended((prev) => !prev)} />
       <input type={'text'} className={`search__input  ${extended ? "search__input--open" : "search__input--closed"}`}  onBlur={() => setExtended(false)} ></input>
       </div>
    );
  }

  
  
export default SearchWidget
  