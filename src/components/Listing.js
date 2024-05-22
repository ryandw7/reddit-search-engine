import '../app/App.css';
export default function Listing({ listing }) {
    
    //render listing and media for search results or home listings
    return (
        <div data-testid="listing" className="listing">
            <h4 className="listing-sr-name">{listing.subreddit_name_prefixed}</h4>
            <h5 className="listing-author">{listing.author}</h5>
            <h3 className="listing-title">{listing.title}</h3>
            <p></p>
        </div>
    )
}