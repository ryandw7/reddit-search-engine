import { NavLink } from "react-router-dom";
import { AUTH_URL } from '../../API/globalAuth.js';
import { selectStatus, fetchAccessToken, setSignedIn, selectSignedIn, fetchUserInfo } from './profileSlice.js';
import { useDispatch, useSelector } from "react-redux";

export default function ProfileAuth() {
    const status = useSelector(selectStatus);
    const signedIn = useSelector(selectSignedIn);
    const dispatch = useDispatch();
    const w = window.location.href;

    if (w.includes('code=') && !status && sessionStorage.getItem("access_token") === null) {
        let code = w.split('code=')[1];
        code = code.split('#')[0];
        dispatch(fetchAccessToken(code)).then(dispatch(fetchUserInfo())).then(dispatch(setSignedIn(true))).catch(error => console.log(error));
    } else if (!status && sessionStorage.getItem("access_token")) {
        dispatch(setSignedIn(true))
    }

    const signOut = () => {
        sessionStorage.clear();
        dispatch(setSignedIn(false));
        window.history.replaceState( {} , '/', '/');
    }
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