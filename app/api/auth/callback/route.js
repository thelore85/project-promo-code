import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET(request){

  const url = new URL(request.url)
  const code =  url.searchParams.get('token')
  
try {
  const supabase = createRouteHandlerClient({ cookies })
  await supabase.auth.exchangeCodeForSession(code)
} catch (error) {
  console.error('Errore durante lo scambio del codice per la sessione:', error)
  throw new Error('Impossibile eseguire l\'accesso')
}


  return NextResponse.redirect(url.origin)
}