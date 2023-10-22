
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

// components
import UsersList from './UserList'


// page function
export default async function users() {

  return (
      <>
        <div className="row">

          <div className="lh-1 bg-primary rounded p-4 text-white mb-4 d-flex align-items-center">
            <FontAwesomeIcon icon={faUser} className="h2 me-3"/>
            <div>
              <h1 className="h5 mb-1 text-white lh-1">User List</h1>
              <small>Tutti i clienti attivi</small>
            </div>
          </div>

        </div>

        <div className="row">

          <div className="col-md-4">
            <div className="bg-white rounded p-3">
              <h3 className="h5 fw-bold">Users overview</h3>
              <ul className=" list-unstyled text-secondary">
                <li>Total Users: 23</li>
                <li>Last Week users: 4</li>
                <li>City: 3</li>
              </ul>
            </div>
          </div>
        
          <div className="col-md-8 ">
            <div className="bg-white rounded p-2">
              <UsersList />
            </div>
          </div>
        
        </div>
   
      </>
  )
}
