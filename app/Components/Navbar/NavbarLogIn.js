'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import LogoutButton from './LogoutButton';
import { useEffect} from 'react';



export default function NavbarLogIn({user}) {

    // import bootstrap 5 javascript
    useEffect(() => {
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

  return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary m-0 " aria-label="Eleventh navbar example">
      <div className="container">
        <Link className="navbar-brand fs-4" href="/"><FontAwesomeIcon icon={faLaptopCode} className="text-primary rounded me-3"/> PIQUS</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#dashboardMenu" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="dashboardMenu">

          <div className="navigation me-auto">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/dashboard">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/dashboard/users">Users</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/dashboard/tickets">Tickets</Link>
              </li>
            </ul>
          </div>

          <div className="dropdown">
            <span href="#" className="d-block link-body-emphasis text-decoration-none" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
            </span>
            <ul className="dropdown-menu text-small">
              <li><Link className="dropdown-item" href="#">Nuovo Progetto</Link></li>
              <li><Link className="dropdown-item" href="#">Cambia Password</Link></li>
              <li><Link className="dropdown-item" href="#">Supporto</Link></li>
              <li><span className="dropdown-divider"></span></li>
              <li><Link href="#" className=" pointer-event dropdown-item text-primary mt-3 py-2"><LogoutButton /></Link></li>
            </ul>
          </div>
     
        </div>

      </div>
    </nav>




  )
}
