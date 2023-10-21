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
      <div className="container">
        <Link className="navbar-brand fs-4" href="/"><FontAwesomeIcon icon={faLaptopCode} className="text-primary rounded me-3"/> PIQUS</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample09">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
          <LoginButtons />
        </div>
      </div>
    </nav>



  )
}
