const fetchSubscribedSubredditsPromise = async (token) => {
    try {
        const res = await fetch('https://oauth.reddit.com/subreddits/mine/subscriber', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const json = await res.json();
        const data = await json.data;
        return data.children;
    } catch (error) {
        return error;
    }
};

export default fetchSubscribedSubredditsPromise;