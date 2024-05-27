import { NavLink } from "react-router-dom";

export default function SubredditTag({ subreddit }) {
    //render click-able list item for subreddits under subcribed subreddits or listing title
    
    return (
        <li data-testid="subreddit-tag" className="subreddit-tag">
                <NavLink>r/{subreddit.display_name}</NavLink>
        </li>
    )
}