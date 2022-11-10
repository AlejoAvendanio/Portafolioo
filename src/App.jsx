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
        <div className='bubbles'>
          <span style={{"--i":17}}></span>
          <span style={{"--i":30}}></span>
          <span style={{"--i":24}}></span>
          <span style={{"--i":10}}></span>
          <span style={{"--i":25}}></span>
          <span style={{"--i":23}}></span>
          <span style={{"--i":18}}></span>
          <span style={{"--i":16}}></span>
          <span style={{"--i":19}}></span>
          <span style={{"--i":20}}></span>
          <span style={{"--i":22}}></span>
          <span style={{"--i":25}}></span>
          <span style={{"--i":18}}></span>
          <span style={{"--i":21}}></span>
          <span style={{"--i":15}}></span>
          <span style={{"--i":26}}></span>
          <span style={{"--i":13}}></span>
          <span style={{"--i":28}}></span>
          <span style={{"--i":12}}></span>
          <span style={{"--i":24}}></span>
          <span style={{"--i":10}}></span>
          <span style={{"--i":14}}></span>
          <span style={{"--i":23}}></span>
          <span style={{"--i":18}}></span>
          <span style={{"--i":16}}></span>
          <span style={{"--i":19}}></span>
          <span style={{"--i":20}}></span>
          <span style={{"--i":22}}></span>
          <span style={{"--i":25}}></span>
          <span style={{"--i":18}}></span>
          <span style={{"--i":21}}></span>
          <span style={{"--i":15}}></span>
          <span style={{"--i":26}}></span>
          <span style={{"--i":13}}></span>
          <span style={{"--i":28}}></span>
          <span style={{"--i":12}}></span>
          <span style={{"--i":24}}></span>
          <span style={{"--i":10}}></span>
          <span style={{"--i":14}}></span>
          <span style={{"--i":23}}></span>
          <span style={{"--i":18}}></span>
          <span style={{"--i":16}}></span>
          <span style={{"--i":19}}></span>
        </div>
        <div className='contain'>
        <div className='img_me'>
          <img src={me} alt='Alejo Avendaño'></img>
        </div>
        <div className='title'>
          <h1>Alejo Avendaño</h1>
          <span id='about'>Full Stack Web Developer</span>
        </div>
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
