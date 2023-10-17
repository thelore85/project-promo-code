
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

//components
import NavbarLogOut from './NavbarLogOut/NavbarLogOut'
import NavbarLogIn from './NavbarLogIn/NavbarLogIn'


export default async function Navbar() {

  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.auth.getSession()

  return (
    <nav className="w-100 p-4 bg-blue ">
      <div className="container">

         { data?.session?.user.email ? //check user session from supabase
          (<NavbarLogIn user={data.session.user.email}/>): 
          (<NavbarLogOut />)
         }

      </div>
    </nav>
  )
}
