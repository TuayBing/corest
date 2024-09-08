import React from 'react'
import { Link } from "react-router-dom"

const NameReastaurant = () => {
  return (
    <div className='text-[#fff] text-[1.2rem] cursor-pointer hover:opacity-50'>
        <Link to="/home">
          TEST Shop
        </Link>
    </div>
  )
}

export default NameReastaurant