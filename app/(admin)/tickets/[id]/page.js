import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { notFound } from "next/navigation"
import { cookies } from 'next/headers'

export async function generateMetadata({ params }) {

  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.from('pj_promo_service')
    .select()
    .eq('id', params.id)
    .single()

  return {
    title: `Piqus Lead | ${data?.title || 'Ticket not found' }`
  }
}


async function getTicket(id) {
 
  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.from('pj_promo_service')
    .select()
    .eq('id', id)
    .single()

  if (!data) {
    notFound()
  }

  return data
}


export default async function TicketDetails({ params }) {
  // const id = params.id
  const ticket = await getTicket(params.id)

  return (
    <main>
      <nav>
        <h2 className='p-2 fs-3'>Ticket Details</h2>
      </nav>
      <div className="card p-2">
        <h3 className="fs-5 bolder">{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  )
}