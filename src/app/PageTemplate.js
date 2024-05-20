import SearchBar from '../features/searchBar/SearchBar.js';
import Subreddits from '../features/subreddits/Subreddits.js';
import ProfileAuth from '../features/profile/ProfileAuth.js';
import { Outlet } from 'react-router-dom';
export default function PageTemplate() {
    return (

        <div className="Page-template">
            <SearchBar />
            <ProfileAuth />
            <Outlet />
            <Subreddits />
        </div>


    )
}