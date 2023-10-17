import Link from 'next/link'
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'


async function getTickets() {
  const supabase = createServerComponentClient({ cookies }) //conntect to the DB
  const { data, error } = await supabase.from('pj_promo_service') // fetch data from DB
    .select() // serlect all tickets from the table (return an array)
  if (error) { console.log(error.message) }
  return data
}

export default async function TicketsList() {

  const tickets = await getTickets() // get the array from DB
  // console.log('ticket list debuggin :', tickets)


  return (
    <>
    {tickets.map((ticket) => (
      <Link href={`/tickets/${ticket.id}`}>
        <div key={ticket.id} className="card border-light-subtle text-start  p-3 mb-4 bg-white text-black">
          <p className=" d-inline fs-5 fw-bold text-black mb-3">{ticket.title} / <span className='fs-6 fw-lighter'>{ticket.service}</span></p>
          <p className="fs-6 fw-light text-black-50 mb-1" >{ticket.description}</p>
          <p className="fs-6 fw-light text-black-50 mb-1">www.piqus.it/{ticket.promo_url}</p>
          <p className="fs-6 fw-light text-black-50 mb-1">{ticket.user_email}</p>
        </div>
      </Link>

    ))}

    {tickets.length === 0 && (
      <p className="text-center">There are no open tickets, yay!</p>
    )}
  </>
  )
}