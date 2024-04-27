import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Button } from "@/components/ui/button"
  import React from 'react'
  import { useDispatch } from "react-redux"
  import { AddCart } from "@/Redux-store/RoomSlice"
import { AddFavourite } from "@/Redux-store/RoomSlice"

  const PropertyCard = (props) => {

const {title , img ,location , price ,description} = props
const dispatch = useDispatch()

const AddFav = ()=>{
dispatch(AddFavourite(props))
}

    return (
     <Card className="lg:w-3/12 md:w-3/12 w-full mx-4 mb-5">
        <img src={img} className="w-full h-60"alt="" />
        <div className="w-full flex justify-between my-3">
        <CardTitle className="text-xl font-semibold ml-2">{title}</CardTitle>
        <CardContent className="text-2xl font-medium mr-3">
        {price}
        </CardContent>
        </div>
        <CardDescription className="text-xl ml-2 mb-3"><p>{description}</p></CardDescription>
        
        <CardFooter className="flex justify-between"><Button className="w-3/5" onClick={()=>{dispatch(AddCart(props))
console.log(props)}} >ADD TO CART</Button>
        <img src="public/favicon.png" className="w-12 h-12 " alt=""
        onClick={AddFav}
        />
        </CardFooter>
      </Card>
      
      
      
       
    )
  }
  export default PropertyCard