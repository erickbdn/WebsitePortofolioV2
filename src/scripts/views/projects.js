/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable no-lonely-if */
import { createProjectsTemplate } from './template-creator';
// import initializeHalfCircleNav from '../utils/half-circle-nav';

const Projects = {
  async render() {
    return `
        <div class="content">
          <div id="ProjectsId" class="projects">
          
          </div>
        </div>`;
  },

  async afterRender() {
    const projectsContainer = document.querySelector('#ProjectsId');
    projectsContainer.innerHTML += createProjectsTemplate();
    const projectsSelectorContainer = document.querySelector('.projects-container'); // Select by class or ID
    projectsSelectorContainer.style.opacity = 0;
    setTimeout(() => {
      projectsSelectorContainer.style.opacity = 1;
    }, 100); // Change 1000 to the desired duration in milliseconds

    const projectContentContainers = document.querySelectorAll('.project-content-container');

    let currentlyOpenProject = null; // Keep track of the currently open project

    projectContentContainers.forEach((projectContentContainer, index) => {
      const projectTitle = projectContentContainer.querySelector('.project-title');

      if (projectTitle) {
        projectTitle.addEventListener('click', (event) => {
          event.stopPropagation();

          const projectDetails = projectContentContainer.querySelector('.project-details');
          const imageScrollContainer = projectContentContainer.querySelector('.image-scroll-container');

          if (projectDetails) {
            if (currentlyOpenProject !== index) {
              // Close the currently open project details (if any)
              if (currentlyOpenProject !== null) {
                const currentlyOpenDetails = projectContentContainers[currentlyOpenProject].querySelector('.project-details');
                const currentlyOpenImageScroll = projectContentContainers[currentlyOpenProject].querySelector('.image-scroll-container');
                currentlyOpenDetails.classList.remove('open');
                if (currentlyOpenImageScroll) {
                  currentlyOpenImageScroll.classList.remove('open');
                }
              }

              // Open the clicked project details
              projectDetails.classList.add('open');
              if (imageScrollContainer) {
                imageScrollContainer.classList.add('open');
              }

              currentlyOpenProject = index; // Update the currently open project
            } else {
              // Toggle the clicked project details (close if already open)
              if (projectDetails.classList.contains('open')) {
                projectDetails.classList.remove('open');
                if (imageScrollContainer) {
                  imageScrollContainer.classList.remove('open');
                }
                currentlyOpenProject = null; // No project is currently open
              } else {
                projectDetails.classList.add('open');
                if (imageScrollContainer) {
                  imageScrollContainer.classList.add('open');
                }
              }
            }
          }
        });
      }
    });
  },
};

export default Projects;