import {NextResponse} from 'next/server'

export const dynamic = 'force-dynamic' // force db refrech


export async function GET(){
  const response = await fetch('http://localhost:4000/tickets')
  
  const tickets = await response.json()

  return NextResponse.json(tickets, {
    status: 200
  })
}

export async function POST(request) {
  const ticketBody = await request.json()

  const res = await fetch('http://localhost:4000/tickets', {
    method: 'POST',
    headers: { 'content-type' : 'application/json'},
    body: JSON.stringyfy(ticketBody)
  })

  const newTicket = await res.json()

  return NextResponse.json(newTicket, {
    status: 201
  })
}