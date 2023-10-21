import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'; // force realtime update

// components
import Footer from '../Components/Footer/Footer'
import NavbarLogIn from '../Components/Navbar/NavbarLogIn'


// layout template
export default async function layout({children}) {

    const supabase = createServerComponentClient({ cookies })     //protect the page from non logged-in users
    const { data } = await supabase.auth.getSession()
  
    if(!data.session){ redirect('/') }

  return (
  
    <div className="">
      <NavbarLogIn />
      <div className=" min-vh-100 container py-5">
        {children}
      </div>
      <Footer/>
    </div>

  )
}
