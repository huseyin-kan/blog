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
      <button className='swapButton centered tde' onClick={prevSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        {textData.map((obj,index)=>{
          return (
            <div key={index} className={slideIndex === index + 1 ? 'relative flex flex-col w-2/3 my-4 centered gap-6 rounded-md shadow-md bg-gray-600/30 px-4 py-4':'hidden'}>
            <h6 className='text-sm text-slate-300 absolute right-4 top-4 bg-slate-600 w-8 h-8 centered rounded-full'>{slideIndex}</h6>
            <h1 className='font-bold text-xl'>{textData[index].header}</h1>
            <div className='text-center'>
              {textData[index].main}
            </div>
            <h6 className='text-sm text-slate-600 italic'>Open to work</h6>
          </div>
          )
        })}
        <button className='swapButton centered tde' onClick={nextSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
    </>
  )
}
