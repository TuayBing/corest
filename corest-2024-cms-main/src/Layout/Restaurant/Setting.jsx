import React from 'react'
import { Link } from 'react-router-dom'

const Setting = () => {
  return (
    <div>
      <div className="mx-1.5">
        <Link to="/setting/company">
          <div className="w-[1.5rem] h-[1.6rem] cursor-pointer">
            <img
              src={"/img/Isettings.png"}
              alt="Isettings"
              className="w-full h-full hover:opacity-50"
            />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Setting