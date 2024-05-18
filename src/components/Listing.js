export default function Listing({ listing }) {

    return (
        <div data-testid="listing" className="listing">
            <h4>{listing.subreddit_name_prefixed}</h4>
            <h5>{listing.author}</h5>
            <h3>{listing.title}</h3>
            <p></p>
        </div>
    )
}