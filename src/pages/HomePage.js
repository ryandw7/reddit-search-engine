import HomeListings from "../features/Listings/HomeListings";
import { useDispatch } from "react-redux";
import { fetchHomeListings } from "../features/Listings/listingsSlice";
import { useEffect } from "react";
export default function HomePage() {
    //render home listings and filter change feature
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchHomeListings())
    }, [])

    return (
        <HomeListings />
    )
}