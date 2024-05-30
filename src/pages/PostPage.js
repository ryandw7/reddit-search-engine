import Post from "../features/post/Post.js"
import { fetchPostById } from '../features/listings/listingsSlice.js';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
export default function PostPage(){
    const dispatch = useDispatch();
    const postId = window.location.href.split('post/')[1];
    useEffect(()=>{
    dispatch(fetchPostById(postId));
    }, [])
    
    return (
        <div className="page">
          <Post />
        </div>
    )
}