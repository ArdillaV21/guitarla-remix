import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta(){
  return [
    {title: 'GuitarLA - Sobre Nosotros'},
    {description: 'Venta de guitarras, blog de mùsica'}
  ]
}
export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel:'preload',
      hfre: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
        <h2 className="heading">Nosotros</h2>

        <div className="contenido">
          <img src={imagen} alt="Imagen sobre nosotros" />
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet eros in tortor tempor laoreet. Quisque euismod erat id nunc ornare sagittis. Aenean ac maximus dolor. Ut ullamcorper facilisis placerat. Proin luctus dictum porta. Etiam tincidunt ante quis lacus suscipit, id rutrum turpis bibendum. Suspendisse pulvinar turpis eu lectus hendrerit, vel vestibulum nunc ultrices.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet eros in tortor tempor laoreet. Quisque euismod erat id nunc ornare sagittis. Aenean ac maximus dolor. Ut ullamcorper facilisis placerat. Proin luctus dictum porta. Etiam tincidunt ante quis lacus suscipit, id rutrum turpis bibendum. Suspendisse pulvinar turpis eu lectus hendrerit, vel vestibulum nunc ultrices.</p>
          </div>
        </div>
    </main>
  )
}

export default Nosotros
