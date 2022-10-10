import '../Styles/ItemDetail.css'
import { BrowserRouter, Routes, Route, useParams, Link } from 'react-router-dom';
function ItemDetail({item}) {

  

    return (
        <div className='itemDetail__card'>
                <img src={item.imgUrl} className='itemDetail__img' />
                <div className='itemDetail__textContainer'>
                    <h1 className='itemDetail__title'>{item.name}</h1>
                    <p className='itemDetail__subtitle'>{item.desc}</p>
                    <div className='itemDetail__buttonContainer'>
                        <button className='itemDetail__button'>Sumar al carrito</button>
                    </div>
                </div>     
        </div>


    );
}

export default ItemDetail;