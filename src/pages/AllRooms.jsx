import PropertyCard from '@/components/PropertyCard'
import { useSelector ,useDispatch } from 'react-redux'
import useAddRoomsToStore from '@/hooks/useAddRoomsToStore'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import {ApplyFilter} from '../Redux-store/RoomSlice'

const AllRooms = () => {
  const roomData = useSelector((state)=>state.room.Hotels)
  const filterHotels = useSelector((state)=>state.room.FilterRoom)
  const [showFilter , setShowFilter] = useState(false)
const dispatch = useDispatch()
  //local state variable for filter
 const [price , setPrice] = useState()
 const [city , setCity] = useState()
 const [size , setSize]= useState()

  useAddRoomsToStore()

const handleClcik = ()=>{
  setShowFilter(!showFilter)
}

//handel filter click
const handleFilter = ()=>{
 dispatch(ApplyFilter({...{price , size , city}}))
}

//useEffect

useEffect(()=>{
  console.log(city)
},[city])

  return (
<>
    <div className=' absolute right-52 top-32 flex flex-col justify-center'>
      <div className='flex justify-between w-40 border-2 border-gray-800 rounded-xl p-2 cursor-pointer absolute top-0 right-28' onClick={handleClcik}>
      
      <span className='text-lg font-semibold'>FITLTER</span>
    <img src="public/filter-logo.png" alt=""  className='w-9 h-9 mr-3'
    />
    </div>
{ showFilter &&
  
<ul className='w-[26rem] h-60 bg-gray-700  flex flex-wrap absolute top-16 right-3 justify-between'>
<li className='flex flex-col w-5/12 mb-4 '>
<label className='text-xl font-semibold text-gray-100' htmlFor="">PRICE</label>
<select onChange={(e)=>{
  setPrice(e.target.value)
}} id="price" >
  <option value="">none</option>
 <option value="500">500</option>
 <option value="300">300</option>
 <option value="200">200</option>
</select>
</li>

<li className='flex flex-col w-5/12'>
<label className='text-xl font-semibold text-gray-100' htmlFor="">LOCATION</label>
<select  id="city" onChange={(e)=>{
 setCity(e.target.value)
}}>
  <option value="">none</option>
 <option value="Bhubaneswar">Bhubaneswar</option>
 <option value="Cuttack">Cuttack</option>
 <option value="Puri">Puri</option>
</select>
</li>

<li className='flex flex-col w-3/6 mx-auto '>
<label className='text-xl font-semibold text-gray-100' htmlFor="">Size Of House</label>
<select  id="size" onChange={(e)=>{
  setSize(e.target.value)
}}>
  <option value="">none</option>
 <option value="1BHK">1BHK</option>
 <option value="2BHK">2BHK</option>
 <option value="2B2HK">2B2HK</option>
 <option value="3BHK">3BHK</option>
</select>
</li>

<div className='w-full flex justify-center mt-4'><Button
onClick={handleFilter}
className="w-6/12 mx-auto">Add Filters</Button></div>
</ul>
}
</div>
    <div className="flex flex-wrap justify-center bg-gray-200 pt-20">
    {
      !filterHotels.length ?
      roomData.map((item)=>(
        <PropertyCard
        key={item.id}
        {...item}
        />
      )) : filterHotels.map((item)=>(
        <PropertyCard
        key={item.id}
        {...item}
        />
      ))
    }
    </div>
   </>
  )
}

export default AllRooms