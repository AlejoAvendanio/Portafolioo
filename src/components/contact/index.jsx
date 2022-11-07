import "./style.css"
import { faLinkedin, faSlack, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import emailjs from "@emailjs/browser"
import Modals from "../modal"
export default function Contact() {
  const [stateModal, setStateModal] = useState(false)
  const sendEmail=(e)=>{
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
        <h2 id="contact">Contact</h2>
        <div className='contactIcon'>
        <a href="https://www.linkedin.com/in/alejo-avendaño-full-stack-web-developer-5420a620a/"><FontAwesomeIcon icon={faLinkedin} /></a>
        <FontAwesomeIcon onClick={()=>setStateModal(!stateModal)} icon={faEnvelope}/>
        <Modals state={stateModal} setModal={setStateModal}>
          <div className="contentModal">
            <form onSubmit={sendEmail}>
              <input className="inputModal" name="email"type="email" placeholder="email"></input>
              <textarea placeholder="content" name="content" className="textModal"></textarea>
              <button className="send">Send</button>
            </form>
          </div>
        </Modals>
        <FontAwesomeIcon icon={faSlack}/>
        <FontAwesomeIcon icon={faWhatsapp}/>
        </div>
    </div>
  )
}
