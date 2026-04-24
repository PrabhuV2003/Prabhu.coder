import React, { useState } from 'react'
import { Button } from './ui/Button'
import { PiArrowUpRightBold } from "react-icons/pi";

const Header = () => {

  const [scrolled, setScrolled] = useState(false)

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/85 backdrop-blur-md border-b border-slate-200/60 shadow-[0_4px_24px_-12px_rgba(37,99,235,0.15)]' : 'bg-transparent'} `}>

      <div className=' container-xl flex items-center justify-between h-16 lg:h-20 '>

        {/* Logo */}
        <a href="#top" className=' flex items-center gap-2 group '>
          <div className=' w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform '>
            <span className="text-white font-bold text-sm font-mono">P.</span>
          </div>
          <span className="font-semibold tracking-tight text-slate-900 text-[17px]">Prabhu V</span>
        </a>
        
        <nav className='hidden lg:flex relative items-center p-1 rounded-full bg-white/60 backdrop-blur-md border border-slate-200/80 shadow-sm'>
        {/* Sliding pill indicator */}
          <span aria-hidden="true"
            className="absolute top-1 bottom-1 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 shadow-md shadow-blue-500/30 transition-[left,width,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"></span>

          <a href="#" className='relative z-10 px-4 py-2 text-[13.5px] font-medium rounded-full transition-colors duration-300 '>Home</a>

          <a href="#" className='relative z-10 px-4 py-2 text-[13.5px] font-medium rounded-full transition-colors duration-300'>About</a>

          <a href="#" className='relative z-10 px-4 py-2 text-[13.5px] font-medium rounded-full transition-colors duration-300'>Works</a>

          <a href="#" className='relative z-10 px-4 py-2 text-[13.5px] font-medium rounded-full transition-colors duration-300'>Services</a>

          <a href="#" className='relative z-10 px-4 py-2 text-[13.5px] font-medium rounded-full transition-colors duration-300'>Process</a>

          <a href="#" className='relative z-10 px-4 py-2 text-[13.5px] font-medium rounded-full transition-colors duration-300'>Testimonial</a>

          <a href="#" className='relative z-10 px-4 py-2 text-[13.5px] font-medium rounded-full transition-colors duration-300'>Contact</a>
        </nav>

        {/* CTA */}
        <div className=' hidden lg:block '>
          <Button className=' w-full !rounded-full bg-slate-900 hover:bg-blue-600 text-white h-11 '>
            Let&rsquo; talk
            <PiArrowUpRightBold className=' w-4 h-4 ml-1 group-hover:transalte-x-0.5 group-hover:-translate-y-0.5 transition-transform ' />
          </Button>
        </div>

      </div>

    </header>
  )
}

export default Header