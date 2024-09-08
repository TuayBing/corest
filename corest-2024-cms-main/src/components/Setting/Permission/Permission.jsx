import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Permission = () => {
 
  const [trashOn, setTrashOn] = useState(false);

  return (
    <div className="mt-12 mx-10">
      <div className="xl:ml-8 xl:mt-8 md: mt-5">
        <div className="md:flex justify-between items-center">
          <div className="text-[#003060] text-[1.5rem] font-bold	 underline text-3xl">
            Permission
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <div className="border border-[#E2620D] py-1 rounded-full w-[15rem] flex items-center">
              <input
                type="text"
                placeholder="Search"
                className="w-full h-full focus:outline-none px-3 py-1 bg-transparent"
              />
              <div className="flex items-center px-2">
                <MagnifyingGlassIcon className="text-[#FE5A1D] w-6 h-6" />
              </div>
            </div>
            {trashOn && (
              <div
                className="bg-[#E2620D] flex justify-center items-center rounded-full ml-4 cursor-pointer w-[4rem] h-[2.5rem]"
              >
                <div className="w-[2rem] h-[2rem]">
                  <img
                    src="/img/trash.png"
                    alt="trash"
                    className="w-full h-full p-1"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Permission