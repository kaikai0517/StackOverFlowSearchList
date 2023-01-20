import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        input: '',
    },
    reducers: {
        /* hydrate searchInput  */
        search: (state, action) => {
            state.input = action.payload
        }
    }
})

export const { search } = searchSlice.actions

export const input = (state) => state.search.input

export default searchSlice.reducer