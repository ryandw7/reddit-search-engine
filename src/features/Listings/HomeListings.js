import { useEffect } from "react";
import { selectHomeListings, fetchHomeListings } from "./listingsSlice";
import { useSelector, useDispatch } from "react-redux";
import '../../app/App.css';
import Listing from "../../components/Listing";

export default function HomeListings() {
    //dispatch fetch home listings and select home listings to pass into individual listings
    const dispatch = useDispatch();
    const homeListings = useSelector(selectHomeListings);

    useEffect(() => {
        dispatch(fetchHomeListings())
    }, [])

    return (
        <div data-testid="home-listings" className="home-listings">
            {homeListings.map(listing => <Listing listing={listing.data} key={listing.data.id}/>)}
        </div>
    )
}