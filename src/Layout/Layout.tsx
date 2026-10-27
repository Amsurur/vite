import React from 'react'
import { Link, Outlet } from 'react-router'

const Layout = () => {
  return (
    <div>
        <nav className='flex gap-10 p-3 '>
            <Link to={"/"}>Home</Link>
            
            <Link to={"/about"}>About</Link>
            <Link to={"/products"}>Products</Link>
            <Link to={"/login"}>Login</Link>
        </nav>

        <div>
          
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout