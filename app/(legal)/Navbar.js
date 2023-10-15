import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'

import Link from 'next/link'


export default function Navbar() {
  return (
    <nav className="w-100 p-4 mb-5">
      <div className="container d-flex align-items-center">
        <div className="logo text-light fs-2 me-4">
            <FontAwesomeIcon icon={faBook} />
        </div>
        <div className="text-light">
          <Link href="/termini" className="me-5">Termini e Condizioni</Link>
          <Link href="/contract" className="me-5">Contratto</Link>
          <Link href="/privacy" className="me-5">Privacy Policy</Link>
        </div>     
      </div>
    </nav>
  )
}
