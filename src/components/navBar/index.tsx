import {useEffect, useRef, useState} from "react";
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function NavBar() {
    const [click, setClick] = useState(false)
    const menuRef = useRef<any>(null)
    useEffect(()=>{
        let handle = (e: MouseEvent):void=>{
        console.log(e.target)
        const contains = menuRef?.current?.contains(e.target)
        if(!contains){
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
            <li className={`lista ${click ? "active" : ""}`}><a onClick={()=>setClick(!click)} href="#about"> About me</a></li>
            <li className={`lista ${click ? "active" : ""}`}><a onClick={()=>setClick(!click)} href="#set">Skill set</a></li>
            <li className={`lista ${click ? "active" : ""}`}><a onClick={()=>setClick(!click)} href="#briefcase">My projects</a></li>
            <li className={`lista ${click ? "active" : ""}`}><a onClick={()=>setClick(!click)} href="#contact">Contact</a></li>
        </ul>
    </div>
    )
}
