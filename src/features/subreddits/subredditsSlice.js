import { createSlice } from "@reduxjs/toolkit";

const subredditsSlice = createSlice({
  name: "subreddits",
  initialState: {
    subscribedSubreddits: []
  },
  reducers: {
    
  }
});
export const selectSubreddits = (state) => state.subreddits.subscribedSubreddits
export default subredditsSlice.reducer;