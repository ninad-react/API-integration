import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Edit from './components/Edit'
import Add from './components/Add'

const AllRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/add' element={<Add />} />
            <Route path='/edit/:id' element={<Add />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes