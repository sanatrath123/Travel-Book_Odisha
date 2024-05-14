import { useSelector,useDispatch } from "react-redux"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Input } from "@/components/ui/input"
import useAddRoomsToStore from "@/hooks/useAddRoomsToStore"
import { useForm } from "react-hook-form"
import {SearchRoom} from '../Redux-store/RoomSlice'
import PropertyCard from "@/components/PropertyCard"
import Searchbar from "./Searchbar"
const Landing =  () => {

    const authStatus = useSelector((state)=>state.auth.status)
const SearchItems = useSelector((state)=>state.room.SearchRoom)
   // const { register, handleSubmit} = useForm()
//const dispatch = useDispatch()
    //store the room using custom hooks 
   useAddRoomsToStore()

   //search function
  //  const onSubmit= (data)=>{
  //  dispatch(SearchRoom(data.value))
  //  }

 return(
  <div className="w-full flex justify-center flex-col bg-blue-700">

<div className="w-full flex justify-center mt-3 ">
<Searchbar/>
</div>

<div className="w-full lg:h-[43rem] h-[48rem] bg-blue-700 flex flex-nowrap justify-center">
<div className="lg:w-2/6 w-5/6 flex flex-col align-middle font-sans absolute top-32 lg:top-64 lg:left-40 left-4">
  <h1 className="flex flex-wrap my-auto text-5xl font-bold text-gray-100 ">Find The Ideal Home For You In Many Different Areas</h1>
  <span className="text-gray-100 text-lg font-thin mt-8">Welcome to  Real Estate site. Step into a world of possibilities where dreams find their perfect address. Whether you're searching for a cozy hotels & rooms, an investment opportunity, or your next business venture, we're here to guide you every step of the way. Explore our diverse listings, discover neighborhoods full of charm, and let us help you unlock the door to your future.</span>

  {
        !authStatus ?
        <Link to={"/login"} className="w-full flex justify-center"><Button className="lg:w-4/6 md:w-3/6 sm:w-2/6 h-12 text-xl  mt-5 mx-auto ">LOGIN</Button></Link>  : <Button className="lg:w-4/6 md:w-3/6 sm:w-2/6 h-12 text-xl  mt-5 mx-auto ">LOGIN</Button>
        
    }
</div>
<img src="public/home-logo.png" alt="" className="w-2/6 h-[37rem] bg-sky-300 absolute top-48 right-48 bg-cover hidden lg:flex"></img>
</div>
{/* <form onSubmit={handleSubmit(onSubmit)} className=" h-20 w-full bg-sky-300 flex justify-center ">
  <Input className="w-3/5 my-auto text-xl"
  placeholder="SERACH FOR ROOMS"
  {...register("value", {required:true})}
  />
  <Button type="submit" className=" my-auto ml-5"><img src="public/search-logo.jpg" className="h-9 w-10" alt="" /></Button>
</form> */}



{/* <div className="w-full flex justify-center mt-3 ">
<Searchbar/>
</div> */}

<div className="w-full flex flex-wrap mt-4 justify-center">
{
SearchItems && SearchItems.map((item)=>(
  <PropertyCard
  key={item.id}
   {...item}
  />
))
}
</div>

  </div> 
 )


}

export default Landing