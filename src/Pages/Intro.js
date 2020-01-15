import React from 'react';
import logo from '../res/logo-color.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

class Intro extends React.Component {

    constructor(props){
        super(props);
        this.state = { clickedPage: 0 };
    }


    goToPage(page) {
        this.setState({clickedPage:page});
    }


    render() {
      return <header id="Intro" className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Nick Airdrie<div className="glitch1">Nick Airdrie</div><div className="glitch2">Nick Airdrie</div></h1>
      <h2>Computer Engineering Student, University of Guelph</h2>
      <div className="links">
            <span>
                 <a target="_blank" rel="noopener noreferrer" href="https://ca.linkedin.com/in/nairdrie">
                  <div><FontAwesomeIcon icon={faLinkedin} /></div>
                  <div className="linkglitch1"><FontAwesomeIcon icon={faLinkedin} /></div>
                  <div className="linkglitch2"><FontAwesomeIcon icon={faLinkedin} /></div>
                </a>
                                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/nairdrie">
                  <div><FontAwesomeIcon icon={faGithubSquare} /></div>
                  <div className="linkglitch1"><FontAwesomeIcon icon={faGithubSquare} /></div>
                  <div className="linkglitch2"><FontAwesomeIcon icon={faGithubSquare} /></div>
                </a>
                                  <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/nick.airdrie/">
                  <div><FontAwesomeIcon icon={faInstagram} /></div>
                  <div className="linkglitch1"><FontAwesomeIcon icon={faInstagram} /></div>
                  <div className="linkglitch2"><FontAwesomeIcon icon={faInstagram} /></div>
                </a>
            </span>
        </div>
      <p className="bio">Hello world! Welcome to my portfolio. I am a fifth year Computer Engineering student studying at the University of Guelph. 
      I designed and built this site from scratch with React. I am passionate about programming, problem solving, design and engineering.</p>
      <div className="menu">
                              <span>
                                  <button className={(this.state.clickedPage === 0 ? 'active' : '')}  onClick={() => this.goToPage(0)}>INTRO<div className="menuglitch1">INTRO</div><div className="menuglitch2">INTRO</div></button>
                                  <button className={(this.state.clickedPage === 1 ? 'active' : '')}  onClick={() => this.goToPage(1)}>EXPERIENCE<div className="menuglitch1">EXPERIENCE</div><div className="menuglitch2">EXPERIENCE</div></button>
                                  <button className={(this.state.clickedPage === 2 ? 'active' : '')}  onClick={() => this.goToPage(2)}>PROJECTS<div className="menuglitch1">PROJECTS</div><div className="menuglitch2">PROJECTS</div></button>
                                  <button className={(this.state.clickedPage === 3 ? 'active' : '')}  onClick={() => this.goToPage(3)}>RESUME<div className="menuglitch1">RESUME</div><div className="menuglitch2">RESUME</div></button>
                                  <button className={(this.state.clickedPage === 4 ? 'active' : '')}  onClick={() => this.goToPage(4)}>CONTACT<div className="menuglitch1">CONTACT</div><div className="menuglitch2">CONTACT</div></button>
                              </span>
                          </div>
    </header>;
    }
  }

export default Intro;