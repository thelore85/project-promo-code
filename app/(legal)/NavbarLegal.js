import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'

import Link from 'next/link'


export default function NavbarLegal() {
  return (
    <nav className="w-100 py-3 mb-5 border-top">
      <div className="container d-flex align-items-center">
        <div className="logo text-light fs-6 me-3">
            <FontAwesomeIcon icon={faBook} />
        </div>
        <div className="fs-6 text-white fw-lighter">
          <Link href="/terms" className="me-3">Termini e Condizioni</Link>
          <Link href="/contract" className="me-3">Contratto</Link>
          <Link href="/privacy" className="me-3">Privacy Policy</Link>
        </div>     
      </div>
    </nav>
  )
}
