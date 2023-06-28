import React from 'react'

export default function Header() {
  return (
    <div className='flex justify-around px-8 py-4 bg-slate-300 text-slate-800 shadow-sm '>
      <div className='font-semibold'>
        Hüseyin Kan
      </div>
      <div className='flex gap-4 '>
        <div className='hover:cursor-pointer hover:text-slate-800/60 tde'>
            About me 
        </div>
        <div className='hover:cursor-pointer hover:text-slate-800/60 tde'>
            My projects
        </div>
        <div className='hover:cursor-pointer hover:text-slate-800/60 tde'>
            Contact
        </div>
        <div className='flex items-center justify-center '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 hover:cursor-pointer hover:-rotate-90 tde">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
        </div>
      </div>
    </div>
  )
}
