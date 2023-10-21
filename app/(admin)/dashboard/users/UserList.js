import Link from 'next/link'
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { createClient } from '@supabase/supabase-js'


// SUPABASE admin privilage
const dotenv = require('dotenv');
dotenv.config({ path: '.env.local' });

const supabase_url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const service_role_key = process.env.NEXT_SERVICE_ROLE_KEY;

const supabase = createClient(supabase_url, service_role_key, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

// Access auth admin api
const adminAuthClient = supabase.auth.admin


async function getUsers() {
  const supabase = createServerComponentClient({ cookies }) //conntect to the DB

  const { data: { users }, error } = await adminAuthClient.listUsers()
  if(error){console.log('fetch error: ', error)}

  return users
}

export default async function UsersList() {

  const users = await getUsers() // get the array from DB

  return (
    <>
    {users?.map((user) => {

      //manipulate date
      const date = new Date(user.created_at)
      const dateOption = { year: 'numeric', month: '2-digit', day: '2-digit' };
      
      return (
        <div key={user.id} className="p-3 mb-2 ">
        
          <div className="d-flex text-body-secondary pt-3">
            <div className="bg-primary-subtle p-1 me-3 rounded"></div>
            <ul className=' w-100 pb-3 mb-0 small lh-sm border-bottom fw-light list-unstyled'>
              <li><Link  href={`/dashboard/users/${user.id}`}><span className="h5 fw-bold text-black d-block mb-2 text-decoration-underline">{user.email}</span></Link></li>
              <li><span className="fw-bold">ID:</span> {user.id}</li>
              <li><span className="fw-bold">Account aperto il:</span> {date.toLocaleString('it-IT', dateOption)}</li>
            </ul>
          </div>
          
        </div>
      )}
    )}

    {users?.length === 0 && (
      <p className="text-center">There are no open tickets, yay!</p>
    )}
  </>
  )
}

