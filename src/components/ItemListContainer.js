import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

import ItemList from './ItemList';
import Loading from './Loading';

export default function ItemListContainer() {

  /* setar el estado del objeto que se envia a ItemList */
  const [data, setData] = useState([])
  const [load,setLoading] = useState(true)

  /* llamar a la API y a la function que setea el estado de data */
  useEffect(()=>{
    /* fetch('https://jsonplaceholder.typicode.com/users') */
    fetch('https://fakestoreapi.com/products')
    .then((res) => res.json() )
    .then((datos)=> setData(datos) )
    .finally(()=> {setTimeout(()=> setLoading(false),3000)})
  },[])

  return (
    <div className='container-fluid d-flex flex-column bg-white' >
      { load ? 
        <Loading/> 
      : 
        <>
          <h2 className='text-center mt-4'>Productos</h2>      
          <ul className='d-flex flex-wrap justify-content-center m-1' style={{padding: '0'}}>
          <ItemList data={data}/>
          </ul>
        </>   
      }
    </div>
  )
}