import React from 'react'
import carrito from '../img/iconoCarrito.svg'

export default function CartWidget() {
  return (
    <img style={{height: '25px'}} className='header-carrito' src={carrito} />
  )
}