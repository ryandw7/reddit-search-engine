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


export const fetchPostById = createAsyncThunk(
    'listings/fetchPostById',
    async (id) => {
        
        try {
            const res = await fetch(`https://www.reddit.com/${id}.json`);
            const data = await res.json();
            const permalink = data[0].data.children[0].data.permalink;
            const res2 = await fetch(`https://www.reddit.com${permalink}.json`);
            const data2 = await res2.json();
            return data2;

        } catch (error) {
            return error
        }
    }
)
const listingsSlice = createSlice({
    name: 'listings',
    initialState: {
        sortBy: 'best',
        homeListingsStatus: '',
        fetchPostStatus: '',
        listings: [],
        currentPost: {}
    },
    reducers: {
        setCurrentPost: (state, action) => {
            state.currentPost = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchHomeListings.pending, (state) => {
                state.homeListingsStatus = 'pending';
            })
            .addCase(fetchHomeListings.fulfilled, (state, action) => {
                state.homeListingsStatus = 'fulfilled';
                const listingsData = action.payload.children;
                const arr = [];
                for (const listing in listingsData) {
                    const { permalink, is_video, preview, url, id, subreddit, author, title, thumbnail, thumbnail_height, thumbnail_width, ups, num_comments } = listingsData[listing].data;
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
                        permalink: permalink,
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
                state.fetchPostStatus = 'rejected'
            })
            .addCase(fetchPostById.pending, (state) => {
                state.fetchPostStatus = 'pending'
            })
            .addCase(fetchPostById.fulfilled, (state, action) => {
                state.currentPost = action.payload;
                state.fetchPostStatus = 'fulfilled'
            })
            .addCase(fetchPostById.rejected, (state) => {
                state.fetchPostStatus = 'rejected'
            })
        }
    })
export const selectHomeListingsStatus = (state) => state.listings.homeListingsStatus;
export const selectFetchPostStatus = (state) => state.listings.fetchPostStatus;
export const selectCurrentPost = (state) => state.listings.currentPost
export const selectHomeListings = (state) => state.listings.listings;
export default listingsSlice.reducer;