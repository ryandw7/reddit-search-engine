import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {},
  reducers: {
    blank: (state, action) => {
      state = action.payload
    }
  }
});

export default profileSlice.reducer;