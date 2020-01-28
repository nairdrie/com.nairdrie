import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import $ from "jquery";

class Contact extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    console.log("did update");
    $('.bar').remove('.count');
    $('.bar').css('transition', 'none');
    $('.bar').css('width', '0%');
    if(this.props.currentPage === 1) {
      $('.bar').css('transition', 'width 1.5s, background .2s');
      $('.bar').each(function(i){  
        console.log("bar " + i);
        var $bar = $(this);
        $(this).append('<span class="count"></span>')
        setTimeout(function(){
          $bar.css('width', $bar.attr('data-percent'));      
        }, i*100);
      });
    
      $('.count').each(function () {
          $(this).prop('Counter',0).animate({
              Counter: $(this).parent('.bar').attr('data-percent')
          }, {
              duration: 1500,
              easing: 'swing',
              step: function (now) {
                  $(this).text(Math.ceil(now) +'%');
              }
          });
      });
    }
  }  

    render() {
      return <div id="Skills">
        <p>Throughout my experience at university, co-op jobs, and personal work/projects, I have been able to develop a variety of software related skills. I am most skilled in web development related technologies, as I have several years of experience in the field including one year of professional experience working in the field.</p>
          <div class="wrap">
            <div class="holder">
              <div class="bar cf" data-percent="85%"><span class="label">Photoshop</span></div>
              <div class="bar cf" data-percent="75%"><span class="label light">Illustrator</span></div>
              <div class="bar cf" data-percent="65%"><span class="label">Indesign</span></div>
              <div class="bar cf" data-percent="90%"><span class="label light">HTML</span></div>
              <div class="bar cf" data-percent="90%"><span class="label">CSS</span></div>
              <div class="bar cf" data-percent="80%"><span class="label light">jQuery</span></div>
              <div class="bar cf" data-percent="85%"><span class="label light">RWD</span></div>
              <div class="bar cf" data-percent="75%"><span class="label">PHP</span></div>
              <div class="bar cf" data-percent="80%"><span class="label light">WordPress</span></div>
              <div class="bar cf" data-percent="70%"><span class="label">SASS/SCSS</span></div>
            </div>
  </div>
      </div>;
    }
  }

export default Contact;