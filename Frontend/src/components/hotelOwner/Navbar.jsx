import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { UserButton } from '@clerk/clerk-react'

const Navbar = () => {

  return (
    <div className='flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300'>
      <Link to="/" className='flex items-center justify-center gap-2'>
        <img src={assets.crown} className={`h-9`} />
        <span className='text-black text-2xl font-bold'>ImperialCrown</span>
      </Link>
      <UserButton />
    </div>
  )
}

export default Navbar