import React from 'react'
import BtnFooter from './BtnFooter'
import Navbar from '../Restaurant/Navbar'

const FooterHeadersetting =({ children }) => {
  return (
    <div>
        <Navbar />
        <main className='py-12'>{children}</main>
        <BtnFooter />
    </div>
  )
}

export default FooterHeadersetting