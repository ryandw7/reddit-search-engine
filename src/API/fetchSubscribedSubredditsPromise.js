const fetchSubscribedSubredditsPromise = async (token) => {
    try {
    const res = await fetch('https://oauth.reddit.com/api/v1//subreddits/mine/subscriber', {
        headers: `Bearer ${token}`
    })
    const data = await res.json();
    console.log(data);
    return data;
}catch (error){
    return error;
}
};

export default fetchSubscribedSubredditsPromise;