import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import { useState } from 'react'
import { toast } from 'react-toastify'

export default function ItemDetail(props) {
  const [opciones,setOpciones] = useState(true)
  const [notificacion, setNotificacion] = useState(false)

  const notify = () => toast.success('se agrego al carrito!', {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: "dark",
  });

  function seteoAgregar(opciones,notificacion,prod){
    opciones ? setOpciones(false) : setOpciones(true)
    notificacion ? notify() : setNotificacion(false)

  }
  

  return (
    <>
      {/* ItemDetail */}

      <div className='bg-white rounded-2 shadow-lg p-4 m-3 bg-light' >
        <div className='row'  >
          <div className='col-md-8 flex-wrap d-flex justify-content-around bg-white'>
            <img id='card-img' className='d-flex align-center' style={{height: '35vw',width: '35vw'}} src={props.prod.image} />
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

            <ItemCount />
            {
              opciones ? 
              <button className='btn bg-black text-white fs-5 d-flex justify-content-center' onClick={()=>{seteoAgregar(true,true,props.prod)}}>agregar al carrito </button> 
              :
              <Link to='/'  className='btn text-white fs-5 d-flex justify-content-center bg-success shadow-lg' >seguir comprando</Link>
            }
      
          </div>
        </div>
      </div>
    </>
  )
}
