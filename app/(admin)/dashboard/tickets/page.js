import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRectangleAd } from '@fortawesome/free-solid-svg-icons'

// components
import TicketsList from './TicketsList'



// db call
async function getTickets() {
  const supabase = createServerComponentClient({ cookies }) //conntect to the DB
  const { data, error } = await supabase.from('pj_promo_service') // fetch data from DB
    .select() // serlect all tickets from the table (return an array)
  if (error) { console.log(error.message) }
  return data
}


// page function
export default async function tickets() {

  const tickets = await getTickets() // get the array from DB

  return (

      <>
        <div className="lh-1 bg-success rounded p-4 text-white mb-4 d-flex align-items-center">
          <FontAwesomeIcon icon={faRectangleAd} className="h2 me-3"/>
          <div>
            <h1 className="h5 mb-1 text-white lh-1">Progetti e Promozioni</h1>
            <small>Lista di tutte le attività pianificate</small>
          </div>
        </div>

        <div className="bg-white rounded">
        <TicketsList tickets={tickets} />
        </div>
      </>
      
  )
}
