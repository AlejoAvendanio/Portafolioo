import React from 'react'
import "./styleSkills.css"
interface Img {
    skills:Array<{
        img:string,
        title:string
    }>
}
export default function Skills({skills}:Img) {
  return (
    <div className='skills'>
        {
            skills.map(e=><img src={e.img} alt={e.title} ></img>)
        }
    </div>
  )
}
