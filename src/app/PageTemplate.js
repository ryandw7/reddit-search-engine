import SearchBar from '../features/searchBar/SearchBar.js';
import Subreddits from '../features/subreddits/Subreddits.js';
import ProfileAuth from '../features/profile/ProfileAuth.js';
import { selectSignedIn } from '../features/profile/profileSlice.js';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import profileSlice from '../features/profile/profileSlice.js';
import Profile from '../components/Profile.js'
export default function PageTemplate() {
    const signedIn = useSelector(selectSignedIn);
    console.log(signedIn)
    const codeURL = window.location.href
    const parseCodeURL = (url) => {
        return url.split('code=');
    }
    return (

        <div className="Page-template">
            <p></p>
            <SearchBar />
           {signedIn ? <Profile /> : <ProfileAuth />}
            <Outlet />
            <Subreddits />
        </div>


    )
}