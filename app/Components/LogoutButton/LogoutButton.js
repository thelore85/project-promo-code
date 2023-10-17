'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import React from 'react'

//component function
export default function LogoutButton({ textButton, user }) {
  
  const router = useRouter()

  const handleLogout = async () => {
    const supabase = createClientComponentClient()
    const { error } = await supabase.auth.signOut()

    if(!error){ router.push('/login') }
    if(error){ console.log('logOut error: ', error)}
  }
  
  return (
    <div className=" d-flex align-items-center">
      <div className="me-3 fw-lighter">{user}</div>
      <div className=" d-inline me-2 p-2 bg-secondary text-white rounded" onClick={handleLogout} >{textButton}</div>
    </div>
  )
}
