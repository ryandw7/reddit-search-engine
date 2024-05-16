import { NavLink } from "react-router-dom";
import { AUTH_URL } from '../../API/globalAuth.js';
import { selectStatus } from './profileSlice.js';
import { useDispatch, useSelector } from "react-redux";
import { fetchAccessToken } from "./profileSlice.js";
export default function Profile() {
    const status = useSelector(selectStatus);
    const dispatch = useDispatch();
    const w = window.location.href;

    if (w.includes('code=') && !status && sessionStorage.getItem("access_token") === null) {
        let code = w.split('code=')[1];
        code = code.split('#')[0];
        dispatch(fetchAccessToken(code))
    }
    console.log(sessionStorage.getItem("access_token"));
    return (
        <div className="profile" data-testid="profile">
            <NavLink to={AUTH_URL}>Sign in</NavLink>
        </div>

    )
}