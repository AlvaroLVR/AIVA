import React from 'react'
import {NavBar} from './components/NavBar'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './components/ItemDetail';
import NotFound404 from './components/helpers/NotFound404';
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>   
        <Routes>
          <Route path='/'  element={<ItemListContainer />} />
          <Route path='/detalles' element={<ItemDetail/>}/>
          <Route path='/detalles/:id' element={<ItemDetailContainer />} /> 
          <Route path='/carrito' element={<Cart/>}/>
          <Route path='*' element={<NotFound404/>}/>

          <Route path='*' element={ <Navigate to='/NotFound404' />} /> 
        </Routes>
      </BrowserRouter>
    </>
       
  );
}

export default App;