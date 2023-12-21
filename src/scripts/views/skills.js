/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
/* eslint-disable eol-last */
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { createSkillsTemplate } from './template-creator';
// import initializeHalfCircleNav from '../utils/half-circle-nav';

const Skills = {
  async render() {
    return `
        <div class="content">
          <div id="Skills" class="skills-class">
          
          </div>
        </div>`;
  },

  async afterRender() {
    // ScrollTrigger.killAll();
    const skillsContentContainer = document.querySelector('#Skills');
    skillsContentContainer.innerHTML += createSkillsTemplate();
    const skillsContainer = document.querySelector('.skills-container'); // Select by class or ID
    skillsContainer.style.opacity = 0;
    setTimeout(() => {
      skillsContainer.style.opacity = 1;
    }, 100); // Change 1000 to the desired duration in milliseconds

    const skills = [
      'html',
      'css',
      'javascript',
      'responsive layout',
      'accessibility',
      'clean code eslint',
      'pwa',
      'automation testing',
      'web performance',
      'rest api',
      'npm',
      'node js',
    ];
    const descriptions = [
      'HTML5 - Able to create structure with semantic elements with proper labelling',
      'CSS3 - Able to create mobile-friendly design and use CSS3 features such as flexbox, grid, transitions, and animations',
      'JS ES6 - Able to create interactive and dynamic web apps. Create Progressive Web Apps (PWA) to deliver native app-like UX.',
      'Able to create website layout that adapts to a wide range of display sizes such as mobile, tablet, and desktop',
      'Able to create website with keyboard navigation, use alt-text for images, ensuring focus management (highlight active elements)',
      'Uses ESLint to check code to adhere to the coding standards',
      'Able to create websites with responsive design principles, able to be accessed offline / limited connectivity, uses Service Workers, and can be installed',
      'Uses Jasmine for unit and integration testing for individual functions, and Codecept for e2e testing',
      'Able to optimize web performance such as image optimization. lazyload, and bundle optimization',
      'Able to work with REST APIs, implemented REST API calls to retrieve and display data in json format from Firebase Realtime Database and Apify, used Postman for testing and debugging API',
      'Uses NPM to manage project dependencies and run scripts in package.json file. For example used babel, webpack, indexedDB, regenerator-runtime, and serviceworker plugin / packages.',
      'Uses Node.js to create real-time apps, generate dynamic page content, and handle server-side data manipulation (CRUD)',
    ];

    const cardContainer = document.getElementById('cardContainer');

    // Loop through the skills array and create a card for each skill
    skills.forEach((skill, index) => {
      // Create a new card container
      const cardWrapper = document.createElement('div');
      cardWrapper.className = 'card-wrapper'; // Add a class for styling

      // Create a new card element
      const card = document.createElement('div');
      card.className = 'card';

      // Create the card front
      const cardFront = document.createElement('div');
      cardFront.className = 'card-front';
      cardFront.textContent = skill;

      // Create the card back
      const cardBack = document.createElement('div');
      cardBack.className = 'card-back';
      cardBack.textContent = descriptions[index];

      // Append front and back to the card
      card.appendChild(cardFront);
      card.appendChild(cardBack);

      // Append the card to the card wrapper
      cardWrapper.appendChild(card);

      // Append the card wrapper to the card container
      cardContainer.appendChild(cardWrapper);
    });
    const cardWrappers = document.querySelectorAll('.card-wrapper');

    cardWrappers.forEach((cardWrapper, index) => {
      cardWrapper.addEventListener('mouseover', () => {
        // Enlarge the hovered card
        cardWrapper.style.transform = 'scale(1.1)';

        // Determine the neighboring card to enlarge (left and right)
        const prevCard = cardWrappers[index - 1];
        const nextCard = cardWrappers[index + 1];

        if (prevCard) {
          prevCard.style.transform = 'scale(1.05) perspective(60rem) rotateY(-20deg)';
        }
        if (nextCard) {
          nextCard.style.transform = 'scale(1.05) perspective(60rem) rotateY(20deg)';
        }
      });

      cardWrapper.addEventListener('mouseout', () => {
        // Reset all card wrappers to their original size
        cardWrappers.forEach((wrapper) => {
          wrapper.style.transform = 'scale(1)';
        });
      });
    });
  },
};

export default Skills;