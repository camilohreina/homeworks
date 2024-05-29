import React from "react"


const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=lKDHw3hmObmy8zHSOXBf5XNuuj78aj5w&q=${category}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    const resp = await fetch(url)
    const {data} = await resp.json()
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.fixed_width_small.url
        }
    })
    return gifs
}

export default getGifs