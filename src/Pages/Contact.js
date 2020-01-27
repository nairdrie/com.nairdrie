import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import ContactForm from '../Components/ContactForm'

class Contact extends React.Component {



    render() {
      return <div id="Contact">
            <p>Want to get in touch? Send me a message here:</p>
           <ContactForm />
            <p>or connect with me on LinkedIn, GitHub and Instagram.</p>
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
          <p>&#10084;</p>
      </div>;
    }
  }

export default Contact;