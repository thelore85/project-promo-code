
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

// components
import UsersList from './UserList'


// page function
export default async function users() {

  return (
      <div>

        <div className="lh-1 bg-primary rounded p-4 text-white mb-4 d-flex align-items-center">
          <FontAwesomeIcon icon={faUser} className="h2 me-3"/>
          <div>
            <h1 className="h5 mb-1 text-white lh-1">User List</h1>
            <small>Tutti i clienti attivi</small>
          </div>
        </div>

        <div className="bg-white rounded">
          <UsersList />
        </div>
        
      </div>
  )
}
