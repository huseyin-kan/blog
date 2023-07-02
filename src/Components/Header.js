import React, { useEffect, useState } from 'react'
import SideMenu from './Parts/Header/SideMenu'

export default function Header() {
  const [visible,setVisible] = useState(false);
  const [dark,setDark] = useState(false)

  const showMenu=()=>{
    setVisible(!visible)
  }
  const changeTheme=()=>{
    setDark(!dark)
  }

  useEffect(()=>{
    
      
  },[])

  return (
    <div className='flex fixed w-full justify-around text-lg px-8 py-4 bg-slate-800 text-slate-300 shadow-sm '>
      <div className='font-semibold'>
        Hüseyin Kan
      </div>
      <div className='hidden  md:flex gap-4 '>
        <div className='textOpacity tde'>
            About me 
        </div>
        <div className='textOpacity tde'>
            My projects
        </div>
        <div className='textOpacity tde'>
            Contact
        </div>
        <button className='centered' onClick={changeTheme}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 hover:cursor-pointer hover:stroke-1 tde ${dark ? "fill-yellow-400 stroke-slate-800":"fill-black stroke-white"}`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>     
      </button>
      </div>
      <button className='md:hidden centered' onClick={showMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 textOpacity tde">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
      </button>
      <SideMenu showMenu={showMenu} visible={visible} dark={dark} changeTheme={changeTheme}/>
    </div>
  )
}
