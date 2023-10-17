import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import {NextResponse} from 'next/server'
import { cookies } from 'next/headers'

export const dynamic = 'force-dynamic' // force db refrech


export async function POST(request) {
  const tickets = await request.json()
  console.log('request received')

  // get supabase instance
  const supabase = createRouteHandlerClient({cookies})

  // get the current user session
  const {data: {session}} = await supabase.auth.getSession()

  // insert the data in supabase
  const {data, error} = await supabase.from('pj_promo_service')
  .insert({
    ...tickets, // get all info from the form 
    user_email: session.user.email}) // add the session info above
    .select() // ask back the obj from the DB
    .single() // make it an obj (not an array [{ tiket }])

  return NextResponse.json({data, error}) // send back data to the api call
}