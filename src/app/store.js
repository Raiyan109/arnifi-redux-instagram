import { configureStore } from "@reduxjs/toolkit"
import postSlice from "../feature/postSlice/postSlice"

const store = configureStore({
    reducer: {
        post: postSlice
    }
})

export default store 