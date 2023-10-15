import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

export async function GET( request, { params }){

  const id = params.id;

  const res = await fetch(`http://localhost:4000/tickets/${id}`)
  const ticket = res.json()

  if(!res.ok){
    return NextResponse.json({error: 'cannont find any user/ticket'},{status: 401})
  }

  return NextResponse.json(ticket, {  status: 200 }
  
  )


}
