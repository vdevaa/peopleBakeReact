import Link from 'next/link'
import React from 'react'

const CssGrid = () => {
  return (
    <div className='grid lg:grid-cols-3 sm:grid-cols-2 auto-rows-[150px] gap-x-6 gap-y-6 max-w-3xl mx-auto py-8'>
        
        <a href = 'cupcake'className='bg-rose-200 rounded-xl p-2 flex flex-col items-center justify-center cursor-pointer border-black border-2 hover:-translate-y-2 transition'>
            <h2>Browse Cupcakes</h2>
        </a>    

        <a href = 'bread' className='bg-rose-200 rounded-xl p-2 flex flex-col items-center justify-center cursor-pointer border-black border-2 hover:-translate-y-2 transition'>
            <h2>Browse Breads</h2>
        </a>
       
        <a href= 'doughnut' className='bg-rose-200 rounded-xl p-2 flex flex-col items-center justify-center cursor-pointe border-black border-2 hover:-translate-y-2 transition'>
            <h2>Browse Doughnuts</h2>
        </a>

        <a href = 'cake' className='bg-rose-200 rounded-xl p-2 flex flex-col items-center justify-center cursor-pointer border-black border-2 hover:-translate-y-2 transition'>
            <h2>Browse Cakes</h2>
        </a>

        <a href = 'sweet' className='bg-rose-200 rounded-xl p-2 flex flex-col items-center justify-center cursor-pointer border-black border-2 hover:-translate-y-2 transition'>
            <h2>Browse Sweets</h2>
        </a>

        <a href = 'danish' className='bg-rose-200 rounded-xl p-2 flex flex-col items-center justify-center cursor-pointer border-black border-2 hover:-translate-y-2 transition'>
            <h2>Browse Danishes</h2>
        </a>

    </div>
  )
}

export default CssGrid