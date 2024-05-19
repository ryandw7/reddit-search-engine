import { selectSignedIn } from "../profile/profileSlice";
import { useSelector } from "react-redux";
import { selectSubreddits } from "./subredditsSlice";
import SubredditTag from "../../components/SubredditTag";
export default function Subreddits(){
    const signedIn = useSelector(selectSignedIn);
    const subreddits = useSelector(selectSubreddits);
    return (
        <div className="subreddits" data-testid="subreddits">
        {signedIn ?
            subreddits.map(subreddit=> <SubredditTag subreddit={subreddit} />)
        :
            <p>Sign in to see your subreddits</p>
        }
        </div>
    )
}