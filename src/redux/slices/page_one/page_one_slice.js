import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    form_data:{}
}

export const page_one_slice = createSlice({
    name:'page_one_slice',
    initialState,
    reducers:{
        set_form_data:(state, action)=>{
            state.form_data = action.payload
        }
    }
})

export const {
    set_form_data
} = page_one_slice.actions