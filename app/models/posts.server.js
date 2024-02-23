export async function getPosts(){
    const respuesta = await fetch(`http://localhost:1337/api/posts?populate=imagen`)
    const resultado = await respuesta.json()
   
    return resultado  
}

export async function getPost(url){
    const respuesta = await fetch(`http://localhost:1337/api/posts?filters[url]=${url}&populate=imagen`)
    return await respuesta.json()
}