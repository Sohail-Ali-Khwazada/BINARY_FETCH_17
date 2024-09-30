import React from 'react'
import { Outlet } from 'react-router-dom'

export function Contents() {
  return (
    <div className='w-full border-2 border-red-800'>
      <Outlet/>
    </div>
  )
}
