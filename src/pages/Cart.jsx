import React, { useEffect, useState } from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { AddCart, RemoveCart } from '@/Redux-store/RoomSlice'
import { Button } from '@/components/ui/button'
import servise from '@/Appwrite/Config'
const Cart = () => {
const cartItem = useSelector((state)=>state.room.cart)
const cartfromDb = useSelector((state)=>state.auth.Userdata?.[0]?.cart)

const dispatch = useDispatch()
//delete 
const handleClick= (item)=>{
dispatch(RemoveCart(item?.id))
if(item?.$id){
  servise.RemoveCartDB(item.$id)
}
}
//calulating the cart
let totalcart = 0

//update on the state the 1st rander 
useEffect(()=>{
  //TODO:rander on every cycle , fix it later
cartfromDb && cartfromDb.forEach((item)=>{
dispatch(AddCart(item))
})
},[])

  return (
    <div className='flex w-11/12 justify-center flex-col mx-auto'>
      <h1 className='text-3xl font-semibold mx-auto mt-2'>CART SECTION</h1>
   {
cartItem.length ? cartItem.map((item)=>(
  
  <div className='lg:w-2/5 md:3/5 w-full bg-gray-100 border-gray-800 border-2 p-2  my-3 flex justify-between mx-auto rounded-2xl' key={item.id}>
  <img src={item.img} alt="" className='w-3/12 aspect-square rounded-3xl' />
  <div className='  my-auto lg:ml-2 flex flex-col justify-center'>
  <h2 className='text-3xl font-semibold mx-auto'>{item.title}</h2>
  <h2 className='text-2xl mx-auto'>{item.price}</h2>
  <span className='hidden lg:flex md:flex '>{item.description}</span>
  <span className='hidden'>{totalcart = totalcart + item.intPrice}</span>
  </div>
  
  <img src="public/deleteLogo.png" alt="" className='w-9 h-9 my-auto pr-2' onClick={()=>handleClick(item)}  />
  
        </div>
)) : <div className="bg-cover bg-center w-10/12 h-[34rem] mx-auto mt-3 " style={{backgroundImage: "url('public/0item.png')"}}>
<h2 className='text-3xl font-semibold mx-auto my-auto'>SORRY YOU DONT HAVE ANYTHING</h2>
</div>
   }
      
    <div className='lg:w-2/5 md:3/5 w-full h-28 mx-auto rounded-2xl bg-sky-300 mt-8 flex justify-center'>
        <h1 className='text-4xl my-auto font-bold'>PROCCED TO PAY ${totalcart}</h1>
<Button className="text-2xl my-auto ml-4 rounded-2xl">BUY-NOW</Button>
      </div>
    </div>
  )
}

export default Cart