import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHomeListings = createAsyncThunk(
    'listings/fetchListings',
    async () => {

        try {
            const res = await fetch('https://www.reddit.com/r/all/top/.json');
            const json = await res.json();
            const data = await json.data;
            return data;
        } catch (error) {
            return error;
        }
    }
)

const listingsSlice = createSlice({
    name: 'listings',
    initialState: {
        sortBy: 'best',
        status: '',
        listings: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchHomeListings.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchHomeListings.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                const listings = action.payload.children;
                state.listings = listings;
            })
            .addCase(fetchHomeListings.rejected, (state) => {
                state.status = 'rejected'
            })
    }
})

export const selectHomeListings = (state) => state.listings.listings;
export default listingsSlice.reducer;