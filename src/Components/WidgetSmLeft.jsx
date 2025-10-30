import React from 'react'
import { MdVisibility } from "react-icons/md";
import { dataMember } from './Chart/chartData';

export default function WidgetSmLeft() {
  return (
    <div className='shadow-[0_4px_15px_rgba(0,0,0,0.1)] w-2/4 p-6 mt-5 '>
        <span className='font-bold text-xl'> New Join Members </span>
        <div className='flex flex-col mt-6'>
            <ul>
                {
                    dataMember.map((item) => (
                        <li key={item.id} className='flex justify-between items-center mb-6'>
                            <img src={item.img} className='w-12 h-12 rounded-full object-cover' alt={`Profile of ${item.name}`} />
                            
                            <div className='flex flex-col items-start w-2/3'>
                                <span className='font-medium text-gray-800'>{item.name}</span>
                                <span className='font-light text-gray-500'>{item.side}</span>
                            </div>
                            
                            <div className='cursor-pointer bg-indigo-50 px-4 py-2 rounded-md'>
                                <MdVisibility />
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}
