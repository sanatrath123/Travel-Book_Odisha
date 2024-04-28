import React, { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { AddFavourite, RemoveFavourite } from '@/Redux-store/RoomSlice'
import servise from '@/Appwrite/Config'
const FavouriteRooms = () => {

const favlist = useSelector((state)=>state.room.favourite)
const dispatch = useDispatch()
const DBfavlist = useSelector((state)=>state.auth.Userdata?.[0]?.favlist)


//remove function
const RemoveFav = (item)=>{
dispatch(RemoveFavourite(item?.id))
if(item?.$id){
  servise.DELETEFAVLISTDB(item.$id)
}
}

//update store all the data come from db 
useEffect(()=>{
  DBfavlist && DBfavlist.forEach((item)=>{
    dispatch(AddFavourite(item))
  })
},[])

  return (
    <div className='flex justify-center flex-col w-full bg-gray-100'>
     <h1 className='mx-auto text-4xl font-semibold text-red-400 mt-4'>FAVOURITE LISTS</h1>
     {
    
      favlist.length ? favlist.map((item)=>(
        <div className='lg:w-2/5 md:3/5 w-full bg-gray-100 border-gray-800 border-2 p-2  my-3 flex justify-between mx-auto rounded-2xl' key={item.id}>
        <img src={item.img} alt="" className='w-3/12 aspect-square rounded-3xl' />
        <div className='  my-auto lg:ml-2 flex flex-col justify-center'>
        <h2 className='text-3xl font-semibold mx-auto'>{item.title}</h2>
        <h2 className='text-2xl mx-auto'>{item.price}</h2>
        <span className='hidden lg:flex md:flex mt-3'>{item.description}</span>
        </div>
        
        <img src="public/favicon.png" alt="" className='w-9 h-9 my-auto pr-2' onClick={()=>RemoveFav(item)} />
        
              </div>
      )) : <div className="bg-cover bg-center w-10/12 h-[34rem] mx-auto mt-3 " style={{backgroundImage: "url('public/0item.png')"}}>
        <h2 className='text-3xl font-semibold mx-auto my-auto'>SORRY YOU DONT HAVE ANYTHING</h2>
      </div>
      
      
     }
    </div>
  )
}

export default FavouriteRooms