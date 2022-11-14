import React, { useEffect, useRef } from 'react'
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

interface props {
    children:any,
    state:boolean,
    setModal:(state:boolean)=>void,
    type:string
}


export default function Modal ({children,state,setModal,type}:props){
    const menuRef = useRef<any>(null)
    console.log(menuRef)
    useEffect(()=>{
        let handle = (e:MouseEvent | null)=>{
            console.log(e?.target)
            if(!menuRef?.current?.contains(e?.target)){
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
                        <h3>{type}</h3>
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
