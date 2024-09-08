import React from "react";

const Table = () => {
  return (
    <div className="hover:bg-gray-300 border-l border-gray-300 hover: w-full flex flex-col justify-center items-center ">
      <div className="w-[3.235rem] h-[1.793rem]">
        <img alt="" src={"/img/chair.png"} className="w-full h-full" />
      </div>
      <div className="text-[#E2620D] text-[1rem] font-bold ">Table</div>
    </div>
  );
};

export default Table;