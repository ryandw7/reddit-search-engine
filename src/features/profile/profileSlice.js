import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAccessToken = createAsyncThunk(
  'profile/fetchAccessToken', async (code, thunkAPI) => {

   

  }
)
const profileSlice = createSlice({
  name: "profile",
  initialState: {
    status: '',
    authCode: '',
    accessToken: '',
    error: ''
  },
  reducers: {
    fetchAuthCode: (state, action) => {
      state.authCode = action.payload
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
  }
});
export const selectAccessToken = (state) => state.profile.accessToken;
export const selectAuthCode = (state) => state.profile.authCode;
export const { fetchAuthCode } = profileSlice.actions;
export default profileSlice.reducer;