import { Link } from "@remix-run/react"
import { formatearFecha } from "~/utils/helpers"


export default function Post({post}) {

    const {contenido, imagen, titulo, url, publishedAt} = post.attributes
    
    console.log(post)
    const texto = contenido.map(desc => {
        return desc.children.map(descrip => {
          return descrip.text
        })
      })

    return (
    
       <article className="post">
        <img className="imagen" src={post.attributes.imagen.data.attributes.formats.medium.url} alt={`Imgen blog ${titulo}`} />
        <div className="contenido">
            <h3>{post.attributes.Titulo}</h3>
            <p className="fecha">{formatearFecha(publishedAt)}</p>
            <p className="resumen">{texto}</p>
            <Link className="enlace" to={`/posts/${url}`}>Leer Post</Link>
        </div>
       </article>
    )
}

