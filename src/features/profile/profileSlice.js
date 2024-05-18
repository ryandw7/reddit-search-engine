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
    signedIn: false,
    error: ''
  },
  reducers: {
    setSignedIn: (state, action) =>{
      state.signedIn = action.payload;
    }
  } ,
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
export const selectSignedIn = (state) => state.profile.signedIn;
export const selectStatus = (state) => state.profile.status;
export const selectAccessToken = (state) => state.profile.accessToken;
export const { setSignedIn } = profileSlice.actions;
export default profileSlice.reducer;