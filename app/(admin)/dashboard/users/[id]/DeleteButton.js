'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

 
export default function DeleteButton({ id }) {
  
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = () => {
    setIsLoading(true)
    console.log('deleting id: ', id)
  }

  return (

    <>
    <div className=" d-inline-block bg-secondary-subtle rounded w-auto px-4 py-1 my-2" onClick={handleClick} disabled={isLoading}>
      {isLoading 
      ? (<FontAwesomeIcon className="text-white fs-6 " icon={faSpinner} spin />)
      : (<FontAwesomeIcon className=" text-white fs-6" icon={faTrashCan} />) }
    </div>
    </>

  )
}
