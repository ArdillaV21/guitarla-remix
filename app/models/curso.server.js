export async function getCurso(){
    const respuesta = await fetch('https://guitarla-strapi-gy09.onrender.com/api/curso?populate=imagen')
    return await respuesta.json()
}