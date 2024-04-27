import authService from "@/Appwrite/Auth";
import React,{useState} from "react";
import { useForm } from "react-hook-form";
import { Login } from "@/Redux-store/AuthSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { Mail,  Loader2} from "lucide-react"
import servise from "@/Appwrite/Config";


const LoginPage = () => {

  const { register, handleSubmit, } = useForm()
const dispatch = useDispatch()
const navigate = useNavigate()
const [loader , setLoader] = useState(false)
const [error , setError] = useState(null)

  const create = async (data)=>{
  setLoader(true)
      console.log(data)
      const User = await authService.LoginAccount(data)
      if(User != "PLEASE ENTER VALID EMAIL AND PASSWORD" && User){
          const currentUser = await authService.GetCurrentUser()
      const UserData = await servise.GetUser(currentUser)
       dispatch(Login(UserData))
  navigate("/")
  setError(null)
      }
      setLoader(false)
      setError(User)
  }


  return (
    <div className="flex justify-center items-center  h-screen ">
      <div className="lg:w-4/12 w-11/12   bg-sky-300 p-8 rounded-lg shadow-lg flex justify-center mx-auto flex-col ">
        <h2 className=" font-bold mb-4 flex mx-auto text-3xl sm:text-xl">Login</h2>
        <form  onSubmit={handleSubmit(create)} className="space-y-4 flex flex-col justify-center">
          <div>
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <Input
            placeholder="EMAIL"
            {...register("email",{required:true})}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
           <Input
          placeholder="********"
           {...register("password",{required:true})}/>
          </div>
         { loader ? <Button disabled className="w-3/5">
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button> :
      <Button className="w-3/5 mx-auto mt-4" type="submit"> Sign In</Button>
           }
         <span className="mx-auto mt-4">DONT HAVE AN ACCOUNT</span>
         <Button className="w-4/5 mx-auto mt-5" onClick={()=>navigate('/signup')}>
      <Mail className="mr-2 h-4 w-4" />Signup with Email
    </Button>
        </form>
        {
          error && <span className="text-lg text-red-700 mx-auto my-5">{error} </span>
        }
      </div>
    </div>
  );
};

export default LoginPage;


