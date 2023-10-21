'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
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
    <Link  href="#" className=" d-inline-block bg-secondary rounded w-auto px-3 py-2 my-2" onClick={handleClick} disabled={isLoading}>
      {isLoading 
      ? (<FontAwesomeIcon className="text-white small " icon={faSpinner} spin />)
      : (<FontAwesomeIcon className=" text-white small" icon={faTrashCan} />) }
    </Link>
  )
}
