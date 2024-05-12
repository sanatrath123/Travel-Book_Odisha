import React, { useState } from 'react';
import { Slider } from "@/components/ui/slider";
import { Button } from '@/components/ui/button';
import { useDispatch, useSelector } from 'react-redux';
import {ApplyFilter} from '../Redux-store/RoomSlice'
import {PriceFilter} from '../Redux-store/RoomSlice'


const FilterComp = () => {
const dispatch = useDispatch()
const rooms = useSelector((state)=>state.room.Hotels)

  //local state variable for filter
  const [barValue, setBarValue] = useState([180]);
 const [city , setCity] = useState()
const [size , setSize] = useState()


 //function for price scrool bar
  // const handleClick= ()=>{
  //   console.log(price)
  // }


  //dispatch all values to store
const  handleClick = ()=>{
 const price = barValue[0]
  dispatch(ApplyFilter({...{price , size ,city}}))
}


//handle price filter only
const HandlePrice = (newValue)=>{

  //set the price
    setBarValue(newValue)
 
//diapatch the price 
dispatch(PriceFilter(barValue))

}



  return (
  <div className='lg:w-2/12 w-8/12 md:4/12 bg-gray-100 flex justify-center flex-wrap border-gray-800 border-2 rounded-xl'>
    <h1 className='mx-auto text-2xl mt-10 font-semibold'>FITERS</h1>

{/* city filter */}
<div className='w-9/12 mx-3 mt-4'>
<label className='mx-auto text-xl' htmlFor="">select city</label>
<select onChange={(e)=>setCity(e.target.value)} className='w-full mt-3' name="" id="">
<option value="">none</option>
  <option value="Bhubaneswar">Bhubaneswar</option>
  <option value="Cuttuck">Cuttuck</option>
  <option value="Puri">Puri</option>
</select>
</div>


{/* size filter filter */}
<div className='w-9/12 mx-3 mt-6'>
<label className='mx-auto text-xl' htmlFor="">select Hotels Size</label>
<select className='w-full mt-3' name="" id="" onChange={(e)=>setSize(e.target.value)}>
<option value="">none</option>
  <option value="1BHK">1BHK</option>
  <option value="2BHK">2BHK</option>
  <option value="3BHK">3BHK</option>
</select>
</div>


    {/* price filters  */}
    <div className='w-10/12 flex flex-wrap justify-center mx-auto mt-10'>
  <h1 className='mx-auto flex w-full text-2xl justify-center mb-5 font-semibold'>price:{barValue}</h1>
      <Slider className='w-full ' value={barValue} onValueChange={HandlePrice}  max={500} min={100} step={1} />
    <Button className="p-3 mt-7" onClick={handleClick}>APPLY</Button>
    </div>
    </div>

  );
}

export default FilterComp;


