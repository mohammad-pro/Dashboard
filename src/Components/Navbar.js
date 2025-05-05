import React from 'react'

export default function Navbar() {
  return (
    <div>
        <div className='fixed top-0 left-0 w-full bg-black text-white bg-black/50 z-50 '>
          <div className='container mx-auto flex justify-evenly items-center flex-wrap'>

            <div className='left-menu border-2 border-yellow-300 px-5 py-2 cursor-pointer rounded-md hover:bg-yellow-300 font-bold hover:text-black transition duration-300 '>
              <p>start</p>
            </div>
            <div className='center-menu text-white hidden lg:block'>
              <div className='flex items-center justify-center gap-x-6 font-bold text-lg flex-wrap '>
                <a href="#" className='hover:text-yellow-300 duration-300 transition p-2'> Home</a>
                <a href="#" className='hover:text-yellow-300 duration-300 transition p-2'> About </a>
                <a href="#" className='hover:text-yellow-300 duration-300 transition p-2'> Services </a>
                <a href="#" className='hover:text-yellow-300 duration-300 transition p-2'> Sample </a>
                <a href="#" className='hover:text-yellow-300 duration-300 transition p-2'> Team </a>
                <a href="#" className='hover:text-yellow-300 duration-300 transition p-2'> Contact </a>
              </div>

            </div>
            <div className='right-menu flex items-center cursor-pointer'>
              <h1 className='text-xl'>Kasouka</h1>
              <img src="/logo.png" className='w-14  ' />
            </div>

          </div>
        </div>
    </div>
  )
}
