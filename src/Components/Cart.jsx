import React from 'react'

const Cart = ({dalo}) => {
  const {main_vid, title} = dalo;
console.log(dalo)
  return (
    <div>
            <>
            <h1>This is Cart Page</h1>
            <video src={main_vid} alt="" />
            </>
    </div>
  )
}

export default Cart
