import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUp } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'


export default function User({ params }) {
  return (
    <>
    <nav className="p-4 mb-5">
      <div className="container d-flex align-items-center">
        <div className="logo text-light fs-2 me-4">
        <Link href="/" className="me-5">
          <FontAwesomeIcon icon={faCircleUp} />
        </Link>
        </div>
        <div className="text-light">
          <Link href="/admin" className="me-5">Admin</Link>
          <Link href="/user/1" className="me-5">User</Link>
   
        </div>     
      </div>
    </nav>

      <section id="user" className="px-2">
        <div className="wrapper container ">

          <div className="info rounded bg-secondary p-3 text-white mb-4">
            <div>
              <p>{params.id}</p>
              <p>Name</p>
              <p>Last Name</p>
              <p>Phone Number</p>
              <p>email</p>
              <p>Lead generated</p>
            </div>
          </div>

          <div className="serices rounded bg-secondary p-3 text-white mb-4">
            <div>
              <p> CARD 1 </p>
              <p> CARD 2 </p>
              <p> CARD 3 </p>
              <p> CARD 4 </p>
              <p> CARD 5 </p>
            </div>
          </div>

        </div>
      </section>

    </>
  )
}
