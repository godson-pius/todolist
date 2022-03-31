import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../components/Login'
import Todolist from '../components/Todolist'
import PrivateRoute from '../PrivateRoute';

function CustomRoutes() {
  return (
    <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/todolist" element={ <Todolist/> } />
        </Route>
        <Route path="/login" element={ <Login/> } />
        <Route path="/" element={ <Login/> } />
        <Route path="*" element={ <h1>404 PAGE</h1> } />
    </Routes>
  )
}

export default CustomRoutes