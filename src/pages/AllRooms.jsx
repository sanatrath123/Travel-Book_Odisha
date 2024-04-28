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
      roomData.map((item)=>(
        <PropertyCard
        key={item.title}
        {...item}
        />
      ))
    }
    </div>
  )
}

export default AllRooms