import { configureStore } from "@reduxjs/toolkit";
import searchBarSlice from '../features/searchBar/searchBarSlice.js';
import profileSlice from '../features/profile/profileSlice.js';
import listingsSlice from "../features/Listings/listingsSlice.js";
import subredditsSlice from '../features/subreddits/subredditsSlice.js';
export default configureStore({
    reducer: {
        searchBar: searchBarSlice,
        profile: profileSlice,
        listings: listingsSlice,
        subreddits: subredditsSlice
    }
});

 