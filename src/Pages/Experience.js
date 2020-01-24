import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faAngular } from '@fortawesome/free-brands-svg-icons'
import { faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { faUnity } from '@fortawesome/free-brands-svg-icons'
import { faGraduationCap, faBirthdayCake } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Experience extends React.Component {



    render() {
      return <div id="Experience">

          <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(103, 141, 201)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(103, 141, 201)' }}
    date="April 2020"
    iconStyle={{ background: 'rgb(103, 141, 201)', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faGraduationCap}  />}
  >
    <h3 className="vertical-timeline-element-title">Graduated</h3>
    <h4 className="vertical-timeline-element-subtitle">University of Guelph</h4>
    <p>
      Earned a Bachelor of Engineering, Computer Engineering degree.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(51, 89, 155)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(51, 89, 155)' }}
    date="May 2019 - January 2020"
    iconStyle={{ background: 'rgb(51, 89, 155)', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faJsSquare}  />}
  >
    <h3 className="vertical-timeline-element-title">Web Application Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Kenna Technology Solutions Inc.</h4>
    <p>
      Worked on a variety of new features and bug fixes across Kenna’s various applications in React, SQL, Sass, jQuery &amp; more.
      </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(17, 49, 84)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(17, 49, 84)' }}
    date="January 2019 - December 2019"
    iconStyle={{ background: 'rgb(17, 49, 84)', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faAngular}  />}
  >
    <h3 className="vertical-timeline-element-title">Full-Stack Mobile Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Rapid Sewer Data</h4>
    <p>
    Co-designed and developed a cross platform business solutions app which helped Rapid Sewer Data acquire clients from cities across Canada using Ionic Framework.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(103, 141, 201)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(103, 141, 201)' }}
    date="January 2018 - September 2018"
    iconStyle={{ background: 'rgb(103, 141, 201)', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faUnity}  />}
  >
    <h3 className="vertical-timeline-element-title">Unity Game Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Adknown Inc.</h4>
    <p>
    Developed 12 iOS, Android and Windows store games in Unity using C# which collected over 100,000 downloads total.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(51, 89, 155)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(51, 89, 155)' }}
    date="May 2017 - September 2017"
    iconStyle={{ background: 'rgb(51, 89, 155)', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faJsSquare}  />}
  >
    <h3 className="vertical-timeline-element-title">Front-End Web Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Sandbox Software Solutions</h4>
    <p>
    Developed many websites/webpages for clients using HTML, CSS and JavaScript, as well as icons and other user interface items for web using Adobe Illustrator.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(17, 49, 84)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(17, 49, 84)' }}
    date="September 2015"
    iconStyle={{ background: 'rgb(17, 49, 84)', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faGraduationCap}  />}
  >
    <h3 className="vertical-timeline-element-title">Began Studies</h3>
    <h4 className="vertical-timeline-element-subtitle">University of Guelph</h4>
    <p>
    Entered with a $2000 entry scholarship for maintaining a high average in high school. Maintained over 90% average in first-year software related courses.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(103, 141, 201)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(103, 141, 201)' }}
    date="June 2015"
    iconStyle={{ background: 'rgb(103, 141, 201)', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faGraduationCap}  />}
  >
    <h3 className="vertical-timeline-element-title">Graduated</h3>
    <h4 className="vertical-timeline-element-subtitle">Humberview Secondary School</h4>
    <p>
    Maintained > 85% average across all courses, and > 90% average across STEM related courses.
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
      </div>;
    }
  }

export default Experience;