import React from 'react';
import rsd from '../res/projects/rsd.png';
import ksleigh from '../res/projects/ksleigh.png';
import ked from '../res/projects/ked.png';
import algai from '../res/projects/algai.png';
import erebus from '../res/projects/erebus.png';
import guardian from '../res/projects/guardian.png';
import plunge from '../res/projects/plunge.png';
import dodgebowl from '../res/projects/dodgebowl.png';
import starsweeper from '../res/projects/starsweeper.png';
import retrosudoku from '../res/projects/retrosudoku.png';
import wordsearch from '../res/projects/wordsearch.png';
import tankgallery from '../res/projects/tankgallery.png';
import eracer from '../res/projects/eracer.png';
import armada from '../res/projects/armada.png';
import bpl from '../res/projects/bpl.png';
import liveelectric from '../res/projects/liveelectric.png';
import cfht from '../res/projects/cfht.png';

//new
import pats from '../res/projects/pats.png';
import oliable from '../res/projects/oliable.png';
import bluechimp from '../res/projects/bluechimp.png';
import secretsanta from '../res/projects/secretsanta.png';

class Projects extends React.Component {

    
    render() {
      var projectList = 
        [
          {
            imgSrc:pats,
            title:"",
            info:"A high-accuracy tracking system for patients with Alzheimer's for use in care centres. Front-end developed in React."
          },
          {
            imgSrc:oliable,
            title:"",
            info:"An e-commerce startup I recently co-created. Oliable has multiple online stores currently being worked on."
          },
          {
            imgSrc:ksleigh,
            title:"",
            info:"Kenna Sleigh Toss is a browser game I co-created while working at Kenna for employees to play at one of our events."
          },
          {
            imgSrc:secretsanta,
            title:"",
            info:"A simple web app with a connection to Google Sheets API as a backend for determining and distributing Secret Santa info for my friends."
          },
          {
            imgSrc:bluechimp,
            title:"",
            info:"A game studio startup I recently co-created. Currently one title is in the works built in Unity."
          },
          {
            imgSrc:ked,
            title:"",
            info:"An internal web application I developed for Kenna at their hackathon. Won first place in the hackathon for the project."
          },
          {
            imgSrc:rsd,
            title:"",
            info:"RSD Mobile is a business solutions Android app I co-designed and developed for Rapid Sewer Data."
          },
          {
            imgSrc:algai,
            title:"",
            info:"Alg.AI is a prototype for a python based machine learning algorithm which would help determine harmful algae bloom precense in major bodies of water in advance."
          },
          {
            imgSrc:erebus,
            title:"",
            info:"Erebus is a 2D platformer mobile game I developed while working at Adknown."
          },
          {
            imgSrc:guardian,
            title:"",
            info:"Guardian is a casual ball bounce mobile game I developed while working at Adknown."
          },
          {
            imgSrc:plunge,
            title:"",
            info:"Plunge is a 2D adventure mobile game I developed while working at Adknown."
          },
          {
            imgSrc:dodgebowl,
            title:"",
            info:"Dodgebowl is a 3D runner mobile game I developed while working at Adknown."
          },
          {
            imgSrc:starsweeper,
            title:"",
            info:"Starsweeper is a Minesweeper-like mobile game I developed while working at Adknown."
          },
          {
            imgSrc:retrosudoku,
            title:"",
            info:"Retro Sudoku is a simple Sudoku mobile app I developed while working at Adknown."
          },
          {
            imgSrc:wordsearch,
            title:"",
            info:"Santa's Word Search is a festive word search mobile app I developed while working at Adknown."
          },
          {
            imgSrc:tankgallery,
            title:"",
            info:"Tank Gallery is a 2D arcade style mobile game I developed while working at Adknown."
          },
          {
            imgSrc:eracer,
            title:"",
            info:"E-racer is a 2D driving mobile game I developed while working at Adknown."
          },
          {
            imgSrc:armada,
            title:"",
            info:"Armada Bomber is a 2D arcade style mobile game I developed while working at Adknown."
          },
          {
            imgSrc:bpl,
            title:"",
            info:"I played a large part in developing the front-end of Barrie Public Library's website."
          },
          {
            imgSrc:liveelectric,
            title:"",
            info:"I played a large part in developing the front-end of Live Electric's website, which is an electrical company located in Guelph."
          },
          {
            imgSrc:cfht,
            title:"",
            info:"I played a large part in developing CFHT's website, which is a healthcare center in Orillia."
          }
        ];



      return <div id="Projects">
          <div className="projects-content">
            {projectList.map(p => (<li>
              <img src={p.imgSrc} className="projectCover"/>
              <div className="details">
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