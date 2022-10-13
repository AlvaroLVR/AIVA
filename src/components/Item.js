import React from 'react'

export default function Item(props) {
  
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
            <h2>Title</h2>
            <span className='fs-5'>Categoria</span>
            <ul className=''>
              <li className='list-group-item'>Descripcion: </li>
              <li className='list-group-item fs-3'><b>Precio </b></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
