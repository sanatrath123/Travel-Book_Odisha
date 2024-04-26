import authService from '@/Appwrite/Auth'
import React from 'react'
import { useState } from 'react'
import { Link ,useNavigate } from 'react-router-dom'
import { Logout } from '@/Redux-store/AuthSlice'
import { useDispatch } from 'react-redux'

const Header = () => {
  const [showmenu , setShowmenu]= useState(false)
const dispatch = useDispatch()
const naviagte = useNavigate()

const handleLogout = async ()=>{
try {
  const response  = await authService.LogoutAccount()
  if(response ){
dispatch(Logout())
naviagte('/login')
  }
} catch (error) {
  console.log("ERROR IN HANDLE LOGOUT",error)
}
}


  return (
    <div className='flex w-full  justify-between fixed top-1 z-10  bg-transparent'>

    <img src="public/main-logo.png" alt="LOGO" className="lg:h-28 lg:w-28 h-12 w-12 my-auto lg:ml-8" />
    <ul className="lg:flex w-6/12 mt-3 hidden  ">
        <li className="text-2xl font-semibold mx-4 px-3 my-auto"><Link to={'/'}>HOME</Link></li>
        <li className="text-2xl font-semibold mx-4 px-3 my-auto">
        <Link to={'/'}>ABOUT</Link>
          </li>
        <li className="text-2xl font-semibold mx-4 px-3 my-auto">
        <Link to={'/'}><img src="public/cart-logo.png" alt="" className="h-16 w-16" /></Link>
          
        </li>
        <li className="text-2xl font-semibold mx-4 px-3 my-auto">
        <Link to={'/'}><img src="public/favicon-logo.png" alt=""  className="h-12 w-12"/></Link></li>
        <li className="flex text-2xl font-semibold mx-4 px-3 my-auto">
        <Link className='flex' to={'/'}>FILTER <img src="public/filter-logo.png" alt="" className="w-9 h-9 ml-2" /></Link> </li>
        <li onClick={handleLogout} className="text-2xl font-semibold mx-4 px-3 my-auto">LogOut</li>
    </ul>
    {/* for mobile */}
    
      <div className="w-3/5 flex justify-end mr-3 my-auto lg:hidden">
      <img onClick={()=>setShowmenu(!showmenu)} src="public/menubar.jpg" alt="" className="h-8 w-8" />
     { showmenu &&
      <ul className="absolute bg-slate-200 px-6 top-12 w-24 h-40 flex flex-col justify-center ">
      <Link to={'/'} className="text-lg cursor-pointer mr-4">HOME</Link>
    <Link to={'/demo'} className="text-lg cursor-pointer mr-4">About</Link>
    <Link to={'/'} className="text-lg cursor-pointer mr-4">CART</Link>
    <Link to={'/'} className="text-lg cursor-pointer mr-4">Favorite</Link>
    <Link to={'/filters'} className="text-lg cursor-pointer">Filters</Link>
      <li onClick={handleLogout} className="text-lg">LogOut</li>
      </ul>
       }

    </div>
        </div>
  )

}

export default Header