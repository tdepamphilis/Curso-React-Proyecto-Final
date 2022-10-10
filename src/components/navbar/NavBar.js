import Button from "./Button";
import DropDown from "./DropDown"
import CartWidject from "./CartWidget";
import SearchWidget from "./SearchWidget";
import { BrowserRouter, Routes, Route, useParams, Link } from 'react-router-dom';
import '../../Styles/NavBar.css'
function NavBar({categorias}) {
    return (
        <div className="bar">
            <Link to={"/"} className="img" >
            <button>
               <h1 className="title"> Bit-Store</h1>
            </button>
           </Link>
                <DropDown text={'Categorias'} items={categorias} />
        
                <CartWidject />
        
                {/* <SearchWidget /> */}
                
                <Button text={'Perfil'} />
            
                <Button text={'Contactanos'} />
            
            
        </div>


    );
}

export default NavBar;
