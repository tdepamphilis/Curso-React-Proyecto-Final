import '../Styles/itemCard.css'
import { BrowserRouter, Routes, Route, useParams, Link } from 'react-router-dom';
function ItemCard({item}) {



    return (
        <div className='itemCard__card'>
            <Link  to={'/item/' + item.id}>
            <img src={item.imgUrl} className='itemCard__img'  />
            </Link>
            <div className='itemCard__textWrapper'>
                <h1 className='itemCard__title'>{item.name}</h1>
                <p className='itemCard__subtitle'>{item.desc}</p>
            </div>
            <div className='itemCard__buttonContainer'>
                <Link to={'/item/' + item.id} className='itemCard__button'>
                    <button >Ver</button>
                </Link>
                <button className='itemCard__button'>Agregar</button>
            </div>
        </div>


    );
}

export default ItemCard;