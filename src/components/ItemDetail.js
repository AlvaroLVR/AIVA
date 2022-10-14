import React from 'react'

export default function ItemDetail(props) {

  return (
    <>
      {/* ItemDetail */}

      <div className=' bg-light border-2  p-3 mt-4'>
        <div className='row'>
          <div className='col-6  border-start border-dark d-flex justify-content-around'>
            {/* <img className='' src={props.imagen}/> */}
            <img className='d-flex align-center' style={{width: '25vw'}} src={props.prod.image} />
          </div>
          <div className='col-6 border-start border-dark d-flex flex-column justify-content-between '>
            <h2 className='text-center'>{props.prod.title}</h2>
            <ul className=''>
              <li className='list-group-item'> <i> Categoria {props.prod.category}  </i> </li>
              <li className='list-group-item fs-4 border rounded-1 p-2 bg-'>Descripcion: {props.prod.description}</li>
            </ul>
            <span className='text-end fs-2'><b>Precio $ {props.prod.price}  </b></span>
          </div>
        </div>
      </div>
    </>
  )
}
