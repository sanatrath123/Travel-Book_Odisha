import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import authService from "../Appwrite/Auth"
import { Login } from '@/Redux-store/AuthSlice'
import { useDispatch } from 'react-redux'
import { useNavigate , Link} from 'react-router-dom'
import { Input  } from '@/components/ui/input'
import { Button} from "@/components/ui/button"
import { Mail,  Loader2} from "lucide-react"
import servise from "@/Appwrite/Config";

const Signup = () => {

  const { register, handleSubmit} = useForm()
const dispatch = useDispatch()
const [loader , setLoader] = useState(false)
const navigate = useNavigate()

  const onSubmit = async (data)=>{
    setLoader(true)
    const user = await authService.CreateAccount(data)
    if(user){
      const logeduser = await authService.LoginAccount(data)
      if(logeduser) {
        const currentUser = await  authService.GetCurrentUser()
        if(!currentUser) return
        dispatch(Login(currentUser))
        servise.AddUserToDB(currentUser)
        navigate("/")
      }
}}

  return (
    <div className="flex justify-center items-center h-screen">
    <div className="bg-sky-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 lg:w-2/5 w-11/12">
      <h2 className="text-2xl mb-8 text-center lg:text-3xl lg:font-semibold">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <Input
          placeholder="EMAIL"
          {...register("email",{required:true})}/>
        </div>
      

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
         <Input
         placeholder="FULL-NAME"
         {...register("name",{required:true})}/>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <Input
          placeholder="********"
          {...register("password",{required:true})}/>
        </div>
        <div className="flex items-center justify-center">
          
    { loader ?  <Button disabled className="w-3/5">
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button> : 
    <Button  type="submit" className="w-3/5 mx-auto">
      Sign Up
        </Button>      
      }
        </div>
        <div className='w-full flex flex-col justify-center mt-4 '>
         <span className='flex mx-auto text-gray-800 font-medium lg:text-xl text-sm'>IF YOU ALREADY HAVE AN ACCOUNT</span>

    <Button className="w-4/5 mx-auto mt-4" onClick={()=>navigate('/login')}>
      <Mail className="mr-2 h-4 w-4" />Login with Email
    </Button>
         </div>

        
      </form>

    </div>
  </div>
  )
}

export default Signup