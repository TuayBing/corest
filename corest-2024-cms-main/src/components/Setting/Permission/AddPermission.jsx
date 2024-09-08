import React, { useState } from 'react';
import FormAddPermission from '../../../Modal/FormAddPermission/Index';

const AddPermission = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className='mt-8 mx-12'>
      <div 
        className='bg-white shadow-md rounded-lg w-[25rem] h-[8rem] ml-4 mt-6 p-4 flex items-center justify-center relative cursor-pointer hover:bg-gray-50'
        onClick={openModal}
      >
        <div className='flex flex-col items-center'>
          <div className="w-[3rem] h-[3rem]">
            <img alt="Add" src="/img/add.png" className="w-full h-full" />
          </div>
          <div className="text-[#935B30] text-[1.188rem] font-bold">
            Add New Permission
          </div>
        </div>
      </div>
      <FormAddPermission isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default AddPermission;