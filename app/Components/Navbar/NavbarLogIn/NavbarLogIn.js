import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import LogoutButton from '../../LogoutButton/LogoutButton'

export default async function NavbarLogIn({user}) {

  return (
          <>
            <div className="container-fluid w-100 d-flex">   
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
              <LogoutButton textButton="Log out" user={user} />
          </div>


          <div className="p-2 pt-3 mt-3 border-top">

            <div className="me-auto fw-light">
              <Link href="/tickets" className="me-3 text-white">Tickets</Link>
              <Link href="/tickets/create" className="me-3 text-white">Create ticket</Link>
            </div>

          </div>



          </>
  )
}
