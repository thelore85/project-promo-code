"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"



//component
export default function CreateTicketForm({ formTitle, user_id }) {
  const router = useRouter()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [service, setService] = useState('')
  const [isLoading, setIsLoading] = useState(false)


  // FORM SUBMISSION - call api/tickets
  const handleSubmit = async (e)  => {
    e.preventDefault()
    setIsLoading(true)

    const newTicket = { title, description, service }

    const res = await fetch('http://localhost:3000/api/tickets', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newTicket)
    })

    const json = await res.json()

    if(json.error){console.log('Error - ticket form: ',json.error)}
    if(json.data){
      router.refresh()
      router.push(`/dashboard/users/${user_id}`)
    }

  }

  return (

    <>
    <h2>{formTitle}</h2>

    <form onSubmit={handleSubmit} className="w-100" style={{'maxWidth':'500px'}}>
      <div className="form-floating mb-3">
        <input  className="form-control" required type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
        <label htmlFor="floatingInput">Nome Promozione</label>
      </div>
      
      <div className="form-floating mb-3">
      <textarea  className="form-control" required onChange={(e) => setDescription(e.target.value)} value={description} />
        <label htmlFor="floatingPassword">Descrizione</label>
      </div>

      <div className="form-floating mb-3">
        <select  className="form-select" aria-label="Default select example" required onChange={(e) => setService(e.target.value)} value={service} >
          <option value="landing_page">Landing Page</option>
          <option value="email">Email</option>
          <option value="blog">Blog</option>
          <option value="mini_website">Mini Website</option>
          <option value="consultancy">Consulenza creativa</option>
        </select>
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Tipo di promo
        </label>
      </div>
      <button  className="btn btn-primary"  disabled={isLoading} >
        {isLoading && <span>Adding...</span>}
        {!isLoading && <span>Add Ticket</span>}
      </button>
      <p className="mt-5 mb-3 text-body-secondary">Piqus Lead © 2017–2024</p>
    </form>
    </>
   
  )
}