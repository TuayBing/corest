import React from "react";

const ReservedTable = () => {
  return (
    <div className="hover:bg-gray-300 border-r border-gray-300 w-full flex flex-col items-center justify-center ">
      <div className="w-[4.853rem] h-[1.793rem]">
        <img alt="" src={"/img/reserved.png"} className="w-full h-full" />
      </div>
      <div className="text-[#E2620D] text-[1rem] font-bold ">
        Reserved Table
      </div>
    </div>
  );
};

export default ReservedTable;