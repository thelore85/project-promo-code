'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import TicketButtons from './TicketButtons.js';
import { useRouter } from 'next/navigation'
export const dynamic = 'force-dynamic' // force db refrech


//component
export default function  Ticket({ ticket }) {

  //NEXT setting
  const router = useRouter()

  //state interaction
  const [isEditing, setIsEditing] = useState(false);
  const [editedTicket, setEditedTicket] = useState({ ...ticket });

  //interection function
  const handleEdit = () => { setIsEditing(true); };
  const handleCancel = () => {  setIsEditing(false); };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTicket({
      ...ticket,
      [name]: value,
    });
  };

  const handleSave = () => {
    onUpdate(editedTicket);
    setIsEditing(false);
  };



 // EDIT SUBMISSION - call api/tickets/edit
 const onUpdate = async (updatedTicket)  => {
  console.log('updated ticket', updatedTicket)

  const res = await fetch('http://localhost:3000/api/tickets/edit', {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(updatedTicket)
  })

  const json = await res.json()  

  if(json.error){console.log('Error - ticket update: ',json.error)}
  if(!json.error){ router.refresh() }
}



  // html
  return (
    <div key={ticket.id} className="p-3 mb-2">
      <div className="d-flex text-body-secondary">
        <div className="bg-secondary-subtle p-1 me-3 rounded"></div>

        <ul className="w-100 pb-3 mb-0 small lh-sm border-bottom fw-light list-unstyled">
          <li>
            <Link href={`/dashboard/tickets/${ticket.id}`}>
              <p>
                <span className="h5 fw-bold text-black text-decoration-underline">
                  {isEditing ? 
                  (<input type="text" name="title" value={editedTicket.title} onChange={handleChange} />) : 
                  ( ticket.title)}
                </span>
                <span className="small h6 text-black-50"> / Ticket ID: {ticket.id} </span>
              </p>
            </Link>
          </li>
          <li className="">
            <Link href={`/dashboard/users/${ticket.user_id}`}>
              <span className="fw-bold"> {ticket.user_email} </span>
            </Link>
          </li>
          <li className="">
            <span>Create at: </span> {new Date(ticket.created_at).toLocaleString("it-IT", {  day: "2-digit", month: "2-digit",  year: "numeric" })}
          </li>
          <li className="">
            {isEditing ? 
            ( <span>Promo Start: <input type="date" name="promo_start" value={editedTicket.promo_start ?? '' } onChange={handleChange} /> </span>) : 
            (  ticket.promo_start ? <span>Promo Start: {ticket.promo_start}</span> : null )}
          </li>

          <li className="">
            {isEditing ? 
            ( <span>Promo End: <input type="date" name="promo_end" value={editedTicket.promo_end ?? ''} onChange={handleChange} /></span>) : 
            (  ticket.promo_end ? <span>Promo End: {ticket.promo_end}</span> : null )}
          </li>
          <li className="">
            <span>Promo Code:</span>{" "}
            {isEditing ? 
            ( <input type="text" name="promo_code" value={editedTicket.promo_code ?? ''} onChange={handleChange} />) : 
            ( ticket.promo_code )}
          </li>

          <div>
            {isEditing ? ( 
            <select name="status" id="status" onChange={handleChange} value={editedTicket.status}>
              <option value='active' >Active</option>
              <option value='pending'>Pending</option>
              <option value='ended'>Ended</option>
            </select>) : 
            (
            ticket.status === 'active' ? ( <li><span className="mt-2 badge text-bg-success">Active</span></li>) : 
            ticket.status === 'pending' ? ( <li><span className="mt-2 badge text-bg-warning">Pending</span></li>) : 
            ticket.status === 'ended' ? ( <li><span className="mt-2 badge text-bg-secondary">Ended</span></li>) : null
            ) }
          </div>

          <TicketButtons ticket={ticket} isEditing={isEditing} handleCancel={handleCancel} handleEdit={handleEdit} handleSave={handleSave}/>

        </ul>
      </div>
    </div>
  );
}

