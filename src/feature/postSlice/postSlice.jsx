import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    test: "TEST"
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {}
})

export default postSlice.reducer