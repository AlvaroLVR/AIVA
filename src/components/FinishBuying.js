import React, { useState } from 'react'
import { useCartContext } from '../context/CartContext'
import {collection, getFirestore,addDoc} from 'firebase/firestore'

export default function FinishBuying() {
  const { carList,precioTotalConIVA, cleanCart} = useCartContext()

  const [formData,setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    telephone: '',
  })

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
    .then(resp => console.log(resp))
    .then(res=> alert('Compra finalizada \n este es tu numero de compra',res.type))
    .catch(err => console.log(err))
    .finally(() => cleanCart())
  }

  const formHandler = (e) =>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  console.log(formData);
  return (
    <div className='container-fluid'>
      <h1 className='text-center'>Estas en finalizar compra</h1>
      <div className='container bg-light m-3 rounded-2' style={{ height: '100vh' }}>
        <div className='row'>
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
                    <input type="text" className="form-control" id="validationCustomUsername"  aria-describedby="inputGroupPrepend" name='email' onBlur={formHandler} required/>
                  </div>
                </div>
                <div className="col-md-6">
                  <label for="validationCustom03" className="form-label" >Telefono</label>
                  <input type="number" className="form-control" id="validationCustom03" placeholder='15 1234 1234' name='telephone'  onBlur={formHandler} required/>
                </div>

                <div className="col-md-12">
                  <button className="btn btn-dark text-white" type="submit" >Finalizar compra</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}