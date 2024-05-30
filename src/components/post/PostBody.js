

export default function Post({post}){
    const { permalink, id, imgUrl, hasImg, isVideo, preview, subredditName, author, title, thumbnail, thumbnailHeight, thumbnailWidth, numComments, ups, url, selftext } = post.body;
    //render listing and media for search results or home listings
    return (
        <div data-testid="post" className="post">
             <h4 className="listing-sr-name">{subredditName}</h4>
            <h5 className="listing-author">u/{author}</h5>
            <h3 className="listing-title">{title}</h3>
            {hasImg && <img src={imgUrl} height={thumbnailHeight} width={thumbnailWidth} />}
            <p>{selftext}</p>
            <p>^{ups} comments: {numComments}</p>
        </div>
    )
}