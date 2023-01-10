import "./style.css"
import { faLinkedin, faSlack, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import emailjs from "@emailjs/browser"
import Modals from "../modal"
export default function Contact() {
  const [stateModal, setStateModal] = useState(false)
  const [stateModal1, setStateModal1] = useState(false)

  const sendEmail=(e:any)=>{
    e.preventDefault()
    emailjs.sendForm("service_61o99cz","template_8gt14h5",e.target,"juxU3SoKvaaoS7cHx")
    .then(res=>{
      console.log(res)
      alert("email enviado")
    })
    .catch(e=>{
      console.log(e)
      alert("ocurrio un error al enviar el email vuelva a intentarlo!")
    })
    setStateModal(false)
  }
  return (
    <div className="contact">
        <h2 id="contact" style={{textDecoration:"underLine"}}>Contact</h2>
        <div className='contactIcon'>
        <a className="link" href="https://www.linkedin.com/in/alejo-avendaño-5420a620a"><FontAwesomeIcon icon={faLinkedin} /></a>
        <FontAwesomeIcon className="email" onClick={()=>setStateModal(!stateModal)} icon={faEnvelope} />
        <Modals state={stateModal} setModal={setStateModal} type={"Contact with mail"}>
          <div className="contentModal">
            <form onSubmit={sendEmail}>
              <input className="inputModal" name="email" type="email" placeholder="email"></input>
              <textarea placeholder="content" name="content" className="textModal"></textarea>
              <button className="send">Send</button>
            </form>
          </div>
        </Modals>
        <FontAwesomeIcon className="email" onClick={()=>setStateModal1(!stateModal1)}  icon={faWhatsapp}/>
        <Modals state={stateModal1} setModal={setStateModal1} type={"Contact with whatsapp"}>
          <div className="contentModalNumber">Number phone: <b>+54 2615445394</b></div>
        </Modals>
        </div>
    </div>
  )
}
