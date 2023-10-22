import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRectangleAd } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faInbox } from '@fortawesome/free-solid-svg-icons'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Link from 'next/link'



// db - ticket table
async function getTickets() {
  const supabase = createServerComponentClient({ cookies }) //conntect to the DB
  const { data, error } = await supabase.from('pj_promo_service') // fetch data from DB
    .select() // serlect all tickets from the table (return an array)
  if (error) { console.log(error.message) }
  return data
}


const usersCounter = async () => {
  const ticket = await getTickets();
  const usersList = ticket.map(object => object.user_id);
  const finalList = [];

  for (let i = 0; i < usersList.length; i++) {
    if (finalList.indexOf(usersList[i]) === -1) {
      finalList.push(usersList[i]);
    }
  }
  return finalList
}


// page
export default async function dashboard() {

  const tickets = await getTickets()
  const users = await usersCounter()


  return (
    <div>

      <div className=" row g-3 text-white">
      
        <div className="col-lg-4">

          <Link href="/dashboard/tickets" >
            <div className="lh-1 bg-success rounded p-3 d-flex align-items-center">
             <FontAwesomeIcon icon={faRectangleAd} className="h2 me-3"/>
              <div className="me-auto pe-2">
                <h1 className="h5 mb-1 lh-1">All Tickets</h1>
                <small>Lista di tutte le attività pianificate</small>
              </div>
              <div className="rounded bg-white text-black-50 p-3">
                <span className="fw-light small d-block">Total</span>
                <span className="h2">{tickets.length}</span>
              </div>
            </div>
          </Link>

        </div>
        
        <div className="col-lg-4">

          <Link href="/dashboard/users">
            <div className="lh-1 bg-primary rounded p-3 d-flex align-items-center">
              <FontAwesomeIcon icon={faUser} className="h2 me-3"/>
              <div className="me-auto pe-2">
                <h1 className="h5 mb-1 lh-1">Active Users</h1>
                <small>Lista di tutte le attività pianificate</small>
              </div>
              <div className="rounded bg-white text-black-50 p-3">
                <span className="fw-light small d-block">Total</span>
                <span className="h2">{users.length}</span>
              </div>
            </div>
          </Link>

        </div>
   
        <div className="col-lg-4">
          
          <Link href="#">
            <div className="lh-1 bg-secondary-subtle rounded p-3 d-flex align-items-center">
              <FontAwesomeIcon icon={faInbox} className="h2 me-3" />
              <div className="me-auto pe-2">
                <h1 className="h5 mb-1 lh-1">COMING SOON</h1>
                <small>Panding tasks list</small>
              </div>
              <div className="rounded bg-white text-white p-3">
                <span className="fw-light small d-block">Total</span>
                <span className="h2">00</span>
              </div>
            </div>
          </Link>

        </div>
      </div>


    </div>
  )
}
