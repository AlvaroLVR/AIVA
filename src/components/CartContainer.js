import React from 'react'
import { useParams } from 'react-router-dom'
import Cart from './Cart'
import { useEffect } from 'react'
import { useState } from 'react'

export default function CartContainer(props) {

  return (
    <div className='container-fluid bg-primary'>
        <h1>CarritoContainer</h1>
        <Cart/>
    </div>
  )
}