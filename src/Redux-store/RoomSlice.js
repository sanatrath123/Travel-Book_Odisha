import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Hotels: [],
    cart:[]
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
},
RemoveCart:(state , action)=>{
    state.cart.filter((item)=>{
        item.title != action.payload
    })
}

    }
})

export const {AddRooms ,AddCart ,RemoveCart} = RoomSlice.actions
export default RoomSlice.reducer