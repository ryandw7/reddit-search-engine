import { json } from 'react-router-dom';
import { REDIRECT_URI, BASIC_AUTH, GRANT_TYPE } from './globalAuth.js';




const fetchAccessToken = async (code) => {
    const postOptions = {
        method: "POST",
        body: `grant_type=authorization_code&code=${code}&redirect_uri=${REDIRECT_URI}`,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization" : `Basic ${BASIC_AUTH}`
        }
    }
    const url = `https://www.reddit.com/api/v1/access_token/`;
    try {
        const response = await fetch(url, postOptions);
        const data = await response.json();
        return data.access_token;
    } catch (error) {
        console.log(error)
    }
}

export default fetchAccessToken;