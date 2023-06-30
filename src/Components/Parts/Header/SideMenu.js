import React from 'react'

export default function SideMenu({showMenu,visible,dark,changeTheme}) {
  return (
    <div className={`shadow-md w-60 h-screen fixed top-0 transition-all duration-500 ease-in-out flex-col centered bg-slate-800/50 backdrop-blur-sm gap-16 
    ${visible ? 'right-0 md:hidden' : '-right-full'}`}>
        <button className='text-red-600' onClick={showMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className='px-2 py-1 centered text-slate-700 rounded-md hover:bg-slate-300/70 tde'>About me</div>
        <div className='px-2 py-1 centered text-slate-700 rounded-md hover:bg-slate-300/70 tde'>My projects</div>
        <div className='px-2 py-1 centered text-slate-700 rounded-md hover:bg-slate-300/70 tde'>Contact</div>
        <div>
        <button className='centered' onClick={changeTheme}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
              className={`w-6 h-6 hover:cursor-pointer hover:stroke-1 tde ${dark ? "fill-yellow-400 stroke-slate-700" : "fill-black stroke-slate-700"}`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg> 
        </button>
        </div>
    </div>
  )
}
