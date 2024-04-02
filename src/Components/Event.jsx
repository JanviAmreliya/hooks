import React, { useState } from 'react'
import './Event.css'
import Usestate from './Usestate'

const Event = () => {
    const purple = "#8e44ad";
    const [bg, setBg]=useState(purple)
    const [lname,setLname] = useState("click  me")
  
    const bgChange = () => {
     let newbg = "#ffc0cb";
     setBg(newbg);
     setLname("oucch")
    };

    const bgBack =()=>{
        let newbg = "	#FFFF00";
         setBg(newbg)
         setLname("yahhh")
    };

  return (
  
    <div style={ {backgroundColor: bg} }>
      <button style={{backgroundColor:"black"}} onClick={bgBack} onMouseLeave={bgChange}>  {lname} </button>
    </div>

   
  )
}

export default Event
