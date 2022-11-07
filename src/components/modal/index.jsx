import React, { useEffect, useRef } from 'react'
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Modal ({children,state,setModal,type}){
    const menuRef = useRef()
    useEffect(()=>{
        let handle = e=>{
            console.log(e.target)
            if(!menuRef.current.contains(e.target)){
                setModal(false)
            }
        }
        document.addEventListener("mousedown",handle)
        return()=>{
            document.removeEventListener("mousedown",handle)
        }
    })
    return(
        <>
        {
            state &&
            <div className='modal' >
                <div className='contentModal' ref={menuRef}>
                    <div className='encabezado'>
                        <h3>Contact with {type}</h3>
                    </div>
                    <button onClick={()=>setModal(!state)} className='close'><FontAwesomeIcon className='x' icon={faXmark}/></button>
                {
                    children
                }
                </div>
            </div>
        }
        </>
    )
}
