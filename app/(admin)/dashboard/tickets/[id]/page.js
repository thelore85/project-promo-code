import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { notFound } from "next/navigation"
import { cookies } from 'next/headers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTicket } from '@fortawesome/free-solid-svg-icons'
import Ticket from "../card/Ticket"


//metadata 
export async function generateMetadata({ params }) {

  const supabase = createServerComponentClient({ cookies })
  const { data: ticket } = await supabase.from('pj_promo_service')
    .select()
    .eq('id', params.id)
    .single()

  return {
    title: `Piqus Lead | ${ticket?.title ? (ticket.title) : ('no ticket found')}`
  }
}

// db call
async function getTicket(id) {
 
  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.from('pj_promo_service')
    .select()
    .eq('id', id)
    .single()

  if (!data) { notFound() }
    return data
}



// page
export default async function TicketDetails({ params }) {
  const ticket = await getTicket(params.id)

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="lh-1 bg-success rounded p-4 text-white mb-4 d-flex align-items-center">
              <FontAwesomeIcon icon={faTicket} className="h2 me-3"/>
              <div>
                <h1 className="h5 mb-1 text-white lh-1">{ticket.title}</h1>
                <small>{ticket.user_email}</small>
              </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3">
          <div className="bg-white rounded p-3">
            <ul className=" list-unstyled text-secondary">
              <li><small className="fw-bold text-black">Functinality</small></li>
              <li><small>Create new promo</small></li>
              <li><small>Total projercts: 4</small></li>
              <li><small></small></li>
            </ul>
          </div>
        </div>

        <div className="col-md-9">
          <div className="p-2 bg-white rounded">
            <Ticket key={ticket.id} ticket={ticket} />
          </div>
        </div>
      </div>
    </>

  )
}
