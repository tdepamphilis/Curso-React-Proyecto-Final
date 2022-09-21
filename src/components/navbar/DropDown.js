import { useState } from "react";
import Button from "./Button";
import '../../Styles/DropDown.css'
function DropDown({text, items}) {

    const [dropdown, setDropdown] = useState(false);

    const onEnter = () => {setDropdown(true)}
    const onLeave = () => {setDropdown(false)}
    const buttonFontSize = '17px'

    return (   
        <div className="component" onMouseLeave={onLeave}> 
            <button  aria-expanded={dropdown ? "true" : "false"}  onClick={() => setDropdown((prev) => !prev)} onMouseEnter={onEnter}    className="NavBarButton" >{text} </button>
                <ul className={`collapse   ${dropdown ? "collapse--Open" : "collapse--Closed"}`} >
                    <div className="collapse__separator"></div>
                    <li>
                        <Button text={'Colgantes'} fontsize={buttonFontSize}  />
                    </li>
                    <li>
                        <Button text={'Lamparas'} fontsize={buttonFontSize}/>
                    </li>
                    <li>
                        <Button text={'Accesorios'} fontsize={buttonFontSize}/>
                    </li>
                </ul>
    
            
        </div>
    );
  }

export default DropDown
  