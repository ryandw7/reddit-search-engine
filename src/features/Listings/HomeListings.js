
import { selectHomeListings, selectStatus, setClickedPost } from "./listingsSlice";
import { useSelector, useDispatch } from "react-redux";
import '../../app/App.css';
import Listing from "../../components/listing/Listing";
export default function HomeListings() {

    //dispatch fetch home listings and select home listings to pass into individual listings

    const homeListings = useSelector(selectHomeListings);
    const status = useSelector(selectStatus);
    const handleClick = (id) => {
        dispatch(setClickedPost(id));
    }
    const loading = <p>Loading...</p>
    const rejected = <p>Failed :/</p>
    const listings = homeListings.map(listing => <Listing data-testid="listing" listing={listing} handleClick={handleClick} id={listing.id} key={listing.id}/>);

    const renderListings = () => {
        switch (status){
            case 'pending' : return loading;
           
            case 'fulfilled' : return listings;
            
            case 'rejected' : return rejected;
        }
    }
    return (
        <div data-testid="home-listings" className="home-listings">
            {renderListings()}
        </div>
    )
}