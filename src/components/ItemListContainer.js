import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Item from './Item'

export default function ItemListContainer() {

  /* setar el estado del objeto que se envia a ItemList */
  const [data, setData] = useState([])

  /* llamar a la API y a la function que setea el estado de data */
  useEffect(()=>{
    /* fetch('https://jsonplaceholder.typicode.com/users') */
    fetch('https://fakestoreapi.com/products')
    .then((res) => res.json() )
    .then((datos)=> setData(datos) )
  },[])

  return (
    <div className='container d-flex flex-column align-items-center mt-4' >
      <h2>Productos</h2>
      {/* aca va el MAP */} 
      <ul className='d-flex flex-wrap justify-content-between'>
        {
          data.map(item => <Item key={item.id} datos={item}/> ) 
        }
      </ul>
    </div>
  )
}