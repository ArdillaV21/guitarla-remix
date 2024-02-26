import React from 'react'

function Curso({curso}) {

    const {contenido, imagen, titulo} = curso
    const texto = contenido.map(desc => {
        return desc.children.map(descrip => {
          return descrip.text
        })
      })
      console.log(imagen.data.attributes.url)
    return (
        <section className='curso'>
            <style jsx="true">{`
                .curso{
                    background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7) ), url(${imagen.data.attributes.url})
                }
            `}</style>


            <div className='contendor curso-grid'>
                <div className='contenido'>
                    <h2 className='heading'>{curso.Titulo}</h2>
                    <p className='texto'>{texto}</p>
                </div>  
            </div>
        </section>
  )
}

export default Curso
