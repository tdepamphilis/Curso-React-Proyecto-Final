import './App.css';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import API from './API'
import { useEffect, useState } from 'react';
function App() {

  const {id} = useParams();
  
  

  const [categorias, setcategorias] = useState([])
  const [items, setitems] = useState([])
  

  let message = 'Bienvenido a Bit-Store.';


  useEffect(() => {
    return () => {
      API.getCategorias().then( res => { setcategorias(res); })
      API.getItems().then(res  => {setitems(res)})
    }
  },[])
  

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar categorias={categorias}/>

        <Routes>
          <Route exact path="/" element={<ItemListContainer greeting={message} items={items}/>}/>
          <Route exact path="/category/:id" element={<ItemListContainer greeting={message} items={items}/>}/>
          <Route exact path="/item/:id" element={<ItemListContainer greeting={'detalle de un item'} items={items}/>}/>
        </Routes>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
