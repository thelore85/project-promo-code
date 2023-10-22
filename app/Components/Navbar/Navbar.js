
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

//components
import NavbarLogOut from './NavbarLogOut'
import NavbarLogIn from './NavbarLogIn'


export default async function Navbar() {

  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.auth.getSession()

  return (
    
      <div className="">

         { data?.session?.user.email ? //check user session from supabase
          (<NavbarLogIn session={data.session}/>): 
          (<NavbarLogOut />)
         }

      </div>
  )
}
