import React from 'react'

import Usestate from './Components/Usestate'
import Event from './Components/Event'
import UseEffeect from './Components/UseEffeect'
import UseEffectAPI from './Components/UseEffectAPI'
import UseRef from './Components/UseRef'
import UserContextProvider from './Components/UseContext/UserContextProvider'
import Login from './Components/UseContext/Login'
import Profile from './Components/UseContext/Profile'

const App = () => {
  return (

<UserContextProvider>

  <h1>hello user pls login the page</h1>
        <Login/>
        <Profile/>
</UserContextProvider>

    // <div>
    //  {/* <Usestate/> */}
    //  {/* <Event/> */}
    //  {/* <UseEffeect/> */}
    //  {/* <UseEffectAPI/> */}
    //  {/* <UseRef/> */}
    // </div>
  )
}

export default App
