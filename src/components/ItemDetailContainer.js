import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {
  /* recibe el id de la URL */
  const {id} = useParams()

  /* setar el estado del objeto que se envia a ItemList */
  const [data, setData] = useState([])

  /* llamar a la API y a la function que setea el estado de data */
  useEffect(()=>{
    /* fetch('https://jsonplaceholder.typicode.com/users') */
    fetch('https://fakestoreapi.com/products')
    .then((res) => res.json() )
    .then((datos)=> setData(datos.find( detail => detail.id == id )) )
  },[id])
    
  return (
    <div className='container'>
      <ItemDetail prod={data}/>
    </div>
  )
}