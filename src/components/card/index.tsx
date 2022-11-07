interface Proyect {
    proyects:Array<{
        link:string,
        title:string,
        img:string
    }>
}

export default function Card({proyects}: Proyect) {
  return (
    <div className='proyects'>
        {
            proyects.map(proyec=>{
                return(
                    <section className="card">
                        <img className='mouse' src={proyec.img} alt="Proyect Food"></img>
                        <h4><a href={proyec.link}>{proyec.title}</a></h4>
                    </section>
                )
            })
        }
    </div>
  )
}
