import React, { useEffect, useState } from 'react'
import js from "../img/js.png"
import react from "../img/react.png"
import node from "../img/node.png"
import redux from "../img/redux.png"
import express from "../img/express.png"
import css from "../img/css.png"
import nest from "../img/nest.png"
import  postgres from "../img/Postgresql.png"
import mongo from "../img/Mongo.png" 
import tp from "../img/Typescript.png"
import Skills from './skills'
interface Img {
    img:string,
    title:string
}

const INITIAL_STATE = [
    {
        img:js,
        title:"JavaScript"
    },
    {
        img:react,
        title:"ReactJS"
    },
    {
        img:node,
        title:"NodeJS"
    },{
        img:redux,
        title:"ReduxJS"
    },{
        img:css,
        title:"CSS"
    },{
        img:nest,
        title:"NestJS"
    },{
        img:express,
        title:"Express"
    },{
        img:postgres,
        title:"Postgres"
    },{
        img:mongo,
        title:"MongoDB"
    },{
        img:tp,
        title:"TypeScript"
    },

]
interface AppState {
    skill: Img[]
} 
export default function SetSkills() {
    const [skills, setSkills] = useState<AppState["skill"]>([])
    useEffect(()=>{
        setSkills(INITIAL_STATE)
    },[])
  return (
    <div>
        <h2>Skill Set</h2>
        <Skills skills={skills}/>
    </div>
  )
}
