import React from 'react'
import location from '../images/location.webp'
const Contact = () => {
  return (
    <div>
      <h1>
        <center className='font-bold text-2xl mt-3'>Feel free to Contact Us</center>
        </h1>
        <img src={location} alt="" className='w-[83rem] ml-3 h-[34rem]'/>
        <div className="container contact_div mb-2">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form>
            <div className="mb-3">
              <label htmlFor="example" className='form-label'>Fullname</label>
        <input type="text" className="form-control" id="email" placeholder="Enter Fullname" name="Fullname"/>
      </div>
      <div className="mb-3">
      <label htmlFor="example" className='form-label'>Email Address </label>
        <input type="password" className="form-control" placeholder="Enter your Email Address" name="pswd"/>
      </div>
      <div className="mb-3">
      <label htmlFor="example" className='form-label'>Description</label>
        <textarea type="textarea" className="form-control" placeholder="Enter your Description" rows={3} name="pswd"></textarea>
      </div>
    <button type="submit" className="btn btn-primary mt-3 text-slate-950">Submit</button>
            </form>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Contact
