import React from 'react'

export default function ItemDetail(props) {

  return (
    <>
      {/* ItemDetail */}

      <div className='bg-light rounded-2 shadow-lg p-4 m-4'>
        <div className='row' >
          <div className='col-md-8  flex-wrap d-flex justify-content-around bg-white'>
            <img className='d-flex align-center' style={{width: '30vw'}} src={props.prod.image} />
          </div>
          <div className='col-md-4  flex-wrap d-flex flex-column justify-content-between '>
            <h2 className='text-center'> <b>{props.prod.title}</b> </h2>
            <ul className=''>
              <li className='list-group-item text-primary'>  Categoria: <i> {props.prod.category}  </i> </li>
              <li className='list-group-item fs-5 '>Descripcion <br/> {props.prod.description}</li>
            </ul>
            <div className='text-end fs-2 rounded-1 '><b className='bg-success text-white p-2 rounded-1'>Precio $ {props.prod.price}  </b></div>
          </div>
        </div>
      </div>
    </>
  )
}
