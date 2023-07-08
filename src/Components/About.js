import React from 'react'
import Slider from './Parts/About/Slider'

export default function About() {
  

  return (
    <div className='-z-40 h-full px-10 py-6 flex md:flex-row flex-col pt-16'>
      <div className='md:imgMd md:centered bg-gray-800 centered '>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIynxwpEPFhGpU7q1R_FGuH7Kj__INOSQjhRptUaco5unvKjzT7S3ogOqASmM-UMEYugk&usqp=CAU' alt='Profile Pic' className='md:rounded-md  rounded-full h-20 w-20 m-4   shadow-md md:w-full md:h-full object-contain'></img>
      </div>
      <div className='flex-col centered rounded-md grow md:basis-2/3 bg-gray-800 md:rounded-r-md text-slate-300 shadow-md'>
        <div className='flex justify-around items-center w-full overflow-hidden'>
        <Slider/>
        </div>
      </div>
    </div>
  )
}
