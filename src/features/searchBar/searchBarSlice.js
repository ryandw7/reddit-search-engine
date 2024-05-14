import { createSlice } from "@reduxjs/toolkit";

const searchBarSlice = createSlice({
    name: "searchBar",
    initialState: {
        currentSearch: ''
    },
    reducers: {
        submitSearch: (state, action) => {
            const { text } = action.payload;
            state.currentSearch = text;
        }
    }
});
export const selectCurrentSearch = (state) => state.searchBar.currentSearch;
export const { submitSearch } = searchBarSlice.actions;
export default searchBarSlice.reducer;