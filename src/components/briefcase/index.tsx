// import React from 'react'
import { useEffect, useState } from "react"
import Card from "../card/index"
import concatUs from "../img/concatus.png"
import food from "../img/food.png"
import "./style.css"
const INITIAL_STATE = [
    {
    link:"https://concatus.vercel.app",
    title:"ConcatUs",
    img:concatUs
    },
    {
    link:"https://concatus.vercel.app",
    title:"Food",
    img:food
    }
]
interface Proyect {
    link:string,
    title:string,
    img:string
}

interface AppState {
    proyects: Proyect[]
} 


export default function Briefcase() {
    const [proyect, setProyect] = useState<AppState["proyects"]>([])
    useEffect(()=>{
        setProyect(INITIAL_STATE)
    },[])
  return (
    <div>
        <h2 className='briefcase' id="briefcase">Briefcase</h2>
        <div className="">
            <Card proyects={proyect}/>
        </div>
    </div>
  )
}
