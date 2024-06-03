import { fetchSubreddit } from "../features/subreddit/subredditSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Subreddit from '../features/subreddit/Subreddit.js'
export default function SubredditPage(){
    const dispatch = useDispatch();
    const subreddit = window.location.href.split('/r/')[1];
    console.log(subreddit)
    useEffect(()=>{
     dispatch(fetchSubreddit(subreddit))
    }, [])

    return (
        <div className="page">
            <Subreddit />
        </div>
    )
}