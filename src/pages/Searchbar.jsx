import React, { useMemo, useState } from 'react'
import { Input } from "@/components/ui/input"
import { useDispatch, useSelector } from 'react-redux'
import {SearchRoom} from '../Redux-store/RoomSlice'
import { SuggestionBox } from '../Redux-store/RoomSlice'

const Searchbar = () => {

    
 const dispatch = useDispatch()
 const [inputValue , setInputValue] = useState('')
const suggestions = useSelector((state)=>state.room.SuggestionBox)

 //debounce function

const debounce = (func , wait)=>{

let timerId 
    return (...arg)=>{
        clearTimeout(timerId)
      timerId =  setTimeout(()=> func(...arg),wait)
    }
}
const onInput = (e)=>{
//dispatch(SearchRoom(e.target.value))
dispatch(SuggestionBox(e.target.value))
console.log(e.target.value)

}
const debounceCall = useMemo(()=>debounce(onInput,1000),[])

  return (
   <div className='flex flex-col w-full justify-center'>
    <Input
    className='w-9/12 h-12 mx-auto bg-gray-400 rounded-xl text-2xl font-semibold'
    placeholder="Search Hotels"
    value={inputValue}
    onChange={(e)=>{
        setInputValue(e.target.value)
        debounceCall(e)
    }}

    />

     <ul className='w-5/12 flex flex-wrap justify-center  mx-auto z-10'>
    
 {
  
  suggestions && suggestions.slice(0,6).map((item)=>(
    <li key={item.id}
     className='w-10/12 border-2 rounded-xl bg-gray-200 text-2xl flex p-2 cursor-pointer '>
    <img src={item.img}
    className='h-12 w-12'
    alt="" />
   <h2 className='text-2xl font-semibold ml-12 pl-8'>{item.title}</h2>
   
   </li>
  ))
 }
      </ul>
   
   </div>
  )
}

export default Searchbar