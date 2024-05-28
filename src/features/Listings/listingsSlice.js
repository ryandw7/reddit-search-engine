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
        listings: [],
        clickedPost: ''
    },
    reducers: {
        setClickedPost: (state, action) => {
            state.clickedPost = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchHomeListings.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchHomeListings.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                const listingsData = action.payload.children;
                const arr = [];
                for (const listing in listingsData) {
                    const { is_video, preview, url, id, subreddit, author, title, thumbnail, thumbnail_height, thumbnail_width, ups, num_comments } = listingsData[listing].data;
                    let hasImage = false;
                    let imgUrl = null;
                    if (is_video) {
                        console.log('is video');
                        hasImage = false;
                    }
                    else if (url.includes('jpg') || url.includes('png') || url.includes('jpeg')) {
                        hasImage = true;
                        imgUrl = url;
                    } else if (thumbnail.includes('jpeg') || thumbnail.includes('png') || thumbnail.includes('jpg')) {
                        hasImage = true;
                        imgUrl = thumbnail;
                    }
                    arr.push({
                        preview: preview,
                        url: url,
                        id: id,
                        subredditName: subreddit,
                        author: author,
                        title: title,
                        thumbnail: thumbnail,
                        thumbnailHeight: thumbnail_height,
                        thumbnailWidth: thumbnail_width,
                        ups: ups,
                        numComments: num_comments,
                        isVideo: is_video,
                        hasImg: hasImage,
                        imgUrl, imgUrl
                    })
                }
                state.listings = arr;
            })
            .addCase(fetchHomeListings.rejected, (state) => {
                state.status = 'rejected'
            })
    }
})
export const selectStatus = (state) => state.listings.status;
export const { setClickedPost } = listingsSlice.actions;
export const selectHomeListings = (state) => state.listings.listings;
export default listingsSlice.reducer;