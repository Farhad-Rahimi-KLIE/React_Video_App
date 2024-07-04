import React from 'react'
import samsung from '../images/Samsung4.jpeg'
const Grid = () => {

  return (
    <div>
      <div className='overflow-y-scroll overflow-x-hidden w-[80rem] h-[651px] -mt-[34rem]'>
      <div className='container grid grid-cols-3 px-[15rem] pb-[10rem] -mt-11'>
              <div className='w-[15rem] ml-[8rem] h-[10rem] mt-[6rem] bg-white shadow-2xl'>
              <img src={samsung} className='w-[16rem] h-[10rem]' alt="" />
              <span className='font-bold ml-[0rem]'>Farhad</span>
              <span className='font-bold ml-[7rem]'>Rahimi Klie</span>
              </div>
    </div>
    </div>
    </div>
  )
}

export default Grid
