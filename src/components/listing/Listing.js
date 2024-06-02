import '../../app/App.css';
import SubredditTag from '../subredditTag/SubredditTag';
import { useState, useEffect } from 'react';
export default function Listing({ listing, handleClick }) {
    const { permalink, id, imgUrl, hasImg, isVideo, preview, subredditName, author, title, thumbnail, thumbnailHeight, thumbnailWidth, numComments, ups, url } = listing;
    //render listing and media for search results or home listings
    return (
        <div data-testid="listing" className="listing" onClick={() => handleClick(id)} id={id}>
            <h4 className="listing-sr-name">{subredditName}</h4>
            <h5 className="listing-author">u/{author}</h5>
            <h3 className="listing-title">{title}</h3>
            {hasImg && <img src={imgUrl} height={thumbnailHeight} width={thumbnailWidth} />}
            <p>^{ups} comments: {numComments}</p>
        </div>
    )
}