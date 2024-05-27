import { useEffect } from "react";
import { selectHomeListings, fetchHomeListings, setClickedPost } from "./listingsSlice";
import { useSelector, useDispatch } from "react-redux";
import '../../app/App.css';
import Listing from "../../components/listing/Listing";

export default function HomeListings() {
    //dispatch fetch home listings and select home listings to pass into individual listings
    const dispatch = useDispatch();
    const homeListings = useSelector(selectHomeListings);

    useEffect(() => {
        dispatch(fetchHomeListings())
    }, [])
    
    const handleClick = (id) => {
        dispatch(setClickedPost(id))
    }
    return (
        <div data-testid="home-listings" className="home-listings">
            {homeListings.map(listing => <Listing listing={listing} handleClick={handleClick} id={listing.id} key={listing.id}/>)}
        </div>
    )
}