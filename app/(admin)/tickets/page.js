import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/navigation'


// components
import TicketsList from './TicketsList'


// page function
export default async function tickets() {

  //protect the page from non logged-in users
  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.auth.getSession()

  if(!data.session){ // send non logged to homepage
    redirect('/')
  }

  return (
    <>

      <main className="">
        <h1 className=" fs-4 bg-black p-2 fw-bold text-white mb-3">ticket page</h1>
        <TicketsList />
      </main>

    </>
  )
}
