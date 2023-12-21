/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
import { createIntroTemplate } from './template-creator';
// import initializeHalfCircleNav from '../utils/half-circle-nav';

const Landing = {
  async render() {
    return `
        <div class="content">
          <div id="landing" class="landing">
          
          </div>
        </div>`;
  },

  async afterRender() {
    const homeContainer = document.querySelector('#landing');
    homeContainer.innerHTML += createIntroTemplate();
    const introContainer = document.querySelector('.intro-content-container'); // Select by class or ID
    introContainer.style.opacity = 0;
    setTimeout(() => {
      introContainer.style.opacity = 1;
    }, 100); // Change 1000 to the desired duration in milliseconds
  },
};

export default Landing;