import React from 'react';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Resume extends React.Component {



    render() {
      return <div id="Resume">
          <p>
            Click the link below to download a PDF copy of my resume.
          </p>
          <a target="_blank" href="./nick-airdrie-resume.pdf">DOWNLOAD PDF RESUME</a>
          <p className="heart"><FontAwesomeIcon icon={faHeart}  /></p>
      </div>;
    }
  }

export default Resume;