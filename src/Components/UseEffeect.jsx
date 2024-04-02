import React, { useEffect, useState } from 'react'
import './UseEfffect.css'

const UseEffeect = () => {


const [count,setCount] =useState(0)

 useEffect(()=>{
      
 })


  return (
    <div>
         {/* <ion-icon name="cart-outline"></ion-icon> */}
         {/* <h3  id='data' style={{marginTop:"1%", marginLeft:"10%",marginBottom:"-25px"}}>0</h3> */}
         <img className='cart' src="https://static.vecteezy.com/system/resources/previews/019/787/018/non_2x/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png" alt=""/>
         <button style={{marginTop:"2%"}} onClick={()=>setCount(count+1)} >Click Me</button>
         <h1>{count}</h1>
    </div>
  )
}

export default UseEffeect
