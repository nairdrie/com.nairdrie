const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-contact-js": hot(preferDefault(require("C:\\Users\\nicka\\Desktop\\com.nairdrie\\src\\Pages\\Contact.js"))),
  "component---src-pages-experience-js": hot(preferDefault(require("C:\\Users\\nicka\\Desktop\\com.nairdrie\\src\\Pages\\Experience.js"))),
  "component---src-pages-intro-js": hot(preferDefault(require("C:\\Users\\nicka\\Desktop\\com.nairdrie\\src\\Pages\\Intro.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("C:\\Users\\nicka\\Desktop\\com.nairdrie\\src\\Pages\\Projects.js"))),
  "component---src-pages-resume-js": hot(preferDefault(require("C:\\Users\\nicka\\Desktop\\com.nairdrie\\src\\Pages\\Resume.js"))),
  "component---src-pages-skills-js": hot(preferDefault(require("C:\\Users\\nicka\\Desktop\\com.nairdrie\\src\\Pages\\Skills.js")))
}

