import React from 'react';
import logo from './res/logo-color.svg';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Nick Airdrie<div className="glitch1">Nick Airdrie</div><div className="glitch2">Nick Airdrie</div></h1>
        <h2>Computer Engineering Student, University of Guelph</h2>
        <div className="links">
								<span>
									<a target="_blank" href="https://ca.linkedin.com/in/nairdrie">
                    <div><FontAwesomeIcon icon={faLinkedin} /></div>
                    <div className="linkglitch1"><FontAwesomeIcon icon={faLinkedin} /></div>
                    <div className="linkglitch2"><FontAwesomeIcon icon={faLinkedin} /></div>
                  </a>
									<a target="_blank" href="https://github.com/nairdrie">
                    <div><FontAwesomeIcon icon={faGithubSquare} /></div>
                    <div className="linkglitch1"><FontAwesomeIcon icon={faGithubSquare} /></div>
                    <div className="linkglitch2"><FontAwesomeIcon icon={faGithubSquare} /></div>
                  </a>
									<a target="_blank" href="https://www.instagram.com/nick.airdrie/">
                    <div><FontAwesomeIcon icon={faInstagram} /></div>
                    <div className="linkglitch1"><FontAwesomeIcon icon={faInstagram} /></div>
                    <div className="linkglitch2"><FontAwesomeIcon icon={faInstagram} /></div>
                  </a>
								</span>
							</div>
        <p className="bio">Hello world! Welcome to my portfolio. I am a fifth year Computer Engineering student studying at the University of Guelph. 
        I designed and built this site from scratch with React. I am passionate about programming, solving problems, and learning new things.</p>
        <div className="menu">
								<span>
									<button>INTRO<div className="menuglitch1">INTRO</div><div className="menuglitch2">INTRO</div></button>
									<button>EXPERIENCE<div className="menuglitch1">EXPERIENCE</div><div className="menuglitch2">EXPERIENCE</div></button>
									<button>PROJECTS<div className="menuglitch1">PROJECTS</div><div className="menuglitch2">PROJECTS</div></button>
                  <button>RESUME<div className="menuglitch1">RESUME</div><div className="menuglitch2">RESUME</div></button>
                  <button>CONTACT<div className="menuglitch1">CONTACT</div><div className="menuglitch2">CONTACT</div></button>
								</span>
							</div>
      </header>
    </div>
  );
}

export default App;
