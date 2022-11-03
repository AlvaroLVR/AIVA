import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import ItemDetail from './ItemDetail';
import {doc,getDoc,getFirestore} from 'firebase/firestore'

export default function ItemDetailContainer() {
  /* recibe el id de la URL */
  const {id} = useParams()

  /* setar el estado del objeto que se envia a ItemList */
  const [data, setData] = useState([])

  useEffect(()=>{
    const db = getFirestore()
    const queryDoc = doc(db,'products', id)
    getDoc(queryDoc)
    .then(res => setData({id: res.id ,...res.data()}))
  },[])
    
  return (
    <div className='container' >
      <ItemDetail prod={data}/>
    </div>
  )
}