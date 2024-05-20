import { createSlice } from "@reduxjs/toolkit";

const searchBarSlice = createSlice({
    name: "searchBar",
    initialState: {
        currentSearch: ' '
    },
    reducers: {
        submitSearch: (state, action) => {
            state.currentSearch = action.payload;
        }
    }
});

export const selectCurrentSearch = (state) => state.searchBar.currentSearch;
export const { submitSearch } = searchBarSlice.actions;
export default searchBarSlice.reducer;