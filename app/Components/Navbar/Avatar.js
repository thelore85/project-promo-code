'use client'

import Link from "next/link"
import LogoutButton from "./LogoutButton"
import { useEffect } from "react"


export default  async function Avatar({session}) {


    // import bootstrap 5 javascript
    useEffect(() => {
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

  return (
    <div className="dropdown">
      <span href="#" className="d-block link-body-emphasis text-decoration-none" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="/img/user_img.jpg" alt="mdo" width="32" height="32" className="rounded-circle" />
      </span>
      <ul className="dropdown-menu text-small">
        <li><Link className="dropdown-item border-bottom text-primary" href={ session ? (`/dashboard/users/${session?.user.id}`) : '/#'} >My Profile</Link></li>
        <li><Link className="dropdown-item" href="/dashboard/tickets/create">Nuovo Progetto</Link></li>
        <li><Link className="dropdown-item" href="#">Cambia Password</Link></li>
        <li><Link className="dropdown-item" href="#">Supporto</Link></li>
        <li><Link href="#" className=" pointer-event dropdown-item text-black mt-3 py-2 border-top"><LogoutButton /></Link></li>
      </ul>
    </div>
  )
}