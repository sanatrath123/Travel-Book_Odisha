import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Button } from "@/components/ui/button"
  import React, { useState } from 'react'
  import { useDispatch, useSelector } from "react-redux"
  import { AddCart } from "@/Redux-store/RoomSlice"
import { AddFavourite } from "@/Redux-store/RoomSlice"
import servise from "@/Appwrite/Config"

  const PropertyCard = (props) => {

const {title , img ,location , price ,description ,id} = props
const dispatch = useDispatch()
const owner  = useSelector((state)=>state.auth.Userdata?.[0]?.$id)
const cartlist = useSelector((state)=>state.room.cart)
const favlist = useSelector((state)=>state.room.favourite)
const [cheekCart, setCheekCart] = useState(false)
//add to cart 
const addToCart = ()=>{

  dispatch(AddCart(props))
 servise.ADDTOCART({...props , owner})
 
}

//add fav list
const addToFavlist = ()=>{
dispatch(AddFavourite(props))
}

//cheeking cart
 



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
        
        <CardFooter className="flex justify-between">{!cartlist.some((item)=>item.id == id) && <Button className="w-3/5" onClick={addToCart} >ADD TO CART</Button>}
       {!favlist.some((item)=>item.id == id) && <img src="public/favicon.png" className="w-12 h-12 " alt=""
        onClick={addToFavlist}
        />}
        </CardFooter>
      </Card>
      
      
      
       
    )
  }
  export default PropertyCard