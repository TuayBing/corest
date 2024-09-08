import React from 'react'

const BoxUser = () => {
  return (
    <div className='mt-8 mx-12'>
      <div className='bg-white shadow-md rounded-lg w-[25rem] h-[8rem] ml-4 mt-6 p-4 flex flex-col justify-between relative'>
        <div className='flex items-start justify-between w-full mt-2'>
          <div className='flex flex-col'>
            <h2 className='text-xl font-semibold text-gray-800'>[User Name]</h2>
            <p className='text-sm text-gray-600'>[Permission Name]</p>
          </div>
          <input type="checkbox" className="h-4 w-4 border border-[#E55B13] accent-[#E55B13] rounded mt-1" />
        </div>
        <div className='flex space-x-2 absolute bottom-4 right-12'>
          <img src="/img/sent_validate.png" alt="Sent Validate" className="w-6 h-6" />
          <img src="/img/create_password.png" alt="Create Password" className="w-6 h-6" />
          <img src="/img/branch_res.png" alt="Branch Res" className="w-6 h-6" />
        </div>
      </div>
    </div>
  )
}

export default BoxUser