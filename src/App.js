import React from 'react'
import {NavBar} from './components/NavBar'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import Item from './components/Item';
import NotFound404 from './components/helpers/NotFound404';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>   
        <Routes>
          <Route path='/'  element={<ItemListContainer />} />
          <Route path='/detalles' element={<Item/>}/>
          <Route path='/detalles/:id' element={<Item />} /> 
          {/* <Route path='/categoria/gorras' element={<ItemListContainer greeting={'Hello World'} titulo='ItemListContainer de app' />} />    
          <Route path='/categoria/pantalones' element={<ItemListContainer greeting={'Hello World'} titulo='ItemListContainer de app' />} />     */}
          <Route path='*' element={<NotFound404/>}/>


          <Route path='*' element={ <Navigate to='/NotFound404' />} /> 
        </Routes>
      </BrowserRouter>
    </>
       
  );
}

export default App;