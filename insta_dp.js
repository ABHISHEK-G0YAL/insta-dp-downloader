async function downloadBlobs(userName) {
    userName = userName.split(" ");
    for(let i = 0; i < userName.length; i++) {
        console.log(userName[i])
        let instaURL = 'https://www.instagram.com/'+userName[i]+'/?__a=1'
        console.log(instaURL)
        let instaFetch = await fetch(instaURL)
    }
}