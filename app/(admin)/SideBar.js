'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import {useEffect} from 'react';
import Link from 'next/link';


export default function SideBar() {

      // import bootstrap 5 javascript
      useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
      }, []);


  return (

<div className="W-100  min-vh-100 p-3 bg-white">

    {/* LOGO / */}
    <Link href="/" className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">
      <FontAwesomeIcon icon={faLaptopCode} className="text-primary rounded me-3"/>
      <span className="fs-5 fw-semibold">PIQUS</span>
    </Link>

    <ul className="list-unstyled ">

      {/* TICKET / */}
      <li className="mb-1">
        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
          TICKET
        </button>
        <div className="collapse" id="dashboard-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><Link href="/dashboard/tickets" >All tickets</Link> </li>
            <li><Link href="/dashboard/tickets/create" >Create Tickets</Link> </li>
          </ul>
        </div>
      </li>

      {/* USER/ */}
      <li className="mb-1">
        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
          USERS
        </button>
        <div className="collapse" id="orders-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
          <li><Link href="/dashboard/users" >All Users</Link> </li>
          </ul>
        </div>
      </li>

      {/* ACCOUNT/ */}
      <li className="border-top my-3"></li>
      <li className="mb-1">
        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
          Account
        </button>
        <div className="collapse" id="account-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><Link href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">New...</Link></li>
            <li><Link href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Profile</Link></li>
            <li><Link href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Settings</Link></li>
            <li><Link href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Sign out</Link></li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
  )
}
