import React from 'react'
import {NavBar} from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import Item from './components/Item';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>   
        <Routes>
          <Route path='/'  element={<ItemListContainer />} />
          <Route path='/categoria/:idCategoria' element={<ItemListContainer />} /> 
          {/* <Route path='/categoria/gorras' element={<ItemListContainer greeting={'Hello World'} titulo='ItemListContainer de app' />} />    
          <Route path='/categoria/pantalones' element={<ItemListContainer greeting={'Hello World'} titulo='ItemListContainer de app' />} />     */}
          <Route path='/detalles' element={<Item/>}/>
        </Routes>
      </BrowserRouter>
    </>
       
  );
}

export default App;