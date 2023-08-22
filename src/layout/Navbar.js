import React from 'react'
import { NavLink } from 'react-router-dom'
import PrimaryButton from '../components/button/PrimaryButton'

const Navbar = () => {
  return (
    <nav className='container mx-auto flex justify-between'>
      <div>
        <h2 className='text-3xl font-bold'>Travel</h2>
      </div>

      <ul className='flex items-center justify-between'>
        <li>
          <NavLink to={'/'} className='p-3 mx-5 font-medium'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={'/'} className='p-3 mx-5 font-medium'>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to={'#'} className='p-3 mx-5 font-medium'>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to={'/'} className='p-3 mx-5 font-medium'>
            Upcomming Packages
          </NavLink>
        </li>
      </ul>

      <PrimaryButton>Get in Touch</PrimaryButton>
    </nav>
  )
}

export default Navbar
