import { selectSignedIn } from "../profile/profileSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { selectSubreddits, fetchSubscribedSubreddits } from "./subredditsSlice";
import SubredditTag from "../../components/SubredditTag";
import { useDispatch } from "react-redux";
export default function Subreddits() {
    const dispatch = useDispatch();
    const signedIn = useSelector(selectSignedIn);
    useEffect(() => {
        if (signedIn) {
            console.log('fetching')
            dispatch(fetchSubscribedSubreddits());
        }
    }, [])
    const subreddits = useSelector(selectSubreddits);
    console.log(subreddits)
    return (
        <div className="subreddits" data-testid="subreddits">
            <h2>Subreddits</h2>
            {signedIn ?
                <ul>
                    {subreddits.map(subreddit => <SubredditTag subreddit={subreddit.data} key={subreddit.data.id} />)}
                </ul>
                :
                <p>Sign in to see your subreddits</p>
            }
        </div>
    )
}