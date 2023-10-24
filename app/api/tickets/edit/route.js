import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import {NextResponse} from 'next/server'
import { cookies } from 'next/headers'

export const dynamic = 'force-dynamic' // force db refrech


export async function PUT(request) {

  const ticket = await request.json()
  console.log('API REQUEST: api/tickets/edit')
  
  const supabase = createRouteHandlerClient({cookies})
  const {error} = await supabase
  .from('pj_promo_service')
  .update({ 
    status: ticket.status,
    promo_code: ticket.promo_code,
    promo_url: ticket.promo_url,
    service: ticket.service,
    description: ticket.description,
    title: ticket.title,
    promo_end: ticket.promo_end,
    promo_start: ticket.promo_start,
  })
  .eq('id', ticket.id)


  return NextResponse.json({error}) // send back data to the api call
}