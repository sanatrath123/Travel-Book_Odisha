import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Hotels: [],
    cart:[],
    favourite: [],
    SearchRoom: [],
   FilterRoom:[]
    
}

export const RoomSlice = createSlice({
    name:"room",
    initialState,
    reducers:{
AddRooms: (state , action)=>{
    state.Hotels= action.payload
},

AddCart: (state , action)=>{
   const allreadyhave = state.cart.some((item)=>item.id == action.payload.id)
   if(!allreadyhave){
    state.cart.push(action.payload)
   }
},
RemoveCart:(state , action)=>{
  state.cart =  state.cart.filter((item)=>(
        item.id != action.payload
  ))
},

AddFavourite:(state, action)=>{
    const allready = state.favourite.some((item)=>item.id == action.payload.id)
 if(!allready) {
  state.favourite.push(action.payload)
}},

RemoveFavourite:(state, action)=>{
  state.favourite =  state.favourite.filter((item)=>(
        item.id != action.payload
    ))
}
,

SearchRoom:(state, action)=>{
    state.SearchRoom= []
    state.SearchRoom =   state.Hotels.filter((item)=>(
        item.title.toUpperCase().includes(action.payload.toUpperCase())
       ))
       console.log(state.SearchRoom)
},

ApplyFilter: (state, action)=>{
const {price , city , size } = action.payload
 state.FilterRoom = state.Hotels.filter((item)=>(
       item.location == city
     && item.bedrooms == size
     && item.intPrice <=  parseInt(price)
))
}

    }
})

export const {AddRooms ,AddCart ,RemoveCart , AddFavourite ,RemoveFavourite,SearchRoom, ApplyFilter} = RoomSlice.actions
export default RoomSlice.reducer