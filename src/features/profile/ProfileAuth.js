import { NavLink } from "react-router-dom";
import { AUTH_URL } from '../../API/globalAuth.js';
//import { fetchAccessToken, fetchAuthCode, selectAuthCode, selectAccessToken } from './profileSlice.js';
//import { useDispatch, useSelector } from "react-redux";
import fetchAccessToken from "../../API/fetchAccessToken.js";
import { useEffect, useState } from "react";
export default function Profile() {
    const [code, setCode] = useState('');
    const [accessToken, setAccessToken] = useState('')
    //const authCode = useSelector(selectAuthCode);
    //const accessToken = useSelector(selectAccessToken);
    //const dispatch = useDispatch();
    const w = window.location.href;

    if (w.includes('code=') && !code) {
        let code = w.split('code=')[1];
        code = code.split('#')[0];
        setCode(code);
        
    }
    
        if(!accessToken && code){
             fetchAccessToken(code).then(res => setAccessToken(res))
        }
 


    return (
        <div className="profile" data-testid="profile">
            <NavLink to={AUTH_URL}>Sign in</NavLink>
        </div>

    )
}