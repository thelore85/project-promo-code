'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useEffect} from 'react';
import LoginButtons from './LoginButtons';


export default function NavbarLogOut() {

    // import bootstrap 5 javascript
    useEffect(() => {
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

  return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary rounded" aria-label="Eleventh navbar example">
      <div className="container d-flex">

        <div className='me-4'>
          <Link className="navbar-brand fs-4" href="/"><FontAwesomeIcon icon={faLaptopCode} className="text-primary rounded me-3"/> PIQUS</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse me-auto" id="navbarsExample09">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="#">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="#">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="#">Contacts</Link>
            </li>
          </ul>
        </div>
        
        <LoginButtons />

      </div>
    </nav>



  )
}
