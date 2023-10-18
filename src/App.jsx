import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import States from './component/States'
import Dispaly from './Dispaly'
import  "./global.css"

const App = () => {
  return (
    <BrowserRouter>
      |
        <Routes>
          <Route path='/' element={<States/>}/>
          <Route path='/display' element={<Dispaly/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App