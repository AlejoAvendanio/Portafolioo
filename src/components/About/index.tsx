// import { faTentArrowsDown } from '@fortawesome/free-solid-svg-icons'
import { faArrowsDownToLine } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./style.css"
export default function About() {
  return (
    <div className='about'>
        <h2 className="h2About">About me</h2>
        <span>
            <p>Soy un estudiante de Ingeniería en Sistemas de la universidad técnica nacional, recibido del bootcamp Soy Henry, con muchas ganas de afrontar nuevos desafíos e ingresar en el mundo laboral para poder proporcionar todos mis conocimientos y expandirlos aún más!
            </p>
        </span>
        <button id='set' className='resume'><a href="./resume.pdf" download >Resume</a> <FontAwesomeIcon className='arrow' icon={faArrowsDownToLine}/></button>
    </div>
  )
}
