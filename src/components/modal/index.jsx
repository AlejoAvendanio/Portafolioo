import React from 'react'
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Modal ({children,state,setModal}){
    return(
        <>
        {
            state &&
            <div className='modal'>
                <div className='contentModal'>
                    <div className='encabezado'>
                        <h3>Contact with mail</h3>
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
