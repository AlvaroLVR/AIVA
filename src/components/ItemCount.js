import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function ItemCount() {
  const [itemAdd,setItemAdd] = useState(0)

  return (
    <div className='d-flex flex-row justify-content-center align-items-baseline ' >
        <Link className='btn bg-success text-white mx-2 ' >+</Link>
        <Link className='btn bg-success text-white mx-2 ' >-</Link>
        <p className='bg-light rounded-2 p-2'> <b>{itemAdd}</b></p>
    </div>
  )
}