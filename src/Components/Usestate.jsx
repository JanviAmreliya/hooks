import React, { useState } from 'react'
import './Usestate.css'

 const Usestate= () => {
    const [count,setCount] = useState(0)
     const AddNum =()=>{
        setCount(count+1)
     }
       const SubNum = ()=>{
          setCount(count-1)
     }
     const MulNum = ()=>{
        setCount(count*5)
     }
       const DivNum = ()=>{
        setCount(count/5)
}
  return (
    <div>
        <h1>{count}</h1>
     <ul>
         <li> <button onClick={AddNum}>Additon </button></li>
         <li><button onClick={SubNum}> Subcrition </button></li>
     </ul>
     <ul>
     <li> <button onClick={MulNum}> multiplication</button></li>
         <li> <button onClick={DivNum}>Division</button></li>

     </ul>
     </div>
  )
}

export default Usestate
