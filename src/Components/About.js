import React from 'react'

export default function About() {
  return (
    <div className=' -z-40 h-screen px-10 py-6 flex pt-16'>
      <div className='basis-1/3 bg-gray-900 border-r-4 border-black rounded-l-md text-slate-300 px-8 transiton duration-300 py-4 shadow-md'>
        Photo
      </div>
      <div className='flex-col centered basis-2/3 bg-gray-900 rounded-r-md text-slate-300 shadow-md'>
        <div className='flex  justify-around items-center w-full'>
        <button className='swapButton centered tde'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <div className='flex flex-col w-2/3 centered gap-6 rounded-md shadow-md bg-gray-700/30 px-4 py-4'>
          <h1 className='font-bold text-xl'>Welcome</h1>
          <div className='text-center'>
            First of all, welcome to the person that visits my website.
             I made this site because of work opportunities,
              but if there are any suggestions to improve myself or this website,
               you can contact me (and I will appreciate it).
          </div>
          <h6 className='text-sm text-slate-600 italic'>Open to work</h6>
        </div>
        <button className='swapButton centered tde'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
        </div>
      </div>
    </div>
  )
}
