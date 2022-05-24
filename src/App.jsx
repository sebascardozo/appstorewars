
import React from 'react';
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import NavBar from './components/NavBar.jsx';
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../src/components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart';
import CartContextProvider from "../src/components/context/CartContext";
import './index.css';


function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer mensaje="Hola, soy ItemListContainer!"/>} />
          <Route path="/category/:id" element = { <ItemListContainer  /> } /> 
          <Route path="//detail/:detailId" element={<ItemDetailContainer/>} />
          <Route path="/cart" element = { <Cart /> } />
          <Route path="/*" element={<Navigate to="/" replace/>} />
        </Routes>
      </div>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;