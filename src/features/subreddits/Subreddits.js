import { selectSignedIn } from "../profile/profileSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { selectSubreddits, fetchSubscribedSubreddits, selectStatus, clearSubreddits } from "./subredditsSlice";
import SubredditTag from "../../components/subredditTag/SubredditTag";
import { useDispatch } from "react-redux";

export default function Subreddits() {

    const dispatch = useDispatch();
    const signedIn = useSelector(selectSignedIn);
    const status = useSelector(selectStatus);
    const subreddits = useSelector(selectSubreddits);
    
    useEffect(() => {
        if (!status && signedIn) {
            dispatch(fetchSubscribedSubreddits());
        } else if (!signedIn) {
            dispatch(clearSubreddits())
        }
    }, [signedIn])

    return (
        <div className="subreddits" data-testid="subreddits">
            <h2>Subreddits</h2>
            {subreddits.length > 0 ?
                <ul>
                    {subreddits.map(subreddit => <SubredditTag subreddit={subreddit.data} key={subreddit.data.id} />)}
                </ul>
                : <p>Sign in to view your subreddits</p>
            }


        </div>
    )
}