import React from 'react';
import logo from '../res/logo-color.svg';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { slide as Menu } from 'react-burger-menu'
import $ from "jquery";

class PersistentMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = { menuOpen:false, visible: false, clickedPage:0 };
  }

  closeMenu () {
    console.log("test");
    this.setState({menuOpen: false});
    $('.bm-cross-button button').click();
  }

  menuClick(item) {
    this.props.onMenuClick(item)
    $('.bm-cross-button button').click();
  }

    render() {
      setTimeout(function(){
        this.setState({visible:true});
   }.bind(this),1000);  // wait 5 seconds, then reset to false

   let pageNames = ["Intro", "Skills", "Experience", "Projects", "Resume", "Contact"];
  

      return <div className={"menuBar " + (this.props.currentPage === 0 ? 'hide ' : 'show ') + (this.state.visible ? 'initialized' : '')}>
                <div className="background"></div>
                <div className="mobile-menu-button">
                    <FontAwesomeIcon icon={faBars}  /> <h3>{pageNames[this.props.currentPage]}</h3>
                    <Menu isOpen={ this.state.menuOpen }>
                    <div className="close-menu"><FontAwesomeIcon icon={faTimes}  onClick={() => this.closeMenu()} /></div>
                      <a id="intro" className={(this.props.currentPage  === 0 ? 'active menu-item' : 'menu-item')} href="#intro" onClick={() => this.menuClick(0)}>Intro</a>
                      <a id="skills" className={(this.props.currentPage  === 1 ? 'active menu-item' : 'menu-item')} href="#skills" onClick={() => this.menuClick(1)}>Skills</a>
                      <a id="experience" className={(this.props.currentPage  === 2 ? 'active menu-item' : 'menu-item')} href="#experience" onClick={() => this.menuClick(2)}>Experience</a>
                      <a id="projects" className={(this.props.currentPage  === 3 ? 'active menu-item' : 'menu-item')} href="#projects" onClick={() => this.menuClick(3)}>Projects</a>
                      <a id="resume" className={(this.props.currentPage  === 4 ? 'active menu-item' : 'menu-item')} href="#resume" onClick={() => this.menuClick(4)}>Resume</a>
                      <a id="contact" className={(this.props.currentPage  === 5 ? 'active menu-item' : 'menu-item')} href="#contact" onClick={() => this.menuClick(5)}>Contact</a>
                    </Menu>
                </div>
                
                <a onClick={() => this.menuClick(0)} href="#intro"><img src={logo} className="smallLogo" alt="N" /></a>
                <div className="menuContainer">
                <ul id="myMenu">
                                  <li data-menuanchor="intro" className={(this.props.currentPage  === 0 ? 'active' : '')}  ><a href="#intro" onClick={() => this.menuClick(0)}>INTRO<div className="menuglitch1">INTRO</div><div className="menuglitch2">INTRO</div></a></li>
                                  <li data-menuanchor="skills" className={(this.props.currentPage  === 1 ? 'active' : '')}  ><a href="#skills"  onClick={() => this.menuClick(1)}>SKILLS<div className="menuglitch1">SKILLS</div><div className="menuglitch2">SKILLS</div></a></li>
                                  <li data-menuanchor="experience" className={(this.props.currentPage  === 2 ? 'active' : '')}  ><a href="#experience"  onClick={() => this.menuClick(2)}>EXPERIENCE<div className="menuglitch1">EXPERIENCE</div><div className="menuglitch2">EXPERIENCE</div></a></li>
                                  <li data-menuanchor="projects" className={(this.props.currentPage  === 3 ? 'active' : '')}  ><a href="#projects"  onClick={() => this.menuClick(3)}>PROJECTS<div className="menuglitch1">PROJECTS</div><div className="menuglitch2">PROJECTS</div></a></li>
                                  <li data-menuanchor="resume" className={(this.props.currentPage  === 4 ? 'active' : '')}  ><a href="#resume"  onClick={() => this.menuClick(4)}>RESUME<div className="menuglitch1">RESUME</div><div className="menuglitch2">RESUME</div></a></li>
                                  <li data-menuanchor="contact" className={(this.props.currentPage  === 5 ? 'active' : '')}   ><a href="#contact" onClick={() => this.menuClick(5)}>CONTACT<div className="menuglitch1">CONTACT</div><div className="menuglitch2">CONTACT</div></a></li>
                              </ul>
                </div>
          </div>;
    }
  }

export default PersistentMenu;