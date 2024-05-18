const fetchListingsPromise = () => new Promise((resolve, reject) => {
    const accessToken = sessionStorage.getItem("access_token");
    const res = fetch('', {
    })
    resolve(
         res.json()
    )
    reject(error => console.log(error))
})

export default fetchListingsPromise;