import React from 'react'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts'

export default function Chart({title,data,datakey,grid}) {
  return (
    <div className=' shadow-[0_4px_15px_rgba(0,0,0,0.1)] p-6'>
        <h3 className='font-bold text-xl mb-3'>{title}</h3>  
        <ResponsiveContainer width="100%" aspect={4}>
          <LineChart data={data}>
            <XAxis dataKey="name" strok='#5550bd'/>
            <Line dataKey = {datakey} type="monotone" stroke="#4c51bf"/>
            <Tooltip />
            {grid && <CartesianGrid stroke='#d0dfdf' strokeDasharray={'10'}/>}
          </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
