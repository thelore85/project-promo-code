import Link from 'next/link'
import DeleteButton from './[id]/DeleteButton'



// component function
export default async function TicketsList({tickets}) {

  return (
    <>
    {tickets.map((ticket) => {

      //manipulate date
      const date = new Date(ticket.created_at)
      const dateOption = { year: 'numeric', month: '2-digit', day: '2-digit' };
      
      return (
        <div key={ticket.id} className="p-4 mb-2 ">
          <div className="d-flex text-body-secondary pt-3">
          
            <div className=" bg-secondary-subtle p-1 me-3 rounded"></div>

            <ul className=' w-100 pb-3 mb-0 small lh-sm border-bottom fw-light list-unstyled'>
              <li><Link  href={`/dashboard/tickets/${ticket.id}`}><p><span className="h5 fw-bold text-black  text-decoration-underline">{ticket.title}</span><span className="small h6 text-black-50">  / Ticket ID: {ticket.id}</span></p></Link></li>
              <li className='mb-1'><Link href={`/dashboard/users/${ticket.user_id}`}><span className="fw-bold">{ticket.user_email}</span></Link></li>
              <li className='mb-1'><span >Create at:</span> {date.toLocaleString('it-IT', dateOption)}</li>
              <li className='mb-1'><span >{ticket.promo_start  ? `Start Date: ${ticket.promo_start }` : null }</span> </li>
              <li className='mb-1'><span >{ticket.promo_end ? `End Date: ${ticket.promo_end }` : null }</span> </li>
              <li className='mb-1'><span >{ticket.promo_code ? `Promo Code: ${ticket.promo_code}` : null }</span> </li>

              <li>
                <div className=" d-inline-block bg-info-subtle rounded w-auto px-3 py-2 my-2 small fw-bold me-2 text-black-50">status pending</div>
                <DeleteButton id={ticket.id}/>
              </li>
            </ul>

          </div>
        </div>
      )

    })}

    {tickets.length === 0 && (
      <p className="text-center">There are no open tickets for this user!</p>
    )}
  </>
  )
}