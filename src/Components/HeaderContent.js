import React from 'react'
import HeaderContectBox from './HeaderContectBox'

export default function HeaderContent() {
  return (
    <div className="w-full h-full absolute top-0 flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10 max-w-6xl w-full">
        <HeaderContectBox />
        <HeaderContectBox />
        <HeaderContectBox />
        <HeaderContectBox />
      </div>
    </div>
  )
}
