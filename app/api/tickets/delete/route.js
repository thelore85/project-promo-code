import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import {NextResponse} from 'next/server'
import { cookies } from 'next/headers'
export const dynamic = 'force-dynamic'


export async function DELETE(request) {
  const id = await request.json()
  console.log('API REQUEST: api/tickets/delete')

  console.log('debugging api delete: ', id)

  
  const supabase = createRouteHandlerClient({cookies})
  const {error} = await supabase
  .from('pj_promo_service')
  .delete()
  .eq('id', id)

  return NextResponse.json({ error })
}