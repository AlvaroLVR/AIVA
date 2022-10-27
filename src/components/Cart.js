import React, { useContext } from 'react'
import {useCartContext} from '../context/CartContext'
import Item from './Item'

export default function Cart() {
  const {carList} = useCartContext()
  
  console.log(carList,'estas en CART');

  return (
    <div className='d-flex flex-row rounded-2 bg-light m-4'>
      {/* agregar una tabla con los productos agregados al carrito.
        - quitar producto
        - lista de contacto: Email - verificacion de Email, Telefono. */}
      
      {
        carList.map (prod => <Item key={prod.id} datos={prod}/>)
      }
    </div>
  )
}
