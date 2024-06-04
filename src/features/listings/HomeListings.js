
import { selectHomeListings, selectHomeListingsStatus} from "./listingsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import '../../app/App.css';
import Listing from "../../components/listing/Listing";
export default function HomeListings() {

    //dispatch fetch home listings and select home listings to pass into individual listings
    const navigate = useNavigate();
    const homeListings = useSelector(selectHomeListings);
    const status = useSelector(selectHomeListingsStatus);
    const handleClick = (id) => {
        navigate(`/post/${id}`)
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
        <div data-testid="home-listings">
            {renderListings()}
        </div>
    )
}