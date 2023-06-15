import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import { useGlobalContext } from './context'

function Navbar() {
    const {data} = useGlobalContext();
  return (
    <nav>
      <header className='bg-sky-300 h-16 flex justify-around'>
        <div className='flex items-center font-mono'>
            <h2>Cart</h2>
        </div>
        <div className='flex items-center mr-3 text-3xl'>
            <FontAwesomeIcon icon={faCartShopping} />
            <p className='font-mono text-red-600 text-xl'>{data.qty}</p>
        </div>
      </header>
    </nav>
  )
}

export default Navbar
