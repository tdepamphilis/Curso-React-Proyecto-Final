import Button from "./Button";
import DropDown from "./DropDown"
import CartWidject from "./CartWidget";
import SearchWidget from "./SearchWidget";
import '../../Styles/NavBar.css'
function NavBar() {
    return (
        <div className="bar">
            <button class="img">
                {/* <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-10" alt="Flowbite Logo"> */}
               <h1 className="title"> Bit-Store</h1>
            </button>
           
                <DropDown text={'Categorias'} />
        
                <CartWidject />
        
                <SearchWidget />
                
                <Button text={'Perfil'} />
            
                <Button text={'Contactanos'} />
            
            
        </div>


    );
}

export default NavBar;
