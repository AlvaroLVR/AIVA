import React from 'react'
import ItemCount from './ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'

export default function ItemDetail(props) {
  const {addCart,cantProd} = useCartContext()
  const [isCount,setIsCount] = useState(true)

  const onAdd = (cantidad) => {
    addCart( { ...props.prod, cantidad } )
    setIsCount(false)
  }
  return (
    <>
      {/* ItemDetail */}

      <div className='bg-white rounded-2 shadow-lg p-4 m-3 bg-light' >
        <div className='row'  >
          <div className='col-md-8 bg-white d-flex justify-content-center' style={{height: '35vw'}}>
            <img id='card-img' style={{height: '35vw',width: '35vw'}} src={props.prod.image} alt='' />
          </div>
          <div className='col-md-4 d-flex flex-column justify-content-between  bg-light p-2 rounded-2' >
            <h2 className='text-center'> <b>{props.prod.title}</b> </h2>
            <div className='text-center fs-3 rounded-1 '>
              <b className='bg-success text-white p-2 rounded-1'>Precio $ {props.prod.price}  </b>
            </div>
            <ul className='mt-2'>
              <li className='list-group-item text-primary'>  Categoria: <i> {props.prod.category}  </i> </li>
              <li className='list-group-item fs-6'>Descripcion <br/> {props.prod.description}</li>
            </ul>
            {isCount ? 
              <ItemCount onAdd={onAdd} prod={props.prod} /> 
            :
            <div className='mx-2'>
              <Link to='/carrito' className='btn bg-black text-white fs-5 d-flex justify-content-center mb-2' > Ir al carrito </Link> 
              <Link to='/'  className='btn text-white fs-5 d-flex justify-content-center bg-success shadow-lg' >Seguir comprando</Link> 
            </div>
            }
            
          </div>
        </div>
      </div>
    </>
  )
}