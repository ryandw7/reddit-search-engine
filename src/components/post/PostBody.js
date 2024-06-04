import ReactPlayer from "react-player";
import parse from 'html-react-parser';
export default function Post({ post }) {
    const test = parse('<div><p>Hello Wolrd</p></div>')
    const { permalink, id, imgUrl, hasImg, isVideo, preview, subreddit, author, title, url, thumbnailHeight, thumbnailWidth, num_comments, ups, secure_media, selftext } = post.body;
    //render listing and media for search results or home listings
    const video = secure_media ? secure_media.reddit_video.fallback_url : null;
    return (
        <div data-testid="post" className="post">
            <h4 className="listing-sr-name">{subreddit}</h4>
            <h5 className="listing-author">u/{author}</h5>
            <h3 className="listing-title">{title}</h3>
            {test}
            {(url && url.includes('png' || 'jpeg' || 'jpg')) && <img src={url} width="60%"/>}
            <p>{selftext}</p>
            {video && <ReactPlayer playing="false" loop="false" controls="true" url={video}></ReactPlayer>}
            <p>upvotes: {ups} comments: {num_comments}</p>
        </div>
    )
} 1