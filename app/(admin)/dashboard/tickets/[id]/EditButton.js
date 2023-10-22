'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Link from 'next/link'


export default function EditButton({id}) {

  const [isLoading, setIsLoading] = useState(false)

  const handleClick = () => {
    setIsLoading(true)
    console.log('editing id: ', id)
  }

  return (
    <Link  href="#" className=" d-inline-block rounded w-auto p-2 my-2" onClick={handleClick} disabled={isLoading}>
      {isLoading 
      ? (<FontAwesomeIcon className="text-white h-6 " icon={faSpinner} spin />)
      : (<span className='btn btn-light border-primary text-primary'>Edit</span>) }
    </Link>
  )


}
