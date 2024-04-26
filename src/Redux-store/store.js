import { configureStore } from "@reduxjs/toolkit"
import AuthReduser from "./AuthSlice"
export const  store =configureStore({
    reducer: {
        auth:AuthReduser
    },
})