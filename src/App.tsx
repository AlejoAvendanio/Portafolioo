import React from 'react';
import './App.css';
import NavBar from './components/navBar';
import me from "./components/img/me.jpg"
import Briefcase from './components/briefcase';
import About from './components/About';
import SetSkills from './components/setSkill';
import Contact from './components/contact';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className='header'>
        <div className='img_me'>
          <img src={me} alt='Alejo Avendaño'></img>
        </div>
        <div className='title'>
          <h1>Alejo Avendaño</h1>
          <span id='about'>Full Stack Web Developer</span>
        </div>
      </header>
      <body className='bodyApp'>
        <section>
          <About/>
        </section>
        <section>
          <SetSkills/>
        </section>
        <section>
          <Briefcase/>
        </section>
        <section>
          <Contact/>
        </section>
      </body>
    </div>
  );
}

export default App;
