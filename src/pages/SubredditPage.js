import { fetchSubreddit } from "../features/subreddit/subredditSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function SubredditPage(){
    dispatch = useDispatch();
    const subreddit = window.location.href.split('/r/')[1];
    console.log(subreddit)
    useEffect(()=>{
     dispatch(fetchSubreddit(subreddit))
    }, [])

    return (
        <div>
            
        </div>
    )
}