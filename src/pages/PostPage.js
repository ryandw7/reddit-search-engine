import Post from "../components/post/Post"
import { fetchPostById, selectHomeListings } from '../features/listings/listingsSlice.js';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
export default function PostPage(){
    const dispatch = useDispatch();
    const listings = useSelector(selectHomeListings);
    const postId = window.location.href.split('post/')[1];
    const post = listings.filter((item) => item.id === postId)[0];


    useEffect(()=>{
    dispatch(fetchPostById(postId))
    }, [])
    console.log(post)
    return (
        <div className="page">
            <Post post={post} />
        </div>
    )
}