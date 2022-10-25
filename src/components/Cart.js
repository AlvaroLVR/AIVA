import React, { useContext } from 'react'
import { cartContext } from '../context/CartContext'
import Item from './Item'

export default function Cart() {
  const {carList,cantidad} = useContext(cartContext)
  console.log(carList.prod,'estas en CART',cantidad);

  return (
    <div className='d-flex flex-column rounded-2 bg-light m-4'>
      <h1 className='text-center mt-4'>carrito</h1>
      {
        <Item key={carList.prod.id} datos={carList.prod}/>
      }
    </div>
  )
}
