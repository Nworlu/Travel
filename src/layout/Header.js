import React from 'react'
import Navbar from './Navbar'
// import homeImage from '../assets/home-back.jpeg'

const Header = ({ children, align }) => {
  return (
    <header

      className={`back text-white  mx-auto px-36 flex py-10 flex-col h-screen  ${
        align ? align : 'items-start'
      }`}
    >
      <Navbar />
      <div className='flex flex-col justify-center h-full'>{children}</div>
    </header>
  )
}

export default Header
