'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useState } from 'react';
import { useRouter } from 'next/navigation'

//componentes
import FormAuth from '@/app/(auth)/Components/FormAuth.js'

//page function
export default function SignUp() {

  const [formError, setFormError] = useState('') //manage form error
  const router = useRouter();


  ////////////////////////////////////////
  // submit new user to DB
  const handleSubmit = async ( e, email, password ) => {
    e.preventDefault() //don't reload the page

    const supabase = createClientComponentClient() //call the database API
    const {error, data } = await supabase.auth
    .signUp({
      email,
      password,
      option:{
        emailRedirectTo: `${location.origin}/api/auth/callback`
      }
    })

    if(error){ setFormError(error.message); console.log(error.message)}
    if(!error){ router.push('/verify') }
  }

  //////////////////////////////////////
  // Page html output
  return (
    <section className="dark-bg w-100 h-75 py-3 d-flex justify-content-center align-items-center">
      <div className="container" style={{'maxWidth':'500px'}}>

      <FormAuth title = 'Crea un account'  handleSubmit= {handleSubmit} />
      { formError && <div className="fs-6 p-3 mt-2 rounded bg-danger-subtle text-danger" >{formError}</div> }

      </div>
    </section>
  )
}
