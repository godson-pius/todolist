import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoute() {

    const isLoggedIn = localStorage.getItem('loggedIn')
    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute