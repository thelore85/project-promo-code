import './legals.css'
import Navbar from './Navbar'

export default function legalLayout({children}) {
  return (
      <>
      <Navbar />
      {children}
      </>
  )
}
