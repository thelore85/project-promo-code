'use client'

import React, {useState} from 'react';
import './Form.css'

/////////////////////////////////////////
// ------ my app - SERVER CONNECTION
////////////////////////////////////////

export let serverUrl;
const serverPort = 9000;  // use the same port of the server
const serverPath = '/project-promo-code' // place here your project path
const serverAdress = 'https://server-piqus.vercel.app';
const serverLive = `${serverAdress}${serverPath}`;
const serverLocal = `http://localhost:${serverPort}${serverPath}`


// server url builder
const  appEnv = process.env.NODE_ENV || 'development';

const serverUrlbuilder = () => {
  if(appEnv === 'development' ){
    serverUrl = serverLocal
  }else{
    serverUrl = serverLive
  }
};
serverUrlbuilder();



/////////////////////////////////////////
//// COMPONENT FUNCTION

export default function Form() {

// set use interactivity variables
 const [email, setEmail] = useState('')
 const [firstname, setFirstname] = useState('')
 const [leadStatus, setLeadStatus] = useState('pending')


 // send data to server
const addLead = () => {

  if(email !== '' && firstname !== ''){
    fetch(`${serverUrl}/new-lead`, {
      method: 'post',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({
        firstname: firstname ,
        email: email,
        promo_code: 'TEST0',
        company: 'Piqus'
      })
    })
    .then(res => res.json())
    .then(res => {  
      console.log(res)
    
      if(res.error) { 
        setLeadStatus(false)
      }else{ 
        setLeadStatus(true)
        sendPromoEmail();
      }
    
    })
  } else { setLeadStatus(false) }
};

const sendPromoEmail = () => {

  fetch(`${serverUrl}/email-code`, {
    method: 'post',
    headers: {'Content-Type' : 'application/json'},
    body: JSON.stringify({
      firstname: firstname ,
      email: email,
      promo_code: 'TEST0',
      company: 'Piqus'
    })
  })
  .then(res => res.json())
  .then(res => {  console.log('email server resp: ', res) })
}

const hideEl = () => {
  setLeadStatus('pending')
}


  return (

    <section id="form">
      <div className="form-wrapper">

        <div className="info-container">
          <h3>save the date</h3>
          <div className="divider"></div>
          <p className="info date-info">15 ottobre - 19.00 till night</p>
          <p className="info location-info">Milano - Via Losanna 16</p>
        </div>

        <div className="form-card">
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="email" onChange={e => setEmail( e.target.value) } placeholder="name@example.com" />
            <label htmlFor="email">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="name" onChange={e => setFirstname( e.target.value) } placeholder="You first name" />
            <label htmlFor="name">Name</label>
          </div>
          <button className="w-100 btn btn-lg btn-black" onClick={addLead} >GET A GIFT</button>
          <hr className="my-4" />
          <p className="form-legal-line">Sottoscrivendo il form accetti termini e condizioni presenti nella nota in fondo alla pagina.</p>

              
          {
            leadStatus === 'pending' ? null : ( !leadStatus ? (
              <div className="fixed-bottom w-md-25  m-5 alert alert-danger alert-dismissible fade show mt-3 " role="alert" onClick={hideEl}>
                <strong>Controlla i dati</strong> <p>Usa un&#39;altra email o ricontrolla i dati inseriti.</p>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
              ) : (
                <div className="fixed-bottom w-md-25 m-5 alert alert-success alert-dismissible fade show mt-3 " role="alert" onClick={hideEl}>
                  <strong>Apli la tua Email</strong> <p>Troverai il codice sconto</p>
                  <button type="button" className="btn-close " data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
              ))
          }

        </div>


      </div>
    </section>
  )
}
