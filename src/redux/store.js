import {configureStore} from "@reduxjs/toolkit"
import {page_one_slice} from './slices/page_one'

export const store = configureStore({
    reducer:{
        page_one_slice:page_one_slice.reducer
    }
})