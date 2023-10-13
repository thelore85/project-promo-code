import Navbar from './Navbar'
import './auth.css'

export default function authLayout({children}) {
  return (
      <>
      <Navbar />
      {children}
      </>
  )
}