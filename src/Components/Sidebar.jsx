import React from 'react'
import { CiHome } from "react-icons/ci";
import { IoAnalytics } from "react-icons/io5";
import { IoAnalyticsSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { FaRegChartBar } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineFeedback } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
        <div className='bg-gray-50 sticky w-64 rounded-md space-y-4 p-5 shadow-md'>
            <div>
                <h3 className='text-gray-300 font-bold text-sm'>Dashboard</h3>
                <ul className='space-y-2'>
                    <Link to="/">
                        <li className='hover:bg-indigo-100 cursor-pointer transition-all duration-200 ease-in-out text-gray-600 rounded-lg px-1 py-1 flex items-center '>
                            <CiHome className='mx-1' />
                            Home
                        </li>
                    </Link>
                    <li className='hover:bg-indigo-100 cursor-pointer transition-all duration-200 ease-in-out text-gray-600 rounded-lg px-1 py-1 flex items-center'>
                        <IoAnalytics className='mx-1' />
                        Analytics
                    </li>
                    <li className='hover:bg-indigo-100 cursor-pointer transition-all duration-200 ease-in-out text-gray-600 rounded-lg px-1 py-1 flex items-center'>
                        <IoAnalyticsSharp className='mx-1' />
                        Sales
                    </li>
                </ul>
            </div>

            <div>
                <h3 className='text-gray-300 font-bold'>Quick Menu</h3>
                <ul className='space-y-2'>
                    <Link to='/users'>
                        <li className='hover:bg-indigo-100 cursor-pointer transition-all duration-200 ease-in-out text-gray-600 rounded-lg px-1 py-1 flex items-center'>
                            <FaRegUser className='mx-1' />
                            Users
                        </li>
                    </Link>
                    <Link to="/products">
                        <li className='hover:bg-indigo-100 cursor-pointer transition-all duration-200 ease-in-out text-gray-600 rounded-lg px-1 py-1 flex items-center'>
                            <LuShoppingBag className='mx-1' />
                            Products
                        </li>
                    </Link>
                    <li className='hover:bg-indigo-100 cursor-pointer transition-all duration-200 ease-in-out text-gray-600 rounded-lg px-1 py-1 flex items-center'>
                        <FaRegChartBar className='mx-1' />
                        Sales
                    </li>
                </ul>
            </div>

            <div>
                <h3 className='text-gray-300 font-bold'>Notification</h3>
                <ul className='space-y-2'>
                    <li className='hover:bg-indigo-100 cursor-pointer transition-all duration-200 ease-in-out text-gray-600 rounded-lg px-1 py-1 flex items-center'>
                        <MdOutlineMail className='mx-1' />
                        Mail
                    </li>
                    <li className='hover:bg-indigo-100 cursor-pointer transition-all duration-200 ease-in-out text-gray-600 rounded-lg px-1 py-1 flex items-center'>
                        <MdOutlineFeedback className='mx-1' />
                        Feedback
                    </li>
                    <li className='hover:bg-indigo-100 cursor-pointer transition-all duration-200 ease-in-out text-gray-600 rounded-lg px-1 py-1 flex items-center'>
                        <MdOutlineMessage className='mx-1' />
                        Message
                    </li>
                </ul>
            </div>

            <div>
                <h3 className='text-gray-300 font-bold'>Staff</h3>
                <ul className='space-y-2'>
                    <li className='hover:bg-indigo-100 cursor-pointer transition-all duration-200 ease-in-out text-gray-600 rounded-lg px-1 py-1 flex items-center'>
                        <MdOutlineMail className='mx-1' />
                        Manage
                    </li>
                    <li className='hover:bg-indigo-100 cursor-pointer transition-all duration-200 ease-in-out text-gray-600 rounded-lg px-1 py-1 flex items-center'>
                        <MdOutlineFeedback className='mx-1' />
                        Analytics
                    </li>
                    <li className='hover:bg-indigo-100 cursor-pointer transition-all duration-200 ease-in-out text-gray-600 rounded-lg px-1 py-1 flex items-center'>
                        <MdOutlineMessage className='mx-1' />
                        Report
                    </li>
                </ul>
            </div>
        </div>
  )
}
