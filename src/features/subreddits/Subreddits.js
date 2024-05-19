import { selectSignedIn } from "../profile/profileSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { selectSubreddits, fetchSubscribedSubreddits, selectStatus } from "./subredditsSlice";
import SubredditTag from "../../components/SubredditTag";
import { useDispatch } from "react-redux";
export default function Subreddits() {
    const dispatch = useDispatch();
    const status = useSelector(selectStatus);
    useEffect(() => {
        if (!status) {
            console.log('fetching');
            dispatch(fetchSubscribedSubreddits());
        }
    }, [])
    const subreddits = useSelector(selectSubreddits);

    return (
        <div className="subreddits" data-testid="subreddits">
            <h2>Subreddits</h2>

            <ul>
                {subreddits && subreddits.map(subreddit => <SubredditTag subreddit={subreddit.data} key={subreddit.data.id} />)}
            </ul>


        </div>
    )
}