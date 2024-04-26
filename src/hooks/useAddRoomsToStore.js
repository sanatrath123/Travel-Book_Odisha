import React, { useEffect } from 'react'
import Data from '../mockdata/MockData.json'
import {  useDispatch } from "react-redux"
import { AddRooms } from '@/Redux-store/RoomSlice'
import { useRef } from 'react'

const useAddRoomsToStore = () => {
 const dispatch = useDispatch()
 const hotelData = Data?.Hotels?.[0]
 const prevdata  =  useRef(null)

 useEffect(()=>{
    if(hotelData && hotelData != prevdata.current){
        hotelData && dispatch(AddRooms(hotelData))
    prevdata.current = hotelData
    }
 },[hotelData,dispatch])
}

export default useAddRoomsToStore