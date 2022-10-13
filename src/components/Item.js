import React from 'react'
import { useParams } from 'react-router-dom'

export default function Item(props) {
  const {id} = useParams()

  console.log(props);
  return (
    <>
      {/* aca van los detalles de los productos */}

      <div className='container bg-light border-2  p-3 mt-4'>
        <div className='row'>
          <div className='col-6  border-start border-primary'>
            {/* <img className='' src={props.imagen}/> */}
            <img src={props.image} />
          </div>
          <div className='col-6 border-start border-primary'>
            <h2>{props.title}</h2>
            <span className='fs-5'>Categoria {props.category}</span>
            <ul className=''>
              <li className='list-group-item'>Descripcion: {props.description} </li>
              <li className='list-group-item fs-3'><b>Precio {props.price} </b></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
