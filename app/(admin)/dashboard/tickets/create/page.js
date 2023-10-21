import CreateTicketForm from "./CreateTicketForm.js";

import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'




export default async function create() {

  const supabase = createServerComponentClient({ cookies })
  const { data : session } = await supabase.auth.getSession()
  const id =  session.session.user.id;

  return (
    <main>
      <CreateTicketForm formTitle="Richiedi una promo" user_id={id}/>
    </main>
  )
}