import React, { useState } from 'react'
import {textData} from '../../../datas/textData.js'


export default function Slider() {

  const [slideIndex,setSlideIndex] = useState(1)

  const nextSlide = () =>{
      if(slideIndex !== textData.length){
          setSlideIndex(slideIndex+1)
      }
      else if(slideIndex === textData.length){
          setSlideIndex(1)
      }
      console.log(slideIndex)
  }
  const prevSlide = () =>{
    if(slideIndex !== 1){
      setSlideIndex(slideIndex-1)
  }
  else if(slideIndex === 1){
      setSlideIndex(textData.length)
  }
  }

  return (
    <>
      <button className='swapButton centered tde' disabled={slideIndex===1} onClick={prevSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        {textData.map((obj,index)=>{
          return (
            <div key={index} className={slideIndex === index + 1 ? 'relative flex flex-col w-2/3 z-auto h-[450px]  my-4 centered gap-6 rounded-md shadow-md bg-gray-600/30 px-4 py-4 tde':'hidden'}>
            <h1 className='font-bold text-l md:text-xl'>{textData[index].header}</h1>
            <div className={`text-center  text-md md:text-l`}>
              {textData[index].main}
            </div>
            <h6 className='text-sm text-slate-600 italic'>Open to work</h6>
            <div className='centered gap-2 absolute bottom-4 inset-x-0 '>
              {Array.from({length:5}).map((item,index)=>(
                <div className={`w-4 h-4 rounded-full bg-gray-500 ${slideIndex === index + 1 ? 'opacity-50 transition-opacity ease-in-out duration-300' :'opacity-100 transtion-all duration-300'}`}></div>
              ))}
            </div>
          </div>
          )
        })}
        <button className='swapButton centered tde' disabled={slideIndex===5} onClick={nextSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
    </>
  )
}
