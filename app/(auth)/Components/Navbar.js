import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUp } from '@fortawesome/free-solid-svg-icons'

import Link from 'next/link'


export default function Navbar() {
  return (
    <nav className="w-100 p-4 bg-blue ">
      <div className="container d-flex align-items-center">

        <div className="logo text-light fs-2 me-4">
          <FontAwesomeIcon icon={faCircleUp} />
        </div>

        <div className="text-light">
          <Link href="/signup" className="me-5">Sign up</Link>
          <Link href="/login" className="me-5">Log in</Link>
        </div>     
        
      </div>
    </nav>
  )
}
