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
  const PropertyCard = (props) => {

const {title , img ,location , price ,description} = props
const dispatch = useDispatch()

const handelClick = (props)=>{
dispatch(AddCart(props))
}

    return (
     <Card className="lg:w-3/12 md:w-3/12 w-full mx-4">
        <img src={img} className="w-full h-60"alt="" />
        <div className="w-full flex justify-between my-3">
        <CardTitle className="text-xl font-semibold ml-2">{title}</CardTitle>
        <CardContent className="text-2xl font-medium mr-3">
        {price}
        </CardContent>
        </div>
        <CardDescription className="text-xl mb-3"><p>{description}</p></CardDescription>
        
        <CardFooter className="flex justify-between"><Button className="w-3/5" onClick={()=>handelClick} >ADD TO CART</Button>
        <img src="public/favicon.png" className="w-12 h-12 " alt="" />
        </CardFooter>
      </Card>
      
      
      
       
    )
  }
  export default PropertyCard