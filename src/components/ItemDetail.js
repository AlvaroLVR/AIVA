import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

export default function ItemDetail(props) {

  return (
    <>
      {/* ItemDetail */}

      <div className='bg-white rounded-2 shadow-lg p-4 m-4' >
        <div className='row'  >
          <div className='col-md-8 flex-wrap d-flex justify-content-around bg-white'>
            <img className='d-flex align-center' style={{width: '30vw',height: '70vh' }} src={props.prod.image} />
          </div>
          <div className='col-md-4  flex-wrap d-flex flex-column justify-content-between mt-2 '>
            <h2 className='text-center'> <b>{props.prod.title}</b> </h2>
            <div className='text-center fs-3 rounded-1 '>
              <b className='bg-success text-white p-2 rounded-1'>Precio $ {props.prod.price}  </b>
            </div>
            <ul className='mt-4'>
              <li className='list-group-item text-primary'>  Categoria: <i> {props.prod.category}  </i> </li>
              <li className='list-group-item fs-6 '>Descripcion <br/> {props.prod.description}</li>
            </ul>
            <ItemCount/>
            <Link to={`/carrito/${props.prod.id}`} className='btn bg-black text-white fs-5'>agregar al carrito </Link>
          </div>
        </div>
      </div>
    </>
  )
}
