import React from 'react'
import TopBar from '../Components/TopBar'
import Feature from '../Components/Feature/Feature'
import Chart from '../Components/Chart/Chart'
import {XAxisData} from '../Components/Chart/chartData'
import WidgetSmLeft from '../Components/WidgetSmLeft'
import WidgetSmRight from '../Components/WidgetSmRight'

export default function Home() {  
  return (
    <div className=' flex-1  ml-8 '>
        <Feature/>
        <Chart grid title='Mounth Sale' data= {XAxisData} datakey='sale'/>
        <div className="flex justify-between">
        <WidgetSmLeft/>
        <WidgetSmRight/>
      </div>
    </div>
  )
}
