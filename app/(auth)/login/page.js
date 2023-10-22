'use client'
import { useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'



//components
import FormAuth from '@/app/(auth)/Components/FormAuth.js'
import { useRouter } from 'next/navigation'



//page function
export default function Login({ session }) {

  console.log('login: ', session)

  const formTitle = "Accedi"
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

    if(data){console.log('debugging login: ', data)}

    if(error){ setErrorLogin(error.message) }
    if(!error){ 
      router.refresh();
      router.push(`/dashboard/users/${data.user.id}`) 
    }
  }

  return (
    <section className="w-100 h-75 py-3 d-flex justify-content-center align-items-center">
      <div className="container" style={{'maxWidth':'500px'}}>

      <FormAuth title = {formTitle} handleSubmit= {handleSubmit} />
      { errorLogin && <div className="p-2 bg-danger-subtle text-danger">{ errorLogin }</div>}    

      </div>
    </section>
  )
}
