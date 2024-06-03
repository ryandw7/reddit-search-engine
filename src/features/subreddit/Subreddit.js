import { useSelector } from "react-redux";
import { selectFetchSubredditStatus, selectSubredditAbout } from "./subredditSlice.js";
import SubredditAbout from '../../components/subreddit/SubredditAbout.js'
export default function Subreddit() {
    const status = useSelector(selectFetchSubredditStatus);
    const aboutData = useSelector(selectSubredditAbout)
    const loading = <p>Loading...</p>
    const rejected = <p>Failed :/</p>
    const subreddit = <div>
        <SubredditAbout aboutData={aboutData.data} />
    </div>;
    
    const renderSubreddit = () => {
        switch (status) {
            case 'pending': return loading;

            case 'fulfilled': return subreddit;

            case 'rejected': return rejected;
        }
    }
    return (
        <div>
            {renderSubreddit()}
        </div>

    )
}