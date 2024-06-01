import ReactPlayer from "react-player";

export default function Post({post}){
    const { permalink, id, imgUrl, hasImg, isVideo, preview, subreddit, author, title, thumbnail, thumbnailHeight, thumbnailWidth, num_comments, ups, secure_media, selftext } = post.body;
    //render listing and media for search results or home listings
    const video = secure_media ? secure_media.reddit_video.scrubber_media_url : null;
    return (
        <div data-testid="post" className="post">
             <h4 className="listing-sr-name">{subreddit}</h4>
            <h5 className="listing-author">u/{author}</h5>
            <h3 className="listing-title">{title}</h3>
            {hasImg && <img src={imgUrl} height={thumbnailHeight} width={thumbnailWidth} />}
            <p>{selftext}</p>
            <p>^{ups} comments: {num_comments}</p>
            <p></p>
            <ReactPlayer playing="false" loop="false" controls="true" url={video}></ReactPlayer>
        </div>
    )
}