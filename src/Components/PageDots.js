import React from 'react';

class PageDots extends React.Component {


    render() {
      return <div className="pageDotsContainer">
                <div className={"dot " + (this.props.currentPage === 0 ? 'active' : 'inactive')}></div>
                <div className={"dot " + (this.props.currentPage === 1 ? 'active' : 'inactive')}></div>
                <div className={"dot " + (this.props.currentPage === 2 ? 'active' : 'inactive')}></div>
                <div className={"dot " + (this.props.currentPage === 3 ? 'active' : 'inactive')}></div>
                <div className={"dot " + (this.props.currentPage === 4 ? 'active' : 'inactive')}></div>
          </div>;
    }
  }

export default PageDots;