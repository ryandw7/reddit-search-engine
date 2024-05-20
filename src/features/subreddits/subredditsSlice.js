import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchSubscribedSubredditsPromise from '../../API/fetchSubscribedSubredditsPromise.js'
export const fetchSubscribedSubreddits = createAsyncThunk(
  'subreddits/fetchSubscribedSubreddits', async () => {
    const token = sessionStorage.getItem("access_token");
    try {
      const res = await fetchSubscribedSubredditsPromise(token);
      return res;
    } catch (error) {
      return error;
    }
  }
)
const subredditsSlice = createSlice({
  name: "subreddits",
  initialState: {
    subscribedSubreddits: [],
    status: ''
  },
  reducers: {
    clearSubreddits: (state) => {
      state.subscribedSubreddits = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubscribedSubreddits.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchSubscribedSubreddits.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.subscribedSubreddits = action.payload;
      })
      .addCase(fetchSubscribedSubreddits.rejected, (state) => {
        state.status = 'rejected';
      })
  }
});
export const { clearSubreddits } = subredditsSlice.actions;
export const selectSubreddits = (state) => state.subreddits.subscribedSubreddits;
export const selectStatus = (state) => state.subreddits.status;
export default subredditsSlice.reducer;