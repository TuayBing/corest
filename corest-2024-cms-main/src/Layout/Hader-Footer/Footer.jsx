import React from 'react'
import ViewOrder from './Vieworder'
import OpenTableBill from './OpenTableBill'
import ReservedTable from './ReservedTable'
import Table from './Table'

const Footer = () => {
  return (
    <div className="fixed w-full bottom-0">
        <div className="bg-gradient-to-r from-[#E55B13] to-[#E55B13] flex justify-center md:w-full md:h-[4rem] h-[4rem]">
            <ViewOrder />
            <OpenTableBill />
        </div>
        <div className="bg-[#E55B13] flex justify-center md:w-full md:h-[4rem] h-[4rem] md:hidden">
            <ReservedTable />
            <Table />
        </div>
    </div>
  )
}

export default Footer