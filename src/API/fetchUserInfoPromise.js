const fetchUserInfoPromise = async (token) => {
    try{
        const res = await fetch('https://oauth.reddit.com/api/v1/me', {
          header: {
            Authorization: `Bearer ${token}`
          }
        })
        const data = res.json();
        return data;
    }catch (error){
        return error;
    }
} 

export default fetchUserInfoPromise;