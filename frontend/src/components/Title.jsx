import React from 'react'

const Title = ({text1, text2, text3}) => {
  return (
    <div className='grid grid-rows-2 gap-2 justify-items-center text-center items-center mb-3'>
      <div className=''>
      <p className='text-[#1E1E1E] font-semibold lg:text-3xl text-xl'>{text1} <span></span> <span className='text-[#014BAE] font-semibold'>{text2}</span></p>
      </div>
    </div>
    
  )
}

export default Title