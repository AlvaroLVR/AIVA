import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Item from './Item'

export default function CategoriaContainer () {
  const category = useParams()
  /* setar el estado del objeto que se envia a ItemList */
  const [data, setData] = useState([])

  /* llamar a la API y a la function que setea el estado de data */
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then((res) => res.json() )
    .then((datos)=> setData(datos.filter( prod => prod.category ==  category.id )) )
  },[category])
  
  return (
    <div className='container'>
      <h1 className='my-2 text-uppercase border-bottom border-2 border-secondary text-center'>{category.id}</h1>
      <div className='container'>
        <div className='d-flex flex-row flex-wrap'>
          {
            data.map(item => <Item key={item.id} datos={item}/> )
          }
        </div>
      </div>
    </div>
  )
}
