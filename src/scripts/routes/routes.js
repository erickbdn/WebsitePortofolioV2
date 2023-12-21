/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
import AboutMe from '../views/aboutme';
import Intro from '../views/intro';
import Projects from '../views/projects';
import Skills from '../views/skills';
import Certificates from '../views/certificates';

// import Landing from '../views/landing';

 const routes = {
    '/': Intro,
    '/aboutme': AboutMe,
    '/projects': Projects,
    '/skills': Skills,
    '/certificates': Certificates,
 };

export default routes;