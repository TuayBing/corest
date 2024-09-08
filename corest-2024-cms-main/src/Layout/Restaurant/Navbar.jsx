import React from 'react'
import NameReastaurant from './NameReastaurant'
import Flag from './Flag'
import Reserved from './Reserved'
import Table from './Table'
import Notifications from './Notifications'
import Profile from './Profile'
import Setting from './Setting'

const Navbar = () => {
  return (
    <div className='fixed w-full z-2'>
        <div className='bg-[#E55B13] p-3 flex items-center justify-between'>
           <NameReastaurant />
            <div className='flex'
            style={{
                alignItems: "center"
            }}>
              <Flag />
              <Reserved />
              <Table />
              <Notifications />
              <Profile />
              <Setting />
            </div>
        </div>
    </div>
  )
}

export default Navbar

