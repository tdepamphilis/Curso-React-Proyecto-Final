import { useState } from "react";
import Button from "./Button";
import '../../Styles/DropDown.css'
function DropDown({text, items}) {

    const [dropdown, setDropdown] = useState(false);

    const onEnter = () => {setDropdown(true)}
    const onLeave = () => {setDropdown(false)}
    const buttonFontSize = '20px'

    return (   
        <div className="component" onMouseLeave={onLeave}> 
            <button  aria-expanded={dropdown ? "true" : "false"}  onClick={() => setDropdown((prev) => !prev)} onMouseEnter={onEnter}    className="NavBarButton" >{text} </button>
            <div  class="font-normal bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"  >
                <ul className={`dropDown ${dropdown ? "show" : ""}`} >
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
        </div>
    );
  }

export default DropDown
  