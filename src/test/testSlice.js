import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const testRequest = createAsyncThunk(
    'test/testRequest', async() => {
        const res = await fetch('https.test/api/get');
        const data = await res.json();
        return data;
    }
)

const testSlice = createSlice({
    name: 'test',
    initialState : {
        response: {}
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase()
    }
})

export default testSlice.reducer