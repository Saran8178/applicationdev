import { Facebook, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <div class="w-full h-[8vh]  flex flex-row justify-center items-center bg-primary/100">
                {/* //logo */}
                <div class='h-full w-3/4 flex flex-row justify-center items-center text-3x1 font-bold gap-10 text-white'>
               copuright 2024
                </div>
                <div class='h-full w-1/4 flex flex-row justify-center items-center text-3x1 font-bold gap-10 text-white'>
             <a href='google.com' target='_blank'>
                <Facebook />
             </a>
             <a href='twitter.com' target='_blank'>
                <Twitter />
             </a>
                </div>
                </div>
    </div>
  )
}

export default Footer
