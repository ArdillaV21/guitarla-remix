// Index.jsx
import { useLoaderData } from "@remix-run/react"
import ListadoGuitarras from "~/components/listado-guitarras"
import ListadoPost from "~/components/listado-posts"
import { getGuitarras } from "~/models/guitarras.server"
import { getPosts } from "~/models/posts.server"
import { getCurso } from "~/models/curso.server"
import stylesGuitarras from  '~/styles/guitarras.css'
import stylesPosts from '~/styles/blog.css'
import stylesCurso from '~/styles/curso.css'
import Curso from "~/components/curso"



export function links(){
  return [
    {
      rel: 'stylesheet',
      href: stylesGuitarras
    },
    {
      rel: 'stylesheet',
      href: stylesPosts
    },
    {
      rel: 'stylesheet',
      href: stylesCurso
    }
  ]
}
export async function loader(){

  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso()
  ])
  return {guitarras, posts, curso}
}
function Index() {

  const datos = useLoaderData()
  return (
      <>
        <main className="contenedor">
          <ListadoGuitarras 
            guitarras={datos.guitarras.data}
        />
        </main>
        <Curso 
          curso={datos.curso.data.attributes}
        />

        <section className="contenedor">
          <ListadoPost
            posts={datos.posts.data}
          />
        </section>
      </>
    )
}

export default Index
