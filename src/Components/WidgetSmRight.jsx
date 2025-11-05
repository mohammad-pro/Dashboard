import React from 'react'
import { dataTransactions } from './Chart/chartData'

export default function WidgetSmRight() {
  return (
    <div className='w-full shadow-[0_4px_15px_rgba(0,0,0,0.1)] p-6 mt-5 ml-6'>
        <h3 className='font-bold text-xl'>Latest transactions</h3>
        <table class="table-auto w-full">
            <thead className=''>
                <tr className='text-left'>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody  >
                {
                    dataTransactions.map((item) => (
                        <tr  className='' >
                            
                            <td className='flex items-center mt-5'>
                                <img src={item.img} className='w-12 h-12 mr-3 rounded-full object-cover' alt="" />
                                {item.customer}</td>
                            <td className='font-light'>{item.date} </td>
                            <td className='font-light'>{item.amount}</td>
                            <td className=''><button className={`p-2  w-20 text-sm   ${item.status == 'Approved' ? 'bg-green-50 rounded-full text-green-600' : item.status == 'Declined' ? 'bg-red-50 text-red-600 rounded-full' : 'text-blue-600 bg-blue-50 rounded-full'}`}>{item.status}</button> </td></tr>))}



            </tbody>
        </table>
    </div>
  )
}
