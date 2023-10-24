'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useEffect} from 'react';
import Avatar from './Avatar';
import DashboardMenu from './DashboardMenu';




export default function NavbarLogIn({session}) {

    // import bootstrap 5 javascript
    useEffect(() => {
      require("bootstrap/dist/js/bootstrap.bundle.min.js");

      
    }, []);

  return (

    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary " aria-label="Eleventh navbar example">
      <div className="container">

          <div>
            <Link className="navbar-brand fs-4 me-4 d-inline-block" href="/">
              <FontAwesomeIcon icon={faLaptopCode} className="text-primary rounded me-3"/><span>PIQUS</span>
            </Link>
          </div>

          <div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="navbarsExample09">
            <ul className="navbar-nav mb-2 me-auto mb-lg-0">
              {/* <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#">Contacts</Link>
              </li> */}
            </ul>
            <Avatar session={session}/>
          </div>
          


      </div>
    </nav>
    
    <DashboardMenu />



    </>

  )
}
