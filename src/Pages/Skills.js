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
    
    /*$('.bar').each(function(i) {
      var content = $(this).find('.label').html();
      $(this).empty();
      if(i % 2 == 1) {
        $(this).append('<span class="label light">'+content+'</span>');
      }
      else {
        $(this).append('<span class="label">'+content+'</span>');
      }
      
      $(this).css('transition', 'none');
      $(this).css('width', '0%');
    });

    if(this.props.currentPage === 1) {
      
      $('.bar').each(function(i){  
        $(this).css('transition', 'width 1.5s, background .2s');
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
    */
    if(this.props.currentPage === 1) {
      $('.bar').each(function(i) {
        var content = $(this).find('.label').html();
        $(this).empty();
        if(i % 2 == 1) {
          $(this).append('<span class="label light">'+content+'</span>');
        }
        else {
          $(this).append('<span class="label">'+content+'</span>');
        }
        
        $(this).css('transition', 'none');
        $(this).css('width', '0%');
      });

      $('.bar').each(function(i){  
        $(this).css('transition', 'width 1.5s, background .2s');
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
    else {

      $('.bar').each(function(i){  
        console.log("bar " + i);
        var $bar = $(this);
        $(this).remove('.count'); 
        setTimeout(function(){
          $bar.css('width', '0%');  
        }, i*100);
      });
    
    }
  }  

    render() {
      return <div id="Skills">
        <div class="wrap">
          <div class="holder">
            <div class="bar cf" data-percent="90%"><span class="label">Javascript</span></div>
            <div class="bar cf" data-percent="90%"><span class="label light">HTML</span></div>
            <div class="bar cf" data-percent="85%"><span class="label">SASS/CSS</span></div>
            <div class="bar cf" data-percent="80%"><span class="label light">React</span></div>
            <div class="bar cf" data-percent="85%"><span class="label">Angular</span></div>
            <div class="bar cf" data-percent="70%"><span class="label light">SQL</span></div>
            <div class="bar cf" data-percent="65%"><span class="label">Node.js</span></div>
            <div class="bar cf" data-percent="90%"><span class="label light">C</span></div>
            <div class="bar cf" data-percent="90%"><span class="label">Unity</span></div>
            <div class="bar cf" data-percent="80%"><span class="label light">C#</span></div>
            <div class="bar cf" data-percent="70%"><span class="label">Java</span></div>
          </div>
        </div>
        <p><div className="other-skills-heading">Other Skills</div> <span className="skill">Ionic</span><span className="skill">Python</span><span className="skill">Android Studio</span><span className="skill">Xcode</span><span className="skill">Blender</span><span className="skill">Adobe Illustrator</span></p>
      </div>;
    }
  }

export default Contact;