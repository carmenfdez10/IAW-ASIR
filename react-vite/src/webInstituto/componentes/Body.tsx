import React from 'react'
import estilos from './body.module.css'
import BasicExample from './Card'
import Galeria from '../../tareaWeb/componentes/Carousel'
export default function Body() {
  return (
<<<<<<< HEAD
    <main className={estilos.main}>
        <section className={estilos.cardsContainer}>
            <BasicExample colorear='black' colorear2='red' titulo='Poesía visual' imagen='poesiavisual.png'/>
            <BasicExample colorear='black' colorear2='green' titulo='El IES Cura Valera participa en el X concurso INDALMAT' imagen='/indalmat.png'/>
            <BasicExample colorear='black' colorear2='purple' titulo='Escape Room Halloween' imagen='/escape-room-terror.jpeg'/>
=======
    <main>
        <section>
            <BasicExample colorear='green' colorear2='red' titulo='Bienvenido al Cura Valera' imagen='/imagen.jpg'/>
            <BasicExample colorear='blue' colorear2='orange' titulo='Aprende REACT' imagen='/vite.svg'/>
            <Galeria/>
>>>>>>> 14c21578e1accc0b391f1cef1fad505c55d7d96c
        </section>
        <aside className={estilos.aside}>
          <h1>Menú con cosas</h1>
        </aside>
    </main>
  )
}
