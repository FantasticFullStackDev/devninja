import { createSlice } from "@reduxjs/toolkit";

export const colorsSlice = createSlice({
    name: 'colors',
    initialState: {
        colors: ['red', 'blue', 'green', 'teal', 'brown', 'pink', 'yellow', 'grey','purple']
    },
    reducers: {
        shuffleColors: (state, action) => {
            state.colors = action.payload;
        },
    },
})

export const { shuffleColors } = colorsSlice.actions;

export const getColors = (state) => state.colors.colors;

export default colorsSlice.reducer;

