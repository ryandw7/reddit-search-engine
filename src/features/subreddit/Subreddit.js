import { useSelector } from "react-redux";
import { selectFetchSubredditStatus } from "./subredditSlice";
export default function Subreddit(){
const status = useSelector(selectFetchSubredditStatus);

return (
    <div>
        Subreddit
    </div>
)
}