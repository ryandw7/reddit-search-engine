import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSubreddit = createAsyncThunk(
    'subreddit/fetchSubreddit', async(subreddit) => {
      try{ 
        const res = await fetch(`https://www.reddit.com/r/${subreddit}/about.json`);
        const data = await res.json();
        return data
      }catch(error){
        console.log(error);
        return error;
      }
    }
)

const subredditSlice = createSlice({
    name: 'subreddit',
    initialState: {
    fetchSubredditStatus: '',
    subredditAbout: {}
    },
    reducers: {

    },
    extraReducers: builder => {
    builder
    .addCase(fetchSubreddit.pending, (state)=>{
      state.fetchSubredditStatus = 'pending';
    })
    .addCase(fetchSubreddit.fulfilled, (state, action)=>{
        state.fetchSubredditStatus = 'fulfilled';
        state.subredditAbout = action.payload;
      })
      .addCase(fetchSubreddit.rejected, (state)=>{
        state.fetchSubredditStatus = 'rejected';
      })
    }
});

export const selectFetchSubredditStatus = (state) => state.subreddit.fetchSubredditStatus;
export const selectSubredditAbout = (state) => state.subreddit.subredditAbout;
export default subredditSlice.reducer;