'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Link from 'next/link'

 
// component function
export default function DeleteButton({ id }) {
  
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = () => {
    setIsLoading(true)
    console.log('deleting id: ', id)
  }

  return (
    <Link  href="#" className=" d-inline-block rounded w-auto p-2 my-2" onClick={handleClick} disabled={isLoading}>
      {isLoading 
      ? (<FontAwesomeIcon className="text-white h-6 " icon={faSpinner} spin />)
      : (<span className='btn btn-light border-danger text-danger'>Delate</span>) }
    </Link>
  )

  
}
