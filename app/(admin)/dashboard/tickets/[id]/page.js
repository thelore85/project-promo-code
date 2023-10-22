import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { notFound } from "next/navigation"
import { cookies } from 'next/headers'
import DeleteButton from "./DeleteButton"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTicket } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link"
import EditButton from "./EditButton"
import StatusBadge from "../StatusBadge"


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

  //manipulate date
  const date = new Date(ticket.created_at)
  const dateOption = { year: 'numeric', month: '2-digit', day: '2-digit' };

  return (
    <>
      <div className="row">

        <div className="col-12">

          <div className="lh-1 bg-success rounded p-4 text-white mb-4 d-flex align-items-center">
            <FontAwesomeIcon icon={faTicket} className="h2 me-3"/>
            <div className="me-auto">
              <h1 className="h5 mb-1 text-white lh-1">{ticket.title}</h1>
              <small>{ticket.user_email}</small>
            </div>
            <EditButton id={params.id} />
            <DeleteButton id={params.id}/>
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

          <div className="bg-white rounded p-3">
           <ul className=' w-100 pb-3 mb-0 small lh-sm fw-light list-unstyled'>
              <li><span className="h4 d-block fw-bold text-black  text-decoration-underline mb-4">{ticket.title}</span><span className="small h6 text-black-50"></span></li>
              <li className=''><span >Ticket ID: {ticket.id}</span> </li>
              <li className=''><span >Create at:</span> {date.toLocaleString('it-IT', dateOption)}</li>
              <li className=''><span >{ticket.promo_start  ? `Start Date: ${ticket.promo_start }` : null }</span> </li>
              <li className=''><span >{ticket.promo_end ? `End Date: ${ticket.promo_end }` : null }</span> </li>
              <li className=''><span >{ticket.promo_code ? `Promo Code: ${ticket.promo_code}` : null }</span> </li>
              <StatusBadge ticket={ticket}/>
            </ul>
          </div>

        </div>

      </div>
    </>

  )
}