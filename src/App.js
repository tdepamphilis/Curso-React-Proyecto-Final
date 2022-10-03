import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/ItemListContainer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<ItemListContainer greeting={'Bienvenido a Bit-Store.'} />}/>
          <Route exact path="/b" element={<ItemListContainer greeting={'Bienvenido a Bit-Store.'} />}/>
        </Routes>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
