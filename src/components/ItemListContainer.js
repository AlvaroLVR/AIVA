import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import ItemList from './ItemList'

export default function ItemListContainer() {

  /* setar el estado del objeto que se envia a ItemList */
  const [data, setData] = useState([])

  /* llamar a la API y a la function que setea el estado de data */
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json() )
    .then((datos)=> setData(datos) )

  },[])

  return (
    <div className='d-flex flex-column align-items-center mt-4' >
      <h2>Productos</h2>
      {/* aca va el MAP */} 
      <ul className='d-flex flex-row flex-wrap'>
        {
          data.map(item => <ItemList key={item.id} datos={item}/> ) 
        }
      </ul>
    </div>
  )
}