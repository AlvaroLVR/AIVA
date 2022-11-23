import React, { useState } from 'react'
import { useCartContext } from '../context/CartContext'
import {collection, getFirestore,addDoc} from 'firebase/firestore'
import { Link } from 'react-router-dom'

export default function FinishBuying() {
  const { carList,precioTotalConIVA, cleanCart} = useCartContext()
  const [finishBuy,setFinishBuy] = useState(true)  
  const [formData,setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    telephone: '',
  })

  const emailVerification = () =>{
    document.getElementById('validationEmail').value == document.getElementById('validationEmail1').value ? 
    document.getElementById('validationEmail1').className = 'form-control is-valid'
    :
    document.getElementById('validationEmail1').className = 'form-control is-invalid';

  }

  const emailCheck = () =>{
    document.getElementById('validationEmail').value != document.getElementById('validationEmail1').value ? 
    document.getElementById('validationEmail1').focus() 
    :
    formHandler()
  }

  const generarOrder = (e) =>{
    e.preventDefault()

    const order = {}

    order.buyer = {
      name: formData.name,
      lastName:formData.lastName,
      email:formData.email,
      number: formData.telephone
    }
    
    order.items= carList.map(prod => {
      const {id,title,price,cantidad} = prod
      return {id, title, price,cantidad}
    })

    order.total = precioTotalConIVA()

    const db = getFirestore()
    const orders = collection(db, 'orders')

    addDoc(orders, order) // setDoc(orders, obj, id)
    .then(resp => alert('Compra finalizada \n este es tu numero de compra: ' + resp._key.path.segments[1] ))
    .then(() => setFinishBuy(false))
    .finally(() => cleanCart())
  }

  const formHandler = (e) =>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className='container-fluid'>
      <h1 className='text-center my-2'>Finalizar compra</h1>
      <div className='container bg-light  rounded-2 ' style={{ height: '100vh' }}>
        <div className='row justify-content-center'>
          { finishBuy ? 
            <div className='col-12'>
              <div className='rounded-3 bg-white p-3 m-4 border border-1 border-dark'>
                <form className="row g-3 needs-validation" onSubmit={generarOrder}>
                  <div className="col-md-6">
                    <label for="validationCustom01" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="validationCustom01" name='name'  onBlur={formHandler}  required/>
                  </div>
                  <div className="col-md-6">
                    <label for="validationCustom02" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="validationCustom02"  name='lastName' onBlur={formHandler} required/>

                  </div>

                  <div className="col-md-6">
                    <label for="validationCustomUsername" className="form-label">Email</label>
                    <div className="input-group has-validation">
                      <span className="input-group-text" id="inputGroupPrepend">@</span>
                      <input type="text" className="form-control" id="validationEmail"  aria-describedby="inputGroupPrepend" name='email' pattern='[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}' onBlur={formHandler} required/>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label for="validationCustomUsername" className="form-label">Repetir Email</label>
                    <div className="input-group has-validation ">
                      <span className="input-group-text " id="inputGroupPrepend">@</span>
                      <input type="text" className="form-control " id="validationEmail1"  aria-describedby="inputGroupPrepend" name='email' pattern='[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}'  autoComplete='off' onBlur={emailCheck} onChange={emailVerification}  required/>
                    </div>
                  </div>


                  <div className="col-md-6">
                    <label for="validationCustom03" className="form-label" >Telefono</label>
                    <input type="number" className="form-control" id="validationCustom03" placeholder='15 1234 1234' name='telephone' pattern='[0-9]{10}' onBlur={formHandler} required/>
                  </div>

                  <div className="col-md-12">
                    <button className="btn btn-dark text-white" type="submit" >Finalizar compra</button>
                  </div>
                </form>
              </div>
            </div>
          :
            <div className='col-md-4 d-flex flex-column align-self-center m-3 p-3 rounded-3 bg-white'>
              <p className='text-center fs-4'>Ya realizaste la compra! <br/> {formData.name} Gracias por elegirnos. </p>
              <Link className='btn btn-success fs-4' to={'/'}>Volver al inicio</Link>
            </div>
          }
        </div>
      </div>
    </div>
  )
}