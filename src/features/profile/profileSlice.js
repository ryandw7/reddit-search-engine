import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import  fetchAccessTokenPromise  from '../../API/fetchAccessTokenPromise.js'
export const fetchAccessToken = createAsyncThunk(
  'profile/fetchAccessToken', async(code) => {
      const res = await fetchAccessTokenPromise(code);
      sessionStorage.setItem("access_token", res);
      return res;
  }
)
const profileSlice = createSlice({
  name: "profile",
  initialState: {
    status: '',
    accessToken: '',
    error: ''
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccessToken.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAccessToken.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.accessToken = action.payload;
      })
      .addCase(fetchAccessToken.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
  }
});
export const selectStatus = (state) => state.profile.status;
export const selectAccessToken = (state) => state.profile.accessToken;
export const selectAuthCode = (state) => state.profile.authCode;
export const { fetchAuthCode } = profileSlice.actions;
export default profileSlice.reducer;