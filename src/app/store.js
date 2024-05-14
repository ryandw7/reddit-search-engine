import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    searchBar: searchBarSlice,
    profile: profileSlice,
    trending: trendingSlice,
    subreddits: subredditsSlice
});

export default store;