import SearchBar from '../features/searchBar/SearchBar.js';
import Subreddits from '../features/subreddits/Subreddits.js';
import ProfileAuth from '../features/profile/ProfileAuth.js';
import { Outlet } from 'react-router-dom';

export default function PageTemplate() {
    const codeURL = window.location.href
    const parseCodeURL = (url) => {
        return url.split('code=');
    }
    return (

        <div className="Page-template">
            <p></p>
            <SearchBar />
            <ProfileAuth />
            <Outlet />
            <Subreddits />
        </div>


    )
}