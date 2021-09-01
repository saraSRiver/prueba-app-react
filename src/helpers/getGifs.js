export const getGifs= async (categoria)=>{
    const url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&api_key=CBR4hhowaNqavJwimwlXCZLbKTwCyqEE`;
    const respuesta= await fetch(url);
    const {data}= await respuesta.json();

    const gifs =data.map(img=>{
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    console.log(gifs);
    return gifs;
    }