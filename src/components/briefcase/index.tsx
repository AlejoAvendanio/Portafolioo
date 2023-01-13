// import React from 'react'
import { useEffect, useState } from "react"
import Card, { Proyect } from "../card/index"
import concatUs from "../img/concatus.png"
import next from "../img/next.png"
import gipfy from "../img/giphy2.png"
// import food from "../img/food.png"
import "./style.css"
const INITIAL_STATE:Proyect[] = [
    {
        link:"https://concatus.vercel.app",
        title:"ConcatUs",
        img:concatUs,
        front: ["JavaScript","React","Redux","Material UI","CSS","Axios"],
        back:["MongoDB","Mongoose","Express","TypeScript","Firebase","Cloudinary","Socket.io","Paypal API","Node Mailer"]
    },
    {
        link:"https://ecommer-next.vercel.app",
        title:"Ecommer",
        img:next,
        front:["React","TypeScript","NextJS","Fetch"],
        back:[]
    },
    {
        link:"https://giffy-cyan-six.vercel.app",
        title:"Giphy clone",
        img:gipfy,
        front:["React","TypeScript","Fetch"],
        back:["TypeScript","NodeJs","Json Web Token","MongoDB"]
    }
]


export default function Briefcase() {
    const proyect:Proyect[] = INITIAL_STATE

  return (
    <div>
        <h2 className='briefcase' id="briefcase" style={{textDecoration:"underLine"}}>My projects</h2>
        <div className="" style={{display:"flex",justifyContent:"space-around", flexWrap:"wrap"}}>
            {
                proyect.map((e:Proyect)=><Card  proyects={e}/>)
            }
        </div>
    </div>
  )
}
