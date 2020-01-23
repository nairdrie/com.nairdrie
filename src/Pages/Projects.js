import React from 'react';
import imgSrc1 from '../res/projects/rsd.png';
import imgSrc2 from '../res/projects/ksleigh.png';
import imgSrc3 from '../res/projects/ked.png';
import imgSrc4 from '../res/projects/algai.png';
import imgSrc5 from '../res/projects/erebus.png';
import imgSrc6 from '../res/projects/guardian.png';
import imgSrc7 from '../res/projects/plunge.png';
import imgSrc8 from '../res/projects/dodgebowl.png';
import imgSrc9 from '../res/projects/starsweeper.png';
import imgSrc10 from '../res/projects/retrosudoku.png';
import imgSrc11 from '../res/projects/wordsearch.png';
import imgSrc12 from '../res/projects/tankgallery.png';
import imgSrc13 from '../res/projects/eracer.png';
import imgSrc14 from '../res/projects/armada.png';
import imgSrc15 from '../res/projects/bpl.png';
import imgSrc16 from '../res/projects/liveelectric.png';
import imgSrc17 from '../res/projects/cfht.png';
import imgSrc18 from '../res/projects/jtrump.png';

//new
import imgSrc19 from '../res/projects/pats.png';
//import imgSrc20 from '../res/projects/fighter.png';

class Projects extends React.Component {

    
    render() {
      var projectList = 
        [
          {
            imgSrc:imgSrc19,
            title:"RSD Mobile",
            info:"Testing testing 123."
          },
          {
            imgSrc:imgSrc2,
            title:"RSD Mobile",
            info:"Testing testing 123."
          },
          {
            imgSrc:imgSrc3,
            title:"RSD Mobile",
            info:"Testing testing 123."
          },
          {
            imgSrc:imgSrc1,
            title:"RSD Mobile",
            info:"Testing testing 123."
          },
          {
            imgSrc:imgSrc4,
            title:"RSD Mobile",
            info:"Testing testing 123."
          },
          {
            imgSrc:imgSrc5,
            title:"RSD Mobile",
            info:"Testing testing 123."
          },
          {
            imgSrc:imgSrc6,
            title:"RSD Mobile",
            info:"Testing testing 123."
          },
          {
            imgSrc:imgSrc7,
            title:"RSD Mobile",
            info:"Testing testing 123."
          },
          {
            imgSrc:imgSrc8,
            title:"RSD Mobile",
            info:"Testing testing 123."
          },
          {
            imgSrc:imgSrc9,
            title:"RSD Mobile",
            info:"Testing testing 123."
          },
          {
            imgSrc:imgSrc10,
            title:"RSD Mobile",
            info:"Testing testing 123."
          },
          {
            imgSrc:imgSrc11,
            title:"RSD Mobile",
            info:"Testing testing 123."
          },
          {
            imgSrc:imgSrc12,
            title:"RSD Mobile",
            info:"Testing testing 123."
          },
          {
            imgSrc:imgSrc13,
            title:"RSD Mobile",
            info:"Testing testing 123."
          },
          {
            imgSrc:imgSrc14,
            title:"RSD Mobile",
            info:"Testing testing 123."
          },
          {
            imgSrc:imgSrc15,
            title:"RSD Mobile",
            info:"Testing testing 123."
          },
          {
            imgSrc:imgSrc16,
            title:"RSD Mobile",
            info:"Testing testing 123."
          },
          {
            imgSrc:imgSrc17,
            title:"RSD Mobile",
            info:"Testing testing 123."
          },
          {
            imgSrc:imgSrc18,
            title:"RSD Mobile",
            info:"Testing testing 123."
          }
        ];



      return <div id="Projects">
          <div className="projects-content">
            {projectList.map(p => (<li>
              <img src={p.imgSrc} className="projectCover"/>
              <div className="details">
                <div className="title">
                  {p.title}
                </div>
                <div className="info">
                  {p.info}
                </div>
                <a href={p.url} className="project-link">More ></a>
              </div>
            </li>))}
          </div>
      </div>;
    }
  }

export default Projects;