import { useState } from "react";
import Button from "./Button";
import '../../Styles/DropDown.css'
import { Link } from "react-router-dom";
function DropDown({text, items}) {

    const [dropdown, setDropdown] = useState(false);

    const onEnter = () => {setDropdown(true)}
    const onLeave = () => {setDropdown(false)}
    const buttonFontSize = '17px'

    const listCategorias = items.map((item) => 
        <li key={item.id}>    
            <Link to={'/category/' + item.id}>
            <Button text={item.name} fontsize={buttonFontSize}  />
            </Link>
        </li>
    )

    return (   
        <div className="component" onMouseLeave={onLeave}> 
            <button  aria-expanded={dropdown ? "true" : "false"}  onClick={() => setDropdown((prev) => !prev)} onMouseEnter={onEnter}    className="NavBarButton" >{text} </button>
                <ul className={`collapse   ${dropdown ? "collapse--Open" : "collapse--Closed"}`} >
                    <div className="collapse__separator"></div>
                    {listCategorias}
                </ul>
    
            
        </div>
    );
  }

export default DropDown
  