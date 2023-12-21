/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
import { createAboutMeTemplate } from './template-creator';
// import initializeHalfCircleNav from '../utils/half-circle-nav';

const AboutMe = {
  async render() {
    return `
        <div class="content">
          <div id="AboutMe" class="aboutMe">
          
          </div>
        </div>`;
  },

  async afterRender() {
    const aboutMeContentContainer = document.querySelector('#AboutMe');
    aboutMeContentContainer.innerHTML += createAboutMeTemplate();
    const aboutMeContainer = document.querySelector('.about-me-container'); // Select by class or ID
    aboutMeContainer.style.opacity = 0;
    setTimeout(() => {
      aboutMeContainer.style.opacity = 1;
    }, 100); // Change 1000 to the desired duration in milliseconds
  },
};

export default AboutMe;