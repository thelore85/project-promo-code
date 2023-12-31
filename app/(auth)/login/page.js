'use client'
import { useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'


//components
import FormAuth from '@/app/(auth)/Components/FormAuth.js'
import { useRouter } from 'next/navigation'



//page function
export default function Login({ session }) {

  const [errorLogin, setErrorLogin] = useState('')
  const router = useRouter()

  const handleSubmit = async ( e, email, password ) => {

    e.preventDefault()
    setErrorLogin('')

    const supabase = createClientComponentClient()
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if(error){ setErrorLogin(error.message) }
    if(!error){ 
      router.refresh();
      router.push(`/dashboard/users/${data.user.id}`) 
    }
  }

  return (
    <section className="dark-bg w-100 h-75 py-3 d-flex justify-content-center align-items-center">
      <div className="container" style={{'maxWidth':'500px'}}>

      <FormAuth title = 'Log in' handleSubmit= {handleSubmit} />
      { errorLogin && <div className="p-2 bg-danger-subtle text-danger">{ errorLogin }</div>}    

      </div>
    </section>
  )
}
