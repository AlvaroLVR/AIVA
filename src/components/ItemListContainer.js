import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import ItemList from './ItemList';
import Loading from './Loading';
import {collection,getDocs,getFirestore} from 'firebase/firestore'

export default function ItemListContainer() {
  /* setar el estado del objeto que se envia a ItemList */
  const [data, setData] = useState([])
  const [load,setLoading] = useState(true)

  useEffect(()=>{
    const db = getFirestore()
    const queryCollection = collection(db,'products')
    getDocs(queryCollection)
    .then(res => setData(res.docs.map(res => ({id: res.id,...res.data()}))))
    .finally(()=>setLoading(false))
  },[])

  return (
    <div className='container d-flex flex-column bg-white' >
      { load ? 
        <Loading/> 
      : 
        <>
          <h2 className='text-start mt-3'>Nuestros Productos</h2>      
          <ul className='d-flex flex-wrap justify-content-around' style={{padding: '0'}}>
            <ItemList data={data}/>
          </ul>
        </>   
      }
    </div>
  )
}