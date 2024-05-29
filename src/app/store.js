import { configureStore, combineReducers } from "@reduxjs/toolkit";
import searchBarSlice from '../features/searchBar/searchBarSlice.js';
import profileSlice from '../features/profile/profileSlice.js';
import listingsSlice from "../features/Listings/listingsSlice.js";
import subredditsSlice from '../features/subreddits/subredditsSlice.js';
const rootReducer = combineReducers(
    {
        searchBar: searchBarSlice,
        profile: profileSlice,
        listings: listingsSlice,
        subreddits: subredditsSlice
    }
)
export const setUpStore = (preloadedState) => {
     return configureStore({
        reducer: rootReducer,
        preloadedState
    });
}