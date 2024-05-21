import { NavLink } from "react-router-dom";
import { AUTH_URL } from '../../API/globalAuth.js';
import { selectStatus, fetchAccessToken, setSignedIn, selectSignedIn, fetchUserInfo } from './profileSlice.js';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function ProfileAuth() {
    
    //view status of fetchAccessToken
    const status = useSelector(selectStatus);
    const signedIn = useSelector(selectSignedIn);
    const dispatch = useDispatch();

    //pull code and state from url after signing in w/ reddit
    const w = window.location.href;
    if (w.includes('code=') && !status && sessionStorage.getItem("access_token") === null) {
        let code = w.split('code=')[1];
        code = code.split('#')[0];
        dispatch(fetchAccessToken(code)).then(dispatch(fetchUserInfo())).catch(error => console.log(error));

    }

    //seperate sign in from access token retrieval to ensure signedIn will not be set w/o accss token
    useEffect(() => {
        if (sessionStorage.getItem("access_token")) {
            dispatch(setSignedIn(true));
            console.log(`Signed In`);
        }
    }, [status]);

    //set sign in to false and clear out session storage to ensure subscribed subreddits are removed
    const signOut = () => {
        sessionStorage.clear();
        dispatch(setSignedIn(false));
        window.history.replaceState({}, '/', '/');
    };
    
    //if signed in : render sign out, if signed out : render sign in
    return (
        <div className="profile" data-testid="profile">
            {signedIn ?
                <button onClick={signOut}>Sign Out</button>
                :
                <NavLink to={AUTH_URL}>Sign In</NavLink>
            }
        </div>

    )
}