import React from 'react'

export default function Item() {
  
  return (
    <>
      {/* aca van los detalles de los productos */}

      <div className='container bg-light border-2  p-3'>
        <div className='row'>
          <div className='col-6  border-start border-primary'>
             SOY LA IMAGEN DEL PRODUCTO. ESTE ES EL SALUDO 
            {/* <img className='' src={props.imagen}/> */}
          </div>
          <div className='col-6 border-start border-primary'>
             SOY LOS DETALLES DEL PRODUCTO
            {/* descripcion del producto: id - titulo - detalles - stock */}
          </div>
        </div>
      </div>
    </>
  )
}
