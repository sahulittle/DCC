import React from 'react'
import logo from '../assets/logo_footer.png'

const Navbar = () => {
  return (
    <div className="h-16 bg-white border-b border-gray-200 flex items-center px-6 justify-between sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="h-18 w-auto object-contain" />
      </div>
    </div>
  )
}

export default Navbar