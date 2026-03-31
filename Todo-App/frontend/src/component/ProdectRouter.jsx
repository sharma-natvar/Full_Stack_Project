import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProdectRouter = () => {
  const auth = sessionStorage.getItem('id')
  console.log(auth , 'auth');
    return auth ? <Outlet/> : <Navigate to={'/'}/>
}

export default ProdectRouter