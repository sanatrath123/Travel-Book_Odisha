import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Hotels: [],
    cart:[],
    favourite: []
}

export const RoomSlice = createSlice({
    name:"room",
    initialState,
    reducers:{
AddRooms: (state , action)=>{
    state.Hotels= action.payload
},

AddCart: (state , action)=>{
    state.cart.push(action.payload)
    console.log(action.payload)
},
RemoveCart:(state , action)=>{
  state.cart =  state.cart.filter((item)=>(
        item.id != action.payload
  ))
},

AddFavourite:(state, action)=>{
    state.favourite.push(action.payload)
},
RemoveFavourite:(state, action)=>{
  state.favourite =  state.favourite.filter((item)=>(
        item.id != action.payload
    ))
}

    }
})

export const {AddRooms ,AddCart ,RemoveCart , AddFavourite ,RemoveFavourite} = RoomSlice.actions
export default RoomSlice.reducer