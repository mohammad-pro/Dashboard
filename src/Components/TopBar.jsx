import React from 'react'
import { IoMdSettings } from "react-icons/io";
import { TfiWorld } from "react-icons/tfi";
import { FaRegBell } from "react-icons/fa";


export default function TopBar() {
  return (
    <div className='sticky pt-2 z-50 w-full '>
        <div className='flex flex-row justify-between items-center '>

            <div>
                <p className='text-indigo-800 font-bold text-2xl  '>Mohammad Admin</p>
            </div>  

            <div className='flex flex-row items-center justify-center gap-x-2'>

                <div className='relative cursor-pointer'>
                  <FaRegBell  className='text-xl text-gray-600' />
                  <span className='bg-red-600 text-white text-xs absolute right-0 -top-2 rounded-full w-4 h-4 flex justify-center items-center'> 2 </span>
                </div>

                <div className='relative cursor-pointer'>
                  <TfiWorld className='text-xl text-gray-600' />
                  <span className='bg-red-600 text-white text-xs absolute right-0 -top-2 rounded-full w-4 h-4 flex justify-center items-center'> 2 </span>

                </div>

                <div className='cursor-pointer'>
                  <IoMdSettings className='text-2xl text-gray-600' />
                </div>

                <img className='w-9 h-9 rounded-full cursor-pointer' src="/images/profile.jpg" alt="" />
            </div>  
        </div>

    </div>
  )
}
