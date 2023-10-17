import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/navigation'

//components
import Footer from '@/app/Components/Footer/Footer' //globalFooter
import Navbar from '../Components/Navbar/Navbar'

// layout function
export default async function authLayout({children}) {

    //protect the page from logged users
    const supabase = createServerComponentClient({ cookies })
    const { data } = await supabase.auth.getSession()
  
    if(data.session){ // redirect logged users
      redirect('/dashboard')
    }
  
  return (
      <>
        <Navbar />
        {children}
        <Footer />
      </>
  )
}