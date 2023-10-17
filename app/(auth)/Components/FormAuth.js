'use client'

import React, { useState } from 'react';

export default function Register({ title, handleSubmit }){
    
  const [email, setEmail ] = useState('');
  const [password, setPassword ] = useState('');
   
  return (
        <form className="bg-white p-3 rounded" onSubmit={(e) => handleSubmit(e, email, password) }>

          <h2 className="fs-1 text-center">{title}</h2>

          <div className="form-floating mb-3">
            <input type="email" required className="form-control" id="floatingEmail" placeholder="name@example.com" onChange={(e)=>{ setEmail(e.target.value)}} value={email}/>
            <label htmlFor="floatingEmail">Email address</label>
          </div>

          <div className="form-floating mb-3">
            <input type="password" required className="form-control" id="floatingPassword" placeholder="Password" onChange={(e)=>{ setPassword(e.target.value)}} value={password}/>
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button className="btn btn-primary w-100 py-2" >Invia</button>

          <p className="mt-5 mb-3 text-black-50 fst-italic" style={{ 'fontSize' : '11px'}} >Cliccando 'invia' accetti i termini e condizionio e la informatica pricacy presente a margine del sito. Per maggiori informazioni visita la sezione legale di piqus.it</p>

        </form>
  )
}
