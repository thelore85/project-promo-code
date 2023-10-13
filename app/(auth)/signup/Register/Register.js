'use client'

import React, { useState } from 'react'
import './Register.css'
import { Love_Light } from 'next/font/google';


export default function Register(){
    
  const [projectName, setProjectName ] = useState('');
  const [userName, setUserName ] = useState('');
  const [userLastName, setUserLastName ] = useState('');
  const [email, setEmail ] = useState('');
  const [phoneNumber, setPhoneNumber ] = useState('');
  const [password, setPassword ] = useState('');
  const [error, setError] = useState(null);
 

  //send user data to the server
  const createUser = async () => {

    try{

      const requestData = { 
        projectName: projectName,
        userName : userName,
        userLastName : userLastName,
        email: email,
        password : password,
        phoneNumber : phoneNumber,
      }

      const response = await fetch('/api/registration', {
        method: 'post',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(requestData)
      })

      if(response.ok){
        console.log(response)
      } else {
        throw new Error({error: 'the registration did end up well'})
      }
    }catch (error){
        console.log(error)
        setError("si è verificato un errore. Riprova con un'altra mail")
    }
  }
  
  
  return (
      <section id="register">
        <form className="form">
            <h1 className="h3 mb-3 fw-normal">Crea un account</h1>

            <div className="form-floating">
              <input type="text" className="form-control mb-3" id="floatingBrand" placeholder="es: Nome Società, Il Mio Brand" onChange={(e)=>{ setProjectName(e.target.value)}}/>
              <label htmlFor="floatingBrand">Nome Brand, Società o Progetto</label>
            </div>

            <div className="form-floating">
              <input type="text" className="form-control mb-3" id="floatingName" placeholder="Il tuo nome" onChange={(e)=>{ setUserName(e.target.value)}}/>
              <label htmlFor="floatingName">Nome</label>
            </div>

            <div className="form-floating">
              <input type="text" className="form-control mb-3" id="floatingLastName" placeholder="Il tuo cognome" onChange={(e)=>{ setUserLastName(e.target.value)}}/>
              <label htmlFor="floatingLastName">Cognome</label>
            </div>

            <div className="form-floating">
              <input type="email" className="form-control mb-3" id="floatingEmail" placeholder="name@example.com" onChange={(e)=>{ setEmail(e.target.value)}}/>
              <label htmlFor="floatingEmail">Email address</label>
            </div>

            <div className="form-floating">
              <input type="text" className="form-control mb-3" id="floatingNumber" placeholder="393 1234567" onChange={(e)=>{ setPhoneNumber(e.target.value)}}/>
              <label htmlFor="floatingNumber">Numero</label>
            </div>

            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e)=>{ setPassword(e.target.value)}}/>
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="form-check text-start my-3">
              <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Remember me
              </label>
            </div>
            <span className="btn btn-primary w-100 py-2" onClick={createUser} >Registrati</span>
            <p className="mt-5 mb-3 text-body-secondary">©2023</p>
          </form>
      </section>
  )
}
