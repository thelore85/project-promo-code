import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import NavbarLegal from './NavbarLegal.js'

export default function legalLayout({children}) {
  return (
      <>
      <Navbar />
      <NavbarLegal />
      {children}
      <Footer />
      </>
  )
}
