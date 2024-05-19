import { NavLink } from "react-router-dom";

export default function SubredditTag({ subreddit }) {

    return (
        <li data-testid="subreddit-tag" className="subreddit-tag">
                <NavLink>r/{subreddit.display_name}</NavLink>
        </li>
    )
}