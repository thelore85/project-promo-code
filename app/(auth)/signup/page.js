'use client'

import FormAuth from '@/app/(auth)/Components/FormAuth.js'

export default function SignUp() {

  const formTitle = "Crea un account"

  const handleSubmit = async ( e, email, password ) => {
    e.preventDefault()
    console.log("registration: ", email, password)
  }

  return (
    <section className="w-100 h-75 py-3 d-flex justify-content-center align-items-center">
      <div className="container" style={{'max-width':'500px'}}>

      <FormAuth 
        title = {formTitle} 
        handleSubmit= {handleSubmit}  
      />        

      </div>
    </section>
  )
}
