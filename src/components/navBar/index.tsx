import React from "react";
import "./style.css"
export default function NavBar() {
  return (
    <div className="navBar">
        <ul>
            <li><a href="#about"> About me</a></li>
            <li><a href="#set">Skill set</a></li>
            <li><a href="#briefcase">Briefcase</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="./AlejoAvendaño1.pdf" download >Downdload resume</a></li>
        </ul>
    </div>
  )
}
