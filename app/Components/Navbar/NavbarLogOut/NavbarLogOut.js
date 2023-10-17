
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'


export default async function NavbarLogOut() {

  return (

          <div className="w-100 d-flex align-items-center">

            <div className="me-auto">
              <Link href="/" className="me-3 text-white d-flex align-items-center">
                <FontAwesomeIcon icon={faLaptopCode} className="logo text-light fs-1 me-3"/>
                <span className="bg-white text-black p-2 fw-bolder me-4">PIQUS LEAD //</span> 
              </Link>
            </div>

            <div className="me-auto fw-light">
              <Link href="/" className="me-3 text-white">Services</Link>
              <Link href="/" className="me-3 text-white">Pricing</Link>
              <Link href="/" className="me-3 text-white">About</Link>
              <Link href="/terms" className="me-3 text-white">Legal</Link>
            </div>

            <div className="">
            <Link href="/login" className="me-3 text-white fw-light">Log in</Link>
            <Link href="/signup" className="me-3 text-black fw-bold bg-white p-2 rounded">Registrati</Link>
            </div>

        </div>  
  )
}
