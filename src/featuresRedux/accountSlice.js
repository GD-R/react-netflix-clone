import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    favorite: []
}

const accountSlice = createSlice({
    name: "account",
    initialState: {
        value: initialValue
    },
    reducers: {
         addFavorite: (state,action) => {
           state.value.favorite.push(action.payload)
        },

        removeFavorite: (state,action) => {
            state.value.favorite = state.value.favorite.filter((item) => item.id !== action.payload.id)
        }
    }
})

export default accountSlice.reducer;
export const {addFavorite , removeFavorite } = accountSlice.actions;