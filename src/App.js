import React from 'react';
import ReactDOM from "react-dom";
import './App.scss';

import { Pager } from "react-bootstrap";

import PersistentMenu from './Components/PersistentMenu';
import PageDots from './Components/PageDots';

import ReactPageScroller from "react-page-scroller";
import Intro from './Pages/Intro';
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";
import Resume from "./Pages/Resume";
import Contact from "./Pages/Contact";

import ReactFullpage from '@fullpage/react-fullpage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: null, activeMenuItem:0 };

    this.fullPageRef = React.createRef();
  }

  

  getPagesNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= 5; i++) {
      pageNumbers.push(
        <Pager.Item key={i} eventKey={i - 1} onSelect={this.handlePageChange}>
          {i}
        </Pager.Item>,
      );
    }

    return [...pageNumbers];
  };

  handleMenuClick = (clickedItemIndex) => {
    this.setState({ currentPage: clickedItemIndex, activeMenuItem:clickedItemIndex }); 
  }

  scrollHandler = (status) => {
    this.setState({currentPage:status.to, activeMenuItem:status.to});
    
  }


  render() {

    const pagesNumbers = this.getPagesNumbers();

    return <div className="App">
        <PersistentMenu currentPage={this.state.currentPage} activeMenuItem={this.state.activeMenuItem} onMenuClick={(index) => {this.handleMenuClick(index);fullpageapi.moveTo(['intro', 'experience', 'projects', 'resume', 'contact'][index], 0)}}/>
        {/*<PageDots currentPage={this.state.currentPage}  />*/}

        {/*<ReactPageScroller
          pageOnChange={this.handlePageChange}
          customPageNumber={this.state.currentPage}
        >
          <Intro activeMenuItem={this.state.activeMenuItem} onMenuClick={this.handleMenuClick}/>
          <Experience />
          <Projects />
          <Resume />
          <Contact />
        </ReactPageScroller>*/}
        {/*<FullPage beforeChange={this.scrollHandler} duration={1000} ref={this.fullPageRef}>
          <Slide>
            <Intro activeMenuItem={this.state.activeMenuItem} onMenuClick={this.handleMenuClick}/>
          </Slide>
          <Slide>
            <Experience />
          </Slide>
          <Slide>
            <Projects />
          </Slide>
          <Slide>
            <Resume />
          </Slide>
          <Slide>
            <Contact />
          </Slide>
        </FullPage>
      */}
        {/*<Pager className="pagination-additional-class" bsSize="large">
          {pagesNumbers}
        </Pager>
        */}
         <ReactFullpage
          debug /* Debug logging */



          // fullpage options
          //licenseKey={'YOUR_KEY_HERE'} // Get one from https://alvarotrigo.com/fullPage/pricing/
          navigation
          anchors={['intro', 'experience', 'projects', 'resume', 'contact']}
          //sectionSelector={SECTION_SEL}
          //onLeave={this.onLeave.bind(this)}
          //sectionsColor={this.state.sectionsColor}

          render={({ state, fullpageApi }) => (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Intro activeMenuItem={this.state.activeMenuItem} onMenuClick={(index) => {this.handleMenuClick(index);fullpageApi.moveTo(['intro', 'experience', 'projects', 'resume', 'contact'][index], 0)}}/>
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