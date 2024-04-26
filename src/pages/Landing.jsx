import { useSelector } from "react-redux"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Input } from "@/components/ui/input"

const Landing =  () => {

    const authStatus = useSelector((state)=>state.auth.status)

 return(
  <div className="w-full flex justify-center flex-col">


<div className="w-full h-[43rem] bg-blue-700 flex flex-nowrap justify-center">
<div className="lg:w-2/6 w-5/6 flex flex-col align-middle font-sans absolute top-32 lg:top-64 lg:left-40 left-4">
  <h1 className="flex flex-wrap my-auto text-5xl font-bold text-gray-100 ">Find The Ideal Home For You In Many Different Areas</h1>
  <span className="text-gray-100 text-lg font-thin mt-8">Welcome to  Real Estate site. Step into a world of possibilities where dreams find their perfect address. Whether you're searching for a cozy home, an investment opportunity, or your next business venture, we're here to guide you every step of the way. Explore our diverse listings, discover neighborhoods full of charm, and let us help you unlock the door to your future.</span>

  {
        !authStatus &&   
        <Link to={"/login"} className="w-full flex justify-center"><Button className="w-4/6 h-12 text-xl  mt-5 mx-auto ">LOGIN</Button></Link>
        
    }
</div>
<img src="public/home-logo.png" alt="" className="w-2/6 h-[37rem] bg-sky-300 absolute top-48 right-48 bg-cover hidden lg:flex"></img>
</div>
<div className=" h-20 w-full bg-sky-300 flex justify-center ">
  <Input className="w-3/5 my-auto text-xl"/>
  <Button className=" my-auto ml-5"><img src="public/search-logo.jpg" className="h-9 w-10" alt="" /></Button>
</div>
  </div> 
 )


}

export default Landing