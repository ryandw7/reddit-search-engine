const CLIENT_ID = '3_rAqpeqglaJNSpgYgKITQ';

const CLIENT_SECRET = 'rmfEAfc2RrDi4LEkDzTHLdcT2Cpspg';

const TYPE = 'code';

const RANDOM_STRING = () => {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 9))
    };
    let string = arr.toString();
    return string.replace(/,/g, "");
}
const REDIRECT_URI = 'https://ominous-garbanzo-qwgjqpp9px7c4wqr-3000.app.github.dev/'

const DURATION = 'temporary';

const SCOPE_STRING = 'identity, read, account'

const AUTH_URL = `https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=${TYPE}&state=${RANDOM_STRING()}&redirect_uri=${REDIRECT_URI}&duration=${DURATION}&scope=${SCOPE_STRING}`

const GRANT_TYPE = 'authorization_code'

const BASIC_AUTH = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)

export {CLIENT_ID, CLIENT_SECRET, TYPE, RANDOM_STRING, REDIRECT_URI, DURATION, SCOPE_STRING, AUTH_URL, GRANT_TYPE, BASIC_AUTH };