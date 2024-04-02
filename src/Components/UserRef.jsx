import React,{forwardRef} from 'react'


const UserRef = (props,ref) => {
  return (
    <div>
       <input type="text" ref={ref} />
    </div>
  )
}

export default forwardRef(UserRef)
