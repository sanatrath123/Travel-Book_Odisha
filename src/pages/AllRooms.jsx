import PropertyCard from '@/components/PropertyCard'
import { useSelector } from 'react-redux'
import useAddRoomsToStore from '@/hooks/useAddRoomsToStore'
const AllRooms = () => {
  const roomData = useSelector((state)=>state.room.Hotels)
  console.log(roomData)
  useAddRoomsToStore()
  return (
    <div className="flex flex-wrap justify-center bg-gray-200 pt-8">
    {
      roomData.map((item, i)=>(
        <PropertyCard
        key={item.title}
         {...roomData[i]}  
        />
      ))
    }
    </div>
  )
}

export default AllRooms