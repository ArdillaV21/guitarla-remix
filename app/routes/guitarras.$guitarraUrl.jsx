import { useLoaderData } from "@remix-run/react"
import { getGuitarra } from "~/models/guitarras.server"
import styles from '~/styles/guitarras.css'


export function meta({data}){
  return[
    {title: `GuitarLA - ${data.data[0].attributes.nombre}`},
    {description: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}` }
  ]
}

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export async function loader({request, params}){
    const{guitarraUrl} = params
    const guitarra = await getGuitarra(guitarraUrl)
    return guitarra
}

function Guitarra() {

  const guitarra = useLoaderData()
  const {nombre, descripcion, imagen, precio} = guitarra.data[0].attributes

  const texto = descripcion.map(desc => {
    return desc.children.map(descrip => {
      return descrip.text
    })
  })

  return (
    <main className="contenedor guitarra">
      <img className="imagen" src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} />
      
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{texto}</p>
        <p className="precio">${precio}</p>
      </div>
      
    </main>
  )
}

export default Guitarra
