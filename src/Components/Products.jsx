import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './style.css'
import star from '../images/stars.png'
import Menu from './Apis'
const Products = () => {
  const navigate = useNavigate();

  const [items,setItems] = useState(Menu)
  const [filter,setFilter] = useState(Menu)
  const [searchitem,setSearchItem] = useState("")
  const [reversed,setReversed] = useState({reversed : "id", sorted : false})


  const filterItem = (category)=>{
    const updatedList = Menu.filter((curElem)=>{
      return curElem.category === category;
    })
    setItems(updatedList)
  }

  const jaaan = ()=>{
    let list = document.getElementById("list");
    let first = document.getElementById("first");
    let second = document.getElementById("second");
    list.classList.toggle("hidden")
    if (first) {
    second.style.display = "block"
    first.style.display = "none"
    }else{
    first.style.display = "none"
    }
}

  const ReverseSort = (frk)=>{
    let text = document.getElementById("text");
    text.innerHTML = frk;
    setReversed({reversed : "id", sorted : !reversed.sorted})
    const www = [...items];
    www.reverse((userA, userB)=>{
      if (reversed.sorted) {
        return userB.id - userA.id;
      }else{
        return userA.id - userB.id
      }
    })
    setItems(www)
  }
 
  const handleChange = (event)=>{
    setSearchItem(event.target.value)
    const res = filter.filter((curElem)=>{
      if (searchitem === "") {
        return curElem;
      }else if(curElem.category.toLowerCase().includes(searchitem.toLowerCase())){
        return curElem
      }
    })
    setItems(res)
  }
  const filtrIt = ()=>{
    setItems(Menu)
  }

  return (
    <>
    <div className='flex justify-between'>
      <input type="text" name='text' className='rounded-sm ml-2 text-center bg-black text-white' value={searchitem} onChange={handleChange} placeholder='Enter for Search'/>
      <span className='font-bold mt-2'>{items.length} Products Listed</span>
      <div className="country_select" id="country" onClick={jaaan}>
          <div className="select">
      <svg xmlns="http://www.w3.org/2000/svg" className='w-6' id='first' viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" className='w-6' id='second' viewBox="0 0 448 512"><path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/></svg>
            <p id="text" className='ml-2'>Sort It</p>
          </div>

          <ul className="option_box" id="list">
            <li className="option" onClick={()=>ReverseSort("Sort & Reverse")}>
              <p>Sort & Reverse</p>
            </li>
          </ul>
        </div>
    </div>

   <div className='w-[17rem] h-[537px] mt-2 bg-white'>
      <h2 className='font-bold ml-5 mt-2'>Category</h2>
      <ul className="navbar-nav">
    <li className="nav-item ml-5 mt-2 cursor-pointer" onClick={()=>filterItem("kapil")}>Kapil</li>
    <li className="nav-item ml-5 mt-2 cursor-pointer" onClick={()=>filterItem("audio")}>Audio</li>
    <li className="nav-item ml-5 mt-2 cursor-pointer" onClick={()=>filterItem("doctor")}>Doctor</li>
    <li className="nav-item ml-5 mt-2 cursor-pointer" onClick={()=>filterItem("sandeep")}>Sandeep</li>
    <li className="nav-item ml-5 mt-2 cursor-pointer" onClick={()=>filterItem("tanay")}>Tanay</li>
  </ul>

  <h2 className='font-bold ml-5 mt-3'>Price</h2>
  <input type="range" className='w-[14rem] ml-5 mt-2'/>
  <button className="w-[11rem] h-[3.3rem] bg-amber-700 ml-5 mt-4 font-bold text-white" onClick={filtrIt}>Clear Filters</button>
     </div>
    {items.length === 0 && <div className='text-center -mt-[20rem] ml-[8rem] font-bold text-2xl text-red-900'>No Products Found</div>}

<div className='overflow-y-scroll overflow-x-hidden w-[80rem] h-[651px] -mt-[34rem]'>
<div className='container grid grid-cols-3 px-[15rem] pb-[10rem] -mt-11'>
  {
    items.map((curElem)=>{
      return (
        <div className='w-[15rem] ml-[8rem] h-[10rem] mt-[6rem] bg-white shadow-2xl' key={curElem.id}>
        <video src={curElem.main_vid} className='w-[16rem] h-[10rem]' alt=""/>
        <button className="w-[6rem] h-[2rem] ml-[9rem] bg-green-800  font-bold text-white" onClick={(e) => navigate(`/singlePage/?url=${curElem.main_vid}&title=${curElem.title}`)}>Select Item</button>
        </div>
      )
    })
  }
</div>
</div>
    </>
  )
}

export default Products
