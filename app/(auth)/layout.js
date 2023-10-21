

//components
import Footer from '@/app/Components/Footer/Footer' //globalFooter
import Navbar from '../Components/Navbar/Navbar'

// layout function
export default async function authLayout({children}) {

  return (
      <>
        <Navbar />
        {children}
        <Footer />
      </>
  )
}