'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

//component function
export default function LogoutButton({}) {
  
  const router = useRouter()

  const handleLogout = async () => {
    const supabase = createClientComponentClient()
    const {  data , error } = await supabase.auth.signOut()

    if(!error){ 
      router.refresh();
      router.push('/login') 
    }
    if(error){ console.log('logOut error: ', error)}
  }
  
  return (
      <span  className="" onClick={handleLogout} >Log-Out</span>
  )
}
