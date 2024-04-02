import React, { useRef } from 'react'
import './UseRef.css'
import UserRef from './UserRef'

const UseRef = () => {

 let inputRef= useRef(null)

 const handleClick = ()=>{
     
       inputRef.current.value="1000";
       inputRef.current.style.color="red";
       inputRef.current.focus();
  
 }
  
  return (
    <div>
      <h1>using useref in reacr js hooks</h1>
      <UserRef ref={inputRef}/>
      <button onClick={handleClick}>Update input</button>
    </div>
  )
}

export default UseRef
