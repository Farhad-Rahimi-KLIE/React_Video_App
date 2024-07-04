import React from 'react'
import {useSearchParams} from 'react-router-dom'
const SinglePage = () => {
    const [params] = useSearchParams();

  return (
    <div>
      <span><a href="/product" className='font-bold ml-8'>Home</a> / <span className='font-bold text-red-700'>{params.get("title")}</span></span>
       <div>
        <video controls src={params.get("url")} className='w-[50rem] h-[20rem] m-auto mt-5' alt="" />
    </div>
    </div>
  )
}

export default SinglePage