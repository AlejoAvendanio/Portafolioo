import {useEffect, useRef, useState} from "react";
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function NavBar() {
    const [click, setClick] = useState(false)
    const  menuRef= useRef()
    useEffect(()=>{
        let handle = (e)=>{
        console.log(e.target)
        if(!menuRef?.current?.contains(e.target)){
            setClick(false)
        }
    }
    document.addEventListener("mousedown",handle)
    return()=>{
        document.removeEventListener("mousedown",handle)
    }
    })
    return (
    <div className={`navBar ${click ? "s" : ""}`} ref={menuRef}>
        <ul className={`links`}>
            <li><FontAwesomeIcon onClick={()=>setClick(!click)} className="menu" icon={faBars}/></li>
            <li className={`lista ${click ? "active" : ""}`}><a href="#about"> About me</a></li>
            <li className={`lista ${click ? "active" : ""}`}><a href="#set">Skill set</a></li>
            <li className={`lista ${click ? "active" : ""}`}><a href="#briefcase">My projects</a></li>
            <li className={`lista ${click ? "active" : ""}`}><a href="#contact">Contact</a></li>
        </ul>
    </div>
    )
}
