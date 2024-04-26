import { configureStore } from "@reduxjs/toolkit"
import AuthReduser from "./AuthSlice"
import RoomReduser from "./RoomSlice"
export const  store =configureStore({
    reducer: {
        auth:AuthReduser,
        room: RoomReduser
    },
})