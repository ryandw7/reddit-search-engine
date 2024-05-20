import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchAccessTokenPromise from '../../API/fetchAccessTokenPromise.js';
import fetchUserInfoPromise from "../../API/fetchUserInfoPromise.js";
export const fetchAccessToken = createAsyncThunk(
  'profile/fetchAccessToken', async (code) => {
    const res = await fetchAccessTokenPromise(code);
    sessionStorage.setItem("access_token", res);
    return res;
  }
)
export const fetchUserInfo = createAsyncThunk(
  'profile/fetchUserData', async () => {
    const token = sessionStorage.getItem("access_token");
    try {
      const res = await fetchUserInfoPromise(token);
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
)
const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profileInfo: {},
    status: '',
    accessToken: '',
    signedIn: false,
    error: ''
  },
  reducers: {
    setSignedIn: (state, action) => {
      state.signedIn = action.payload;
    }
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
      .addCase(fetchUserInfo.pending, (state)=>{
        state.status = 'pending'
      })
      .addCase(fetchUserInfo.fulfilled, (state, action)=>{
        state.profileInfo = action.payload;
        state.status = 'fulfilled';
      })
      .addCase(fetchUserInfo.rejected, (state)=>{
        state.status = 'rejected'
      })
  }
});

export const selectProfileInfo = (state) => state.profile.profileInfo;
export const selectSignedIn = (state) => state.profile.signedIn;
export const selectStatus = (state) => state.profile.status;
export const selectAccessToken = (state) => state.profile.accessToken;
export const { setSignedIn } = profileSlice.actions;
export default profileSlice.reducer;