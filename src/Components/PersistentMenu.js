import React from 'react';
import logo from '../res/logo-color.svg';

class PersistentMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false, clickedPage:0 };
  }

  menuClick(item) {
    this.props.onMenuClick(item)
  }

    render() {
      setTimeout(function(){
        this.setState({visible:true});
   }.bind(this),1000);  // wait 5 seconds, then reset to false

      return <div className={"menuBar " + (this.props.currentPage === 0 ? 'hide ' : 'show ') + (this.state.visible ? 'initialized' : '')}>
                <div className="background"></div>
                <img src={logo} className="smallLogo" alt="N" />
                <div className="menuContainer">
                <span>
                                  <button className={(this.props.activeMenuItem  === 0 ? 'active' : '')}  onClick={() => this.menuClick(0)}>INTRO<div className="menuglitch1">INTRO</div><div className="menuglitch2">INTRO</div></button>
                                  <button className={(this.props.activeMenuItem  === 1 ? 'active' : '')}  onClick={() => this.menuClick(1)}>EXPERIENCE<div className="menuglitch1">EXPERIENCE</div><div className="menuglitch2">EXPERIENCE</div></button>
                                  <button className={(this.props.activeMenuItem  === 2 ? 'active' : '')}  onClick={() => this.menuClick(2)}>PROJECTS<div className="menuglitch1">PROJECTS</div><div className="menuglitch2">PROJECTS</div></button>
                                  <button className={(this.props.activeMenuItem  === 3 ? 'active' : '')}  onClick={() => this.menuClick(3)}>RESUME<div className="menuglitch1">RESUME</div><div className="menuglitch2">RESUME</div></button>
                                  <button className={(this.props.activeMenuItem  === 4 ? 'active' : '')}  onClick={() => this.menuClick(4)}>CONTACT<div className="menuglitch1">CONTACT</div><div className="menuglitch2">CONTACT</div></button>
                              </span>
                </div>
          </div>;
    }
  }

export default PersistentMenu;