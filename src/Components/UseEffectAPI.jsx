import React, { useEffect, useState } from 'react'
import './UseEffectAPI.css'

const UseEffectAPI = () => {

  const [user,setUser]= useState([])

  const getusers = async()=>{
    const response =  await fetch("https://jsonplaceholder.typicode.com/todos")

    setUser(await response.json());
 
  }
  useEffect(()=>{
       getusers()
  },[])
  
  return (
   <>
   <h1 style={{textAlign:"center"}}>List of github users</h1>
     <div className="container-fluid mt-5">
      <div className="row text-center">

         
         {

            user.map((curElem)=>{
              <div className='col-10 col-md-4 mt-5'>
              <div className="card p-2">
                <div className="d-flex align-item-center">
                  <div className="img"><img  src=""alt="" className='rounded width="155"' /></div>
                  <div className="ml-3 w-90 h-0">
                    <h4 className='mb-0 mt-2 textLeft'>{curElem.title}</h4> <span className='textLeft'>Web Devloper</span>
                    <div className="pt-2 mt-2 bg-primary d-flex justifY-content-between rounded text-white stats">
                      <div className="d-flex flex-column"><span className='articles'>Artical</span> <span className='number-1'>38</span></div>
                      <div className="d-flex flex-column"><span className='followers '>Followers</span> <span className='number-2'>200</span></div>
                      <div className="d-flex flex-column"><span className='rating'>Rating</span> <span className='number-3'>4.4</span></div>
                    </div>
                  </div>
                </div>
                </div>
                </div>

            })

         }
              </div>
              </div>
          </>
        )}                 

          

  

export default UseEffectAPI
