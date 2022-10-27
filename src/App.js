import React from 'react'
import {NavBar} from './components/NavBar'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import NotFound404 from './components/helpers/NotFound404';
import ItemDetailContainer from './components/ItemDetailContainer'
import CartContainer from './components/CartContainer';
import { ToastContainer, toast } from 'react-toastify';
import CategoriaContainer from './components/CategoriaContainer'
import CartContextProvider from './context/CartContext';


function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>   
          <Routes>
            <Route path='/'  element={<ItemListContainer />} />
            <Route path='/detalles/:id' element={<ItemDetailContainer />} /> 
            <Route path='/carrito' element={<CartContainer/>}/>
            <Route path='/categoria/:id' element={<CategoriaContainer/>}/>


            <Route path='*' element={<NotFound404/>}/>
            <Route path='*' element={ <Navigate to='/NotFound404' />} /> 
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </CartContextProvider>
    </>
       
  );
}

export default App;