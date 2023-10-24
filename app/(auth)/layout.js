import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/navigation'
export const dynamic = 'force-dynamic'; // force realtime update


//components
import Footer from '@/app/Components/Footer/Footer' //globalFooter
import Navbar from '../Components/Navbar/Navbar'

// layout function
export default async function authLayout({children}) {


const supabase = createServerComponentClient({ cookies })    
const { data } = await supabase.auth.getSession()

if(data.session){ redirect(`/dashboard/users/${data.session.user.id}`) } //protect the page from non logged-in users 


  return (
      <>
        <Navbar />
        {children}
        <Footer />
      </>
  )
}