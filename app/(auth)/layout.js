import Footer from '@/app/Components/Footer/Footer' //globalFooter
import Navbar from '@/app/(auth)/Components/Navbar.js'


export default function authLayout({children}) {
  return (
      <>
        <Navbar />
          {children}
        <Footer />
      </>
  )
}