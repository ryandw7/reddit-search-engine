import SearchBar from '../features/searchBar/SearchBar.js';
import Subreddits from '../features/subreddits/Subreddits.js';
import Profile from '../features/profile/Profile.js';
import { Outlet } from 'react-router-dom';

export default function PageTemplate() {
    return (
        
        <div className="Page-template">
        <SearchBar />
        <Profile />
        <Outlet />
        <Subreddits />
        </div>
        

    )
}