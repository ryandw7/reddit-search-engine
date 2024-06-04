import ReactPlayer from "react-player";
import Markdown from 'react-markdown'
export default function Post({ post }) {

    const { permalink, id, imgUrl, hasImg, isVideo, preview, subreddit, author, title, url, thumbnailHeight, thumbnailWidth, num_comments, ups, secure_media, selftext, thumbnail } = post.body;
    //render listing and media for search results or home listings

    const video = secure_media ? secure_media.reddit_video.fallback_url : null;
    return (
        <div data-testid="post" className="post">
            <h4 className="listing-sr-name">{subreddit}</h4>
            <h5 className="listing-author">u/{author}</h5>

            {(url && url.includes('html'))
                ?
                <div className="article-link">
                    (thumbnail && thumbnail.includes('png' || 'jpeg' || 'jpg')) && <img src={thumbnail} width="20%" />
                    <h3>{title}</h3>
                    <a href={url}>{url}</a>
                </div>
                :
                <h3 className="listing-title">{title}</h3>
            }
            {(url && url.includes('png' || 'jpeg' || 'jpg')) && <img src={url} width="60%" />}

            <Markdown>{selftext}</Markdown>
            {video && <ReactPlayer playing="false" loop="false" controls="true" url={video}></ReactPlayer>}
            <p>upvotes: {ups} comments: {num_comments}</p>
        </div>
    )
} 1