import React from 'react';
import logo from '../res/logo-color.svg';

class PersistentMenu extends React.Component {

    render() {
      return <div className={"menuBar " + (this.props.currentPage === 0 ? 'hide' : 'show')}>
                <img src={logo} className="smallLogo" alt="N" />
                <div className="menuContainer">
                <span>
                                  <button>INTRO<div className="menuglitch1">INTRO</div><div className="menuglitch2">INTRO</div></button>
                                  <button>EXPERIENCE<div className="menuglitch1">EXPERIENCE</div><div className="menuglitch2">EXPERIENCE</div></button>
                                  <button>PROJECTS<div className="menuglitch1">PROJECTS</div><div className="menuglitch2">PROJECTS</div></button>
                <button>RESUME<div className="menuglitch1">RESUME</div><div className="menuglitch2">RESUME</div></button>
                <button>CONTACT<div className="menuglitch1">CONTACT</div><div className="menuglitch2">CONTACT</div></button>
                              </span>
                </div>
          </div>;
    }
  }

export default PersistentMenu;