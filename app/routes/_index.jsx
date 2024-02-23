// Index.jsx
import { useLoaderData } from "@remix-run/react"
import ListadoGuitarras from "~/components/listado-guitarras"
import ListadoPost from "~/components/listado-posts"
import { getGuitarras } from "~/models/guitarras.server"
import { getPosts } from "~/models/posts.server"
import stylesGuitarras from  '~/styles/guitarras.css'
import stylesPosts from '~/styles/blog.css'


export function meta(){

}
export function links(){
  return [
    {
      rel: 'stylesheet',
      href: stylesGuitarras
    },
    {
      rel: 'stylesheet',
      href: stylesPosts
    }
  ]
}
export async function loader(){

  const [guitarras, posts] = await Promise.all([
    getGuitarras(),
    getPosts()
  ])
  return {guitarras, posts}
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
        <section className="contenedor">
          <ListadoPost
            posts={datos.posts.data}
          />
        </section>
      </>
    )
}

export default Index
