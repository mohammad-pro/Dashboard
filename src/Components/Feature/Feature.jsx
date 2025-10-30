import React from 'react'
import { FaArrowDown } from "react-icons/fa";

export default function Feature() {
  return (
        <div className='flex justify-between gap-x-10  '>
            <div className= ' flex-1 p-6 shadow-[0_4px_15px_rgba(0,0,0,0.1)] rounded-sm cursor-pointer'>
                <span className='text-lg'>Revanue</span>
                <div className='flex flex-1 items-center '>
                    <span className='text-2xl font-bold'>$2,415</span>
                    <FaArrowDown  className='text-red-700 ml-3'/>
                </div>
                <span className='text-sm'>Compared to last month</span>
            </div>

            <div className='flex-1 p-6 shadow-lg rounded-sm'>
                <span className='text-lg'>Revanue</span>
                <div className='flex flex-1 items-center '>
                    <span className='text-2xl font-bold'>$2,415</span>
                    <FaArrowDown  className='text-red-700 ml-3'/>
                </div>
                <span className='text-sm'>Compared to last month</span>
            </div>

            <div className=' flex-1 p-6 shadow-lg rounded-sm'>
                <span className='text-lg'>Revanue</span>
                <div className='flex flex-1 items-center '>
                    <span className='text-2xl font-bold'>$2,415</span>
                    <FaArrowDown  className='text-red-700 ml-3'/>
                </div>
                <span className='text-sm'>Compared to last month</span>
            </div>
        </div>
  )
}
