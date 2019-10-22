async function downloadBlobs(userName) {
    userName = userName.split(" ");
    for(let i = 0; i < userName.length; i++) {
        console.log(userName[i])
        let instaURL = 'https://www.instagram.com/'+userName[i]+'/?__a=1'
        console.log(instaURL)
        let instaFetch = await fetch(instaURL)
        if(instaFetch.ok) {
            let instaJSON = await instaFetch.json()
            let profilePicURL = instaJSON.graphql.user.profile_pic_url_hd
            console.log(profilePicURL)
            let profilePicFetch = await fetch(profilePicURL)
        }
        else {
            console.log("HTTP-Error: " + instaFetch.status)
        }
    }
}