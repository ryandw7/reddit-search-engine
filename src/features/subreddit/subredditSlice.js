import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSubreddit = createAsyncThunk(
    'subreddit/fetchSubreddit', async(subreddit) => {
        const res = await fetch(`https://www.reddit.com/r/${subreddit}/about`);
        const data = await res.json();
        return data
    }
)

const subredditSlice = createSlice({
    name: 'subreddit',
    initialState: {
    fetchSubredditsStatus: '',
    subredditAbout: {}
    },
    reducers: {

    },
    extraReducers: builder => {
    builder
    .addCase(fetchSubreddit.pending, (state)=>{
      state.fetchSubredditsStatus = 'pending';
    })
    .addCase(fetchSubreddit.fulfilled, (state, action)=>{
        state.fetchSubredditsStatus = 'fulfilled';
        state.subredditAbout = action.payload;
      })
      .addCase(fetchSubreddit.rejected, (state)=>{
        state.fetchSubredditsStatus = 'rejected';
      })
    }
});

export const selectFetchSubredditStatus = (state) => state.fetchSubredditsStatus;
export default subredditSlice.reducer;