import React from 'react'
import { useParams } from 'react-router-dom'
import Chart from './Chart/Chart'
import { productData2 } from './Chart/chartData'

export default function Product() {
let params = useParams()
  
  return (
    <div className='w-full px-8'>
      <div className='flex flex-row justify-between items-center mb-5'>
        <h1 className='font-semibold text-3xl'>Product</h1>
        <button className='bg-teal-600 text-white rounded-md px-4 py-2 hover:bg-teal-500 duration-300 transition-all'>Create</button>
      </div>

      <div className='flex gap-x-10 items-stretch'>

        <div className='flex-1'>
          <Chart className='' title = "Sales in month" data = {productData2} datakey='sales'  />
        </div>

        <div className='flex-1 '>
          <div className='shadow-[0_4px_15px_rgba(0,0,0,0.1)] p-6 h-full '>
              
              <div className='flex items-center '>
                <img src="/images/product1.jpg" className='w-10 h-10 object-cover ' alt="" />
                <h3 className='font-bold text-xl'>Apple Airpods</h3>
              </div>

              <div className='w-1/2 ml-1 mt-6' >
                <div className='flex justify-between '>
                  <span className='font-semibold'>id : </span>
                  <span className='font-extralight'> 123 </span>
                </div>
                <div className='flex justify-between '>
                  <span className='font-semibold'>sales : </span>
                  <span className='font-extralight'> 5123 </span>
                </div>
                <div className='flex justify-between '>
                  <span className='font-semibold'>active : </span>
                  <span className='font-extralight'> yes </span>
                </div>
                <div className='flex justify-between '>
                  <span className='font-semibold'>in stock : </span>
                  <span className='font-extralight'> no</span>
                </div>

              </div>
              
          </div>
        </div>
      </div>
      
    </div>

  )
}
