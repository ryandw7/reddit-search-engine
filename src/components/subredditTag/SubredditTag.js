import { NavLink } from "react-router-dom";

export default function SubredditTag({ subreddit }) {
    //render click-able list item for subreddits under subcribed subreddits or listing title

    return (
        <NavLink to={subreddit.display_name}>r/{subreddit.display_name}</NavLink>
    )
}