export async function getPosts(){
    const respuesta = await fetch(`http://localhost:1337/api/posts?populate=imagen`)
    const resultado = await respuesta.json()
   
    return resultado  
}

