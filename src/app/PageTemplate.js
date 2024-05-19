import SearchBar from '../features/searchBar/SearchBar.js';
import Subreddits from '../features/subreddits/Subreddits.js';
import ProfileAuth from '../features/profile/ProfileAuth.js';
import { selectSignedIn, selectAccessToken } from '../features/profile/profileSlice.js';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Profile from '../components/Profile.js'
export default function PageTemplate() {
    const signedIn = useSelector(selectSignedIn);
    const token = useSelector(selectAccessToken);
    console.log('render');
    return (

        <div className="Page-template">
            <p></p>
            <SearchBar />
            <ProfileAuth />
            <Outlet />
            {signedIn && token ? <Subreddits /> : <div className="subreddits">
                Sign In to view your subreddits
            </div>
            }
        </div>


    )
}