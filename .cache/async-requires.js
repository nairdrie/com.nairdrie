// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-contact-js": () => import("./../src/Pages/Contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-experience-js": () => import("./../src/Pages/Experience.js" /* webpackChunkName: "component---src-pages-experience-js" */),
  "component---src-pages-intro-js": () => import("./../src/Pages/Intro.js" /* webpackChunkName: "component---src-pages-intro-js" */),
  "component---src-pages-projects-js": () => import("./../src/Pages/Projects.js" /* webpackChunkName: "component---src-pages-projects-js" */),
  "component---src-pages-resume-js": () => import("./../src/Pages/Resume.js" /* webpackChunkName: "component---src-pages-resume-js" */),
  "component---src-pages-skills-js": () => import("./../src/Pages/Skills.js" /* webpackChunkName: "component---src-pages-skills-js" */)
}

