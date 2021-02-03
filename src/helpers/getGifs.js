


export const getGifs = async (category) =>{
    //encodeURI remplaza los espacions por %20
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=ZJetAE8DBAZ898QYbLacRghatfenCjmH`
    const respuesta = await fetch(url)
    const {data} = await respuesta.json()

    const gifs = data.map( img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    console.log(gifs)
    return gifs
}