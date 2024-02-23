import {  useLoaderData } from "@remix-run/react"
import { getPost } from "~/models/posts.server"
import styles from '~/styles/blog.css'
import { formatearFecha } from "~/utils/helpers"

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}
export async function loader({params}){
  const{postUrl} = params
  const post = await getPost(postUrl)
  if(post.data.length === 0){
    throw new Response('', {
      status: 404,
      statusText: 'Post No Encontrada'
    })
  }
  return post
}

export function meta({data}){
  if(!data){
    return [
      {title: 'Post no encontrado'},
      {description: '{description: `Post, informacion sobre guitarra, post no encontrado}`'}
    ]
  }
  return[
    {title: `GuitarLA - ${data.data[0].attributes.Titulo}`},
    {description: `Post, informacion sobre guitarra, post ${data.data[0].attributes.Titulo}` }
  ]
}

function Posts() {
  
  const post = useLoaderData()
  const {titulo, contenido, imagen, publishedAt } = post.data[0].attributes

  const texto = contenido.map(desc => {
    return desc.children.map(descrip => {
      return descrip.text
    })
  })
  return (
    <article className="contenedor post mt-3">
        <img className="imagen" src={imagen.data.attributes.url} alt={`Imgen blog ${titulo}`} />
        <div className="contenido">
            <h3>{post.data[0].attributes.Titulo}</h3>
            <p className="fecha">{formatearFecha(publishedAt)}</p>
            <p className="texto">{texto}</p>
        </div>
       </article>
  )
}

export default Posts
