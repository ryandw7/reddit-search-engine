import { configureStore, combineReducers } from "@reduxjs/toolkit";
import searchBarSlice from '../features/searchBar/searchBarSlice.js';
import profileSlice from '../features/profile/profileSlice.js';
import listingsSlice from "../features/listings/listingsSlice.js";
import subredditsSlice from '../features/subreddits/subredditsSlice.js';
import subredditSlice from "../features/subreddit/subredditSlice.js";
const rootReducer = combineReducers(
    {
        searchBar: searchBarSlice,
        profile: profileSlice,
        listings: listingsSlice,
        subreddits: subredditsSlice,
        subreddit: subredditSlice
    }
)
export const setUpStore = ( preloadedState ) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState
    });
}