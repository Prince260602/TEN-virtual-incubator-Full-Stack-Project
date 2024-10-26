import React from 'react'

const Activements = () => {
  return (
    <div className='sm:h-[130px]  py-1 text-black flex flex-wrap gap-8 bg-[rgb(207,240,197)] px-[10%] justify-center items-center'>
                <div className='flex flex-col  gap-1  border-gray-500 w-[110px] '>
                    <h1 className='text-3xl text-black text-bold font-bold'>310+</h1>
                    <p className='text-gray-700 text-xl'>Startups</p>
                </div>
                <div className='flex flex-col gap-1  border-gray-500 w-[110px] '>
                    <h1 className='text-3xl text-black text-bold font-bold'>160+</h1>
                    <p className='text-gray-700 text-xl'>Partners</p>
                </div>
                <div className='flex flex-col gap-1  border-gray-500 w-[110px] '>
                    <h1 className='text-3xl text-black text-bold font-bold pl-4'>900+</h1>
                    <p className='text-gray-700 text-xl flex space-x-0'><p className='mr-2'>Jobs</p><p> created</p></p>
                </div>
                

            </div>
  )
}

export default Activements