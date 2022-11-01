import React from 'react'
import Item from './Item'

export default function ItemList(props) {
  return (
    <>
      {
        props.data.map(item => <Item key={item.id} datos={item}/> )
      }
    </>
  )
}