import '../Styles/ItemListContainer.css'
import { useParams, useLocation } from 'react-router-dom';
import ItemCard from './ItemCard';
import ItemDetail from './ItemDetail'
function ItemListContainer({greeting, items}) {

    const {id} = useParams();
    const location = useLocation();

    let filteredItems = items;

    
    if(location.pathname.includes('/category/')){
        filteredItems = items.filter((item) => 
            item.categoria == id
        ) 
    }


    const listItems = filteredItems.map((item) =>
        <div className='item'>
            <ItemCard item={item} key={item.id}></ItemCard>
        </div>
    );
    
    const item = items.find((item) => 
        item.id == id
    );

    
    if(!location.pathname.includes('/item/')){
        return (
            <div>   
                <h1 className='greeting'>{greeting}</h1>
                <div className='itemContainer'>
                    {listItems} 
                </div>
            </div>
        );    
    } else {
        return (
            <div>   
                <ItemDetail item={item}></ItemDetail>
            </div>
        );    
    }
}

export default ItemListContainer;