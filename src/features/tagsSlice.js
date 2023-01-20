import { createSlice } from "@reduxjs/toolkit";

export const tagsSlice = createSlice({
    name: 'tags',
    initialState: {
        selectTag: '',
    },
    reducers: {
        /* hydrate selectTag  */
        select: (state, action) => {
            state.selectTag = action.payload
        },
    }
})

export const { select } = tagsSlice.actions

export const selectTag = (state) => state.tags.selectTag

export default tagsSlice.reducer