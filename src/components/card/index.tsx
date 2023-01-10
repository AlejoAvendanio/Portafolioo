import { useState } from "react"
import Modal from "../modal"
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faArrowRight, faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'

export type Proyect = {
        link:string,
        title:string,
        img:string,
        front:string[],
        back:string[]
}
type Props ={
    proyects:Proyect
}

const Card:React.FC<Props> = ({proyects})=> {
  const [stateModal, setStateModal] = useState(false)

  return (
    <div className='proyects'>
                    <section className="card">
                        
                        <img className='mouse' src={proyects.img} alt="Proyect Food"></img>
                        <h4>
                            <a className="proyecName" href={proyects.link}>{proyects.title}</a>
                            <FontAwesomeIcon style={{fontSize:"20px", marginLeft:"10px", color:"#000"}}  onClick={()=>setStateModal(!stateModal)} icon={faCircleInfo}/>
                                <Modal type={"Used Technologies"} setModal={setStateModal} state={stateModal}>
                                    <ul>
                                        {
                                            proyects.back.length ?(
                                                <p>BackEnd: { 
                                                    proyects.back.map((e:any)=><li>{e}</li>)}
                                                </p>): <></>
                                        }   
                                    </ul>
                                    <ul>
                                    {
                                            proyects.front.length ?(
                                                <p>FrontEnd: { 
                                                    proyects.front.map((e:any)=><li>{e}</li>)}
                                                </p>): <></>
                                        }  
                                    </ul>
                                </Modal>
                        </h4>
                    </section>
        
    </div>
  )
}


export default Card