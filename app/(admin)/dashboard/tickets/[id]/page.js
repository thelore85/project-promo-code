import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { notFound } from "next/navigation"
import { cookies } from 'next/headers'
import DeleteButton from "./DeleteButton"


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
      <nav>
        <h2 className='p-2 fs-3'>Ticket Details</h2>
      </nav>
      <div className="p-3 bg-white rounded">
        <h3 className="fs-5 bolder">{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
        <DeleteButton id={params.id}/>
      </div>
    </>
  )
}