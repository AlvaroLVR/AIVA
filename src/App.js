import React from 'react'
import {NavBar} from './components/NavBar'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'
import CartContainer from './components/CartContainer';
import { ToastContainer } from 'react-toastify';
import CartContextProvider from './context/CartContext';
import Error404 from './components/Error404';
import CategoriaContainer from './components/CategoriaContainer';
import FinishBuying from './components/FinishBuying';
import Footer from './components/Footer';

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
            <Route path='/FinishBuy' element={<FinishBuying/>}/>

            <Route path='*' element={<Error404/>}/>
            <Route path='*' element={ <Navigate to='/Error404' />} /> 
          </Routes>
          <Footer/>
        </BrowserRouter>
        <ToastContainer />
      </CartContextProvider>
    </>
       
  );
}

export default App;