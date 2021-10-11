export const fetchScrapeInstagramPost = async (instagramPostLink: string) => (
    fetch('/_/scrape-instagram-post', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            instagramPostLink,
        }),
    })
)