import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { RemoveCart } from '@/Redux-store/RoomSlice'
const Cart = () => {
const cartItem = useSelector((state)=>state.room.cart)
const dispatch = useDispatch()
//delete 
// const handleClick= ()=>{
// dispatch(RemoveCart(item))
// }

  return (
    <div className='flex w-11/12 justify-center flex-col mx-auto'>
      <h1 className='text-3xl font-semibold mx-auto mt-2'>CART SECTION</h1>
      <div className='lg:w-2/5 md:3/5 w-full bg-sky-300  my-3 flex justify-between mx-auto'>
<img src="public/roomImg/room1.jpeg" alt="" className='w-3/12 aspect-square' />
<div className='  my-auto lg:ml-2 flex flex-col justify-center'>
<h2 className='text-3xl font-semibold mx-auto'>THIS IS title</h2>
<h2 className='text-2xl mx-auto'>$200/nigth</h2>
<span className='hidden lg:flex md:flex '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati odio laborum perspiciatis explicabo harum blanditiis quae corrupti quibusdam alias esse? Lorem ipsum dolor sit </span>
</div>

<img src="public/deleteCart.png" alt="" className='w-9 h-9 my-auto pr-2'  />
{/* onClick={()=>handleClick(item)} */}
      </div>
      
    </div>
  )
}

export default Cart