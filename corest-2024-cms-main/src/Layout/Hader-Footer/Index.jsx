import React from 'react'
import Navbar from '../Restaurant/Navbar'
import Footer from './Footer'

const Index = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="py-12">{ children }</main>
      <Footer />
    </div>
  )
}

export default Index