import React from 'react';
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



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: null, activeMenuItem:0 };
  }

  handlePageChange = number => {
    this.setState({ currentPage: number, activeMenuItem:number }); // set currentPage number, to reset it from the previous selected.
  };

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
    this.setState({activeMenuItem:clickedItemIndex});
    this.handlePageChange(clickedItemIndex);
  }

  render() {

    const pagesNumbers = this.getPagesNumbers();

    return <div className="App">
        <PersistentMenu currentPage={this.state.currentPage} activeMenuItem={this.state.activeMenuItem} onMenuClick={this.handleMenuClick}/>
        <PageDots currentPage={this.state.currentPage}  />
        <ReactPageScroller
          pageOnChange={this.handlePageChange}
          customPageNumber={this.state.currentPage}
        >
          <Intro activeMenuItem={this.state.activeMenuItem} onMenuClick={this.handleMenuClick}/>
          <Experience />
          <Projects />
          <Resume />
          <Contact />
        </ReactPageScroller>
        {/*<Pager className="pagination-additional-class" bsSize="large">
          {pagesNumbers}
        </Pager>
        */}
    </div>;
  }
}

export default App;