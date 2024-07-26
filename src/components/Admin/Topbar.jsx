import React from 'react'

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
const Topbar = () => {
  return (
    <div className='h-[8vh] w-full  flex justify-end items-end bg-white'>
      <div  className='90% flex items-end justify-end gap-4'>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
        </Avatar>


      </div>
    </div>
  )
}

export default Topbar
