import { useState } from "react"
import Modal from "../modal"
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faArrowRight, faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'

interface Proyect {
    proyects:Array<{
        link:string,
        title:string,
        img:string
    }>
}

export default function Card({proyects}: Proyect) {
  const [stateModal, setStateModal] = useState(false)
  return (
    <div className='proyects'>
        {
            proyects.map(proyec=>{
                return(
                    <section className="card">
                        <img className='mouse' src={proyec.img} alt="Proyect Food"></img>
                        <h4>
                            <a className="proyecName" href={proyec.link}>{proyec.title}</a>
                            <FontAwesomeIcon style={{fontSize:"20px", marginLeft:"10px", color:"#000"}}  onClick={()=>setStateModal(!stateModal)} icon={faCircleInfo}/>
                            <Modal type={"Used Technologies"} setModal={setStateModal} state={stateModal}>
                                
                                <div className="carousel">
                                    <div className="carusel__contenedor">
                                        {/* <button  className="carousel__anterior">
                                            <FontAwesomeIcon icon={faChevronLeft}/>
                                        </button> */}
                                        <div className="carousel__lista">
                                            <div className="carousel__elemento">
                                                <h4 style={{color:"#1766dc"}}><FontAwesomeIcon icon={faArrowRight}/> Database</h4>
                                                <ul style={{color:"#0c192c"}}>
                                                    <li>MongoDB</li>
                                                </ul>
                                        </div>
                                            <div className="carousel__elemento">
                                                <h4 style={{color:"#1766dc"}}><FontAwesomeIcon icon={faArrowRight}/> Back-end</h4>
                                                <ul style={{color:"#0c192c"}}>
                                                    <li>Mongoose</li>
                                                    <li>Express</li>
                                                    <li>TypeScript</li>
                                                    <li>Firebase</li>
                                                    <li>Axios</li>
                                                    <li>Cloudinary</li>
                                                    <li>Socket.io</li>
                                                    <li>Paypal API</li>
                                                    <li>Node Mailer</li>
                                                </ul>
                                            </div>
                                            <div className="carousel__elemento">
                                                <h4 style={{color:"#1766dc"}}><FontAwesomeIcon icon={faArrowRight}/> Front-end</h4>
                                                <ul style={{color:"#0c192c"}}>
                                                    <li>JavaScript</li>
                                                    <li>React</li>
                                                    <li>Redux</li>
                                                    <li>CSS</li>
                                                    <li>Material UI</li>
                                                    <li>Axios</li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* <button  className="carousel__siguiente">
                                            <FontAwesomeIcon icon={faChevronRight}/>
                                        </button> */}
                                    </div>
                                    <div role="tablist" className="carousel__indicadores"></div>
                                </div>
                            </Modal>
                        </h4>
                    </section>
                )
            })
        }
    </div>
  )
}
