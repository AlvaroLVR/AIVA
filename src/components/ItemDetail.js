import React from 'react'
import ItemCount from './ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
import carrito from '../img/iconoCarrito.svg'
import compra from '../img/bag-svgrepo-com.svg'

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
          <div className='col-md-6 bg-white d-flex justify-content-center' style={{maxHeight: '35vw'}}>
            <img id='card-img' style={{height: '35vw',maxWidth: '35vw'}} src={props.prod.image} alt='' />
          </div>
          <div className='col-md-6 d-flex flex-column justify-content-between  bg-light p-1 rounded-2' >
            <h2 className='text-center'> <b>{props.prod.title}</b> </h2>
            <div className='text-center fs-4 rounded-1 '>
              <b className='bg-success text-white p-2 rounded-1'>Precio $ {props.prod.price}  </b>
            </div>
            <ul className='mt-2'>
              <li className='list-group-item text-primary'>  Categoria: <i> {props.prod.category}  </i> </li>
              <li className='list-group-item' >Descripcion <br/> {props.prod.description}</li>
            </ul>
            {isCount ? 
              <ItemCount onAdd={onAdd} prod={props.prod} /> 
            :
            <div className='mx-2'>
              <Link to='/carrito' className='btn bg-black text-white fs-5 d-flex justify-content-center mb-2' style={{alignItems: 'align-self !important'}} > Ir al carrito <img className='d-flex align-end ms-2' src={carrito} alt='' style={{height:'24px'}} /> </Link> 
              <Link to='/'  className='btn text-white fs-5 d-flex justify-content-center bg-success shadow-lg' >Seguir comprando <img className='ms-2' src={compra} alt='' style={{height:'24px'}} /></Link> 
            </div>
            }
            
          </div>
        </div>
      </div>
    </>
  )
}