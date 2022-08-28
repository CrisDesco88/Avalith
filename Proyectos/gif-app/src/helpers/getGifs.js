export const getGifs = async (category) => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=${10}&offset=0&rating=g&lang=en`

    const resp = await fetch(url);

    const { data } = await resp.json();

    // console.log(data)



    const gifs = data.map(img => (
        {
            id: img.id,
            title: img.title,
            url: img.images.original.url
        }
    ))
    // console.log(gifs)

    return gifs
}