import React from 'react'

export default function StatusBadge({ ticket }) {


  return (
    <>
      {ticket.status === 'active' ? ( <li><span className="mt-2 badge text-bg-success">Active</span></li>) : 
      ticket.status === 'pending' ? ( <li><span className="mt-2 badge text-bg-warning">Pending</span></li>) : 
      ticket.status === 'ended' ? ( <li><span className="mt-2 badge text-bg-secondary">Ended</span></li>) : null}
    </>
    
  )
}
