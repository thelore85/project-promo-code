import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/navigation'

// components
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Link from 'next/link'

export default async function layout({children}) {

    //protect the page from non logged-in users
    const supabase = createServerComponentClient({ cookies })
    const { data } = await supabase.auth.getSession()
  
    if(!data.session){ redirect('/') }

  return (
    <>
      <Navbar/>
      <div className="min-vh-100 row">
        <div className="col-2 p-4 min-vh-100 bg-secondary-subtle">
          <p className="fs-4 fw-bolder">Ticket options</p>
          <Link className=" d-block" href="/tickets">All tickets</Link>
          <Link className=" d-block" href="/tickets/create">Create tickets</Link>
        </div>

        <div className="col-10 px-5 py-4">
          {children}
        </div>
      </div>
      <Footer/>
    </>
  )
}
