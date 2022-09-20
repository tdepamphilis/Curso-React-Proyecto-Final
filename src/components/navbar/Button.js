import '../../Styles/Buttons.css'
function Button({text, fontsize}) {
    return (   
            <button  className='NavBarButton' aria-current="page" style={{fontSize: fontsize}}>{text}</button>
    );
  }

export default Button
  