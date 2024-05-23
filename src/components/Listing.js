import '../app/App.css';
export default function Listing({ listing }) {
    
    //render listing and media for search results or home listings
    return (
        <div data-testid="listing" className="listing">
            <h4 className="listing-sr-name">{listing.subreddit_name_prefixed}</h4>
            <h5 className="listing-author">u/{listing.author}</h5>
            <h3 className="listing-title">{listing.title}</h3>
            <img src={listing.thumbnail} height={listing.thumbnail_height} width={listing.thumbnail_width}/>
            <p>^{listing.ups} comments: {listing.num_comments}</p>
        </div>
    )
}