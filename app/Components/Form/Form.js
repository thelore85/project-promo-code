'use client'

import React, {useState} from 'react';


export default function Form() {

// set use interactivity variables
 const [email, setEmail] = useState('')
 const [firstname, setFirstname] = useState('')

 // send data to server
const addLead = () => {
  fetch('http://localhost:9000/project-promo-code/new-lead',   {
    method: 'post',
    headers: {'Content-Type' : 'application/json'},
    body: JSON.stringify({
      firstname: firstname ,
      email: email,
      promo_code: 'TEST0'
    })
  })
  .then(res => res.json())
  .then(res => console.log(res))
};


  return (

    <section id="form" className="py-5">
      <div className="container">

        <div className="row justify-content-center align-items-center g-lg-5 py-5 mx-auto">

          <div className="col-md-5 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Vertically centered hero sign-up form</h1>
            <p className="col-lg-10 fs-8">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
          </div>

          {/* form  */}
          <div className="col-md-4">

            <div className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="email" onChange={e => setEmail( e.target.value) } onClick={console.log(email)} placeholder="name@example.com" />
                <label htmlFor="email">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="name" onChange={e => setFirstname( e.target.value) } onClick={console.log(firstname)} placeholder="You first name" />
                <label htmlFor="name">Name</label>
              </div>
              <button className="w-100 btn btn-lg btn-primary" onClick={addLead} >Get Code</button>
              <hr className="my-4" />
              <small className="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
            </div>

          </div>

  

        </div>

      </div>
    </section>
  )
}
