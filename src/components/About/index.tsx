import React from 'react'
import "./style.css"
export default function About() {
  return (
    <div className='about'>
        <h2 id='set'>About me</h2>
        <span>
            <p>Soy un estudiante de Ingenieria en Sistemas de la univiersidad tectinca nacional, recibido del bootcamp Soy Henry, con muchas ganas de afrontar nuevos desafios e ingresar el el mundo laboral para poder proporcionar todos mis conocimientos e expandirlos aun más!
            </p>
        </span>
        <button className='resume'><a href="./AlejoAvendaño1.pdf" download >Resume</a></button>
    </div>
  )
}
