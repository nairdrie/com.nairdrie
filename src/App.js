import React from 'react';
import ReactDOM from "react-dom";
import './App.scss';

import { Pager } from "react-bootstrap";

import PersistentMenu from './Components/PersistentMenu';
import PageDots from './Components/PageDots';

import ReactPageScroller from "react-page-scroller";
import Intro from './Pages/Intro';
import Skills from './Pages/Skills';
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";
import Resume from "./Pages/Resume";
import Contact from "./Pages/Contact";

import ReactFullpage from '@fullpage/react-fullpage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: 0 };
  }

  


  handleMenuClick = (clickedItemIndex) => {
    this.setState({ currentPage: clickedItemIndex }); 
  }



  render() {


    return <div className="App">
        <PersistentMenu currentPage={this.state.currentPage}  onMenuClick={(index) => {this.handleMenuClick(index);}}/>
         <ReactFullpage
          debug /* Debug logging */
          // fullpage options
          //licenseKey={'YOUR_KEY_HERE'} // Get one from https://alvarotrigo.com/fullPage/pricing/
          navigation
          anchors={['intro', 'skills', 'experience', 'projects', 'resume', 'contact']}
          //sectionSelector={SECTION_SEL}
          //onLeave={this.onLeave.bind(this)}65
          //sectionsColor={this.state.sectionsColor}
          menu='#myMenu'
          onLeave={(origin, destination, direction) => {
            this.setState({ currentPage: destination.index }); 
          }}
          scrollOverflow={true}
          render={({ state, fullpageApi }) => (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Intro currentPage={this.state.currentPage} onMenuClick={(index) => {this.handleMenuClick(index);fullpageApi.moveTo(['intro', 'skills', 'experience', 'projects', 'resume', 'contact'][index], 0)}}/>
              </div>
              <div className="section">
                <Skills currentPage={this.state.currentPage}/>
              </div>
              <div className="section">
                <Experience />
              </div>
              <div className="section">
                <Projects />
              </div>
              <div className="section">
                <Resume />
              </div>
              <div className="section">
                <Contact />
              </div>
            </ReactFullpage.Wrapper>
          )}
        />
    </div>;
  }
}

export default App;