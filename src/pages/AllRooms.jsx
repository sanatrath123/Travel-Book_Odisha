import PropertyCard from '@/components/PropertyCard'
import { useSelector ,useDispatch } from 'react-redux'
import useAddRoomsToStore from '@/hooks/useAddRoomsToStore'
import { useEffect, useState } from 'react'
 import { Button } from '@/components/ui/button'
// import {ApplyFilter} from '../Redux-store/RoomSlice'
import FilterComp from './FilterComp'

const AllRooms = () => {
  const roomData = useSelector((state)=>state.room.Hotels)
  const filterHotels = useSelector((state)=>state.room.FilterRoom)
  const [showFilter , setShowFilter] = useState(true)

  useAddRoomsToStore()


const handleClcik = ()=>{
  setShowFilter(!showFilter)
}



  return (
<div className='flex '>

    <div className="flex flex-wrap justify-center bg-gray-200 pt-20">
  
<div className=''>
<Button className=" fixed left-[4.6rem] px-10 py-6 top-[9rem]"
onClick={handleClcik}
>Add Filters</Button>
<div className=' fixed w-full left-2'>
{showFilter && <FilterComp/>}
</div>
</div>
  
    <div className=' flex flex-wrap justify-center lg:ml-36'>
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
    </div>
   </div>
  )
}

export default AllRooms