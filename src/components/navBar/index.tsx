import React from "react";
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function NavBar() {
  return (
    <div className="navBar">
        <ul>
            <li><FontAwesomeIcon className="menu" icon={faBars}/></li>
            <li><a href="#about"> About me</a></li>
            <li><a href="#set">Skill set</a></li>
            <li><a href="#briefcase">Briefcase</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </div>
  )
}
