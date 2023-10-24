import CreateTicketForm from "./CreateTicketForm.js";

import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'




export default async function create() {

  const supabase = createServerComponentClient({ cookies })
  const { data : session } = await supabase.auth.getSession()
  const id =  session.session.user.id;

  return (
    <section className="d-flex align-content-center justify-content-center ">
      <CreateTicketForm formTitle="Start a new project" user_id={id}/>
    </section>
  )
}