import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Item from './Item'
import {collection,getDocs,getFirestore, query, where} from 'firebase/firestore'
import Loading from './Loading'

export default function CategoriaContainer () {
  const category = useParams()
  const [loading,setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(()=>{
    const db = getFirestore()
    const queryCollection = collection(db,'products')
    const queryFilter = query(queryCollection, where('category','==',category.id))
    getDocs(queryFilter)
    .then(res => setData(res.docs.map(res => ({id: res.id,...res.data()}))))
    .finally(()=>setLoading(false))
  },[category])

  return (
    <div className='container' style={{maxHeight: 'auto',display: 'inline'}}>
      {loading ? 
        <Loading/>
        :
        <>
          <h1 className='my-2 text-uppercase text-center'>{category.id}</h1>
          <div className='container'>
            <div className='d-flex flex-row flex-wrap'>
              {
                data.map(item => <Item key={item.id} datos={item}/> )
              }
            </div>
          </div>
        </>
      }
    </div>
  )
}
