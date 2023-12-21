/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable import/prefer-default-export */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
import CONFIG from '../globals/config';

const createIntroTemplate = () => `
<div class="intro-content-container">
    <section class="intro-section">
    <h1 class="page-num-color">01</h1><h1>&nbsp;- INTRO</h1>
</section>
<section class="middle-section">
    <h2>Hello! I'm a Bachelor of Computer Science</h2>
</section>
<section class="about-me-section">
    <p>My name is Tederick Budiono. Welcome to my web portfolio. <br>This website is developed as a personal project to showcase my web development skills. <br>Get to know more about me by clicking on my <a class="a-hover" href="/cv">CV</a> or <a class="a-hover" id="nextPage2" href="#/aboutme">About Me</a> page.</p>
</section>
<section class="socials">
<ul class="social-icons">
  <li>
    <a class="social-logo" href="https://www.linkedin.com/in/tederick-budiono/" target="_blank" rel="noopener noreferrer">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
  </svg>
    </a>
  </li>
  <li>
    <a class="social-logo" href="mailto:erickkbdn8120@gmail.com">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
  </svg>
    </a>
  </li>
  <li>
    <a class="social-logo" href="https://www.instagram.com/tbworks___" target="_blank" rel="noopener noreferrer">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
  </svg>
    </a>
  </li>
  <li>
  <a id="nextPage" href="#/aboutme" class="anchor-button">About Me  <span class="arrow">→</span></a>
  </li>
</ul>
</section>
</div>
`;

const createAboutMeTemplate = () => `
<div class="about-me-container">
  <section class="image-section">
    <img class="my-image" src="${CONFIG.BASE_IMAGE_URL}TederickPicture.jpeg" alt="Picture of Tederick Budiono">
    <p>Get to know more about me through my <a href="" class="a-hover">CV</a></p>
  </section>
  <section class="about-me-title-section">
  <h1 class="page-num-color">02&nbsp;- ABOUT ME</h1>
  </section>
  <section class="about-me-description">
            <div class="grid-item grid-1">
              <p><b class="bold-name">Tederick Budiono</b> or Erick is a recent CS graduate from Bina Nusantara University in 2023.
              Has experience from GIS research internship, and web development bootcamp.
              During studies, developed an interest and passion in web development and
              has worked on some small web projects including this web portfolio and for thesis.</p>
            </div>
            <div class="grid-item">
              <p>As this interest grows, i challenged myself to try being playful on this
              personal portfolio project, by exploring various ideas through
              internet resources such as awwards.com, airbnb ui/ux designer/developers, through
              instagram where there are frontend content creators and ui/ux content creators, and by utilizing chatgpt
              as a tool and for learning.
              </p>
            </div>
            <div class="grid-item">
              <p>Currently looking to expand my tech stack by learning ui/ux and web layout design, frameworks and try to 
              implement it and some API on small web projects. Also looking for an opportunity
              to be able to work or intern as a frontend engineer!</p>      
            </div>
          
    <a id="nextPage2" href="#/projects" class="anchor-button anchor-project">Projects  <span class="arrow">→</span></a>
 
  </section>
  
</div>
`;

const createProjectsTemplate = () => `
<div class="projects-container">
<section class="projects-title-section">
<h1 class="page-num-color">03&nbsp;- PROJECTS</h1>
</section>
  <div class="project-content-container top-margin">
    <div class="project-title-container">
    <p class="project-keywords">Web Development - API Integration - Scraping / Frontend</p>
      <h2 class="project-title">HiddenGem</h2>
    </div>
    <div class="project-details">
      <div class="details-container">
        <div class="project-details-content">       
            <div class="text-container">
              <p>HiddenGem is my final year thesis project. It was developed in a group consisting of 3 people including me. We wanted to make a platform where users can find hidden gem locations in Java Island, Indonesia because it was a trending topic throughout social media and has potential.</p>
              <p>The project mainly consists of frontend and API integration where we created our own static Hidden Gem API where it is curated through survey & user recommendations, and through scraping Instagram posts under several hidden gem hashtags where then these two results are displayed in the website alongside the static API or data’s we have created.</p>
              <p>Features of this website consists of hidden gem location recommendations based on users’ current location (GeoApify), details of the location where users can add it to their Wishlist, submit recommendation form where user can submit their recommendations to the database, search locations, filter by location type, and list of locations based on Instagram hashtag data.</p>
              <p>As one of the developers, I was responsible for creating the API with firebase, connecting both the firebase API and scraped data from Apify to the website, creating user location-based recommendations, and some small frontend tweaks. </p>
              <p>Check out HiddenGem<a href="https://main--fancy-mousse-6f9e96.netlify.app/" target="_blank">Here</a></p>
            </div>
        </div>
        <div class="image-scroll-container">
          <img class="project-image" src="${CONFIG.BASE_IMAGE_URL}HiddenGem1.jpg" alt="Screenshot 1 of Hidden Gem Website">
          <img class="project-image" src="${CONFIG.BASE_IMAGE_URL}HiddenGem3.jpg" alt="Screenshot 2 of Hidden Gem Website">
          <img class="project-image" src="${CONFIG.BASE_IMAGE_URL}HiddenGem4.jpg" alt="Screenshot 3 of Hidden Gem Website">
          <img class="project-image" src="${CONFIG.BASE_IMAGE_URL}HiddenGem5.jpg" alt="Screenshot 4 of Hidden Gem Website">
          <img class="project-image" src="${CONFIG.BASE_IMAGE_URL}HiddenGem6.jpg" alt="Screenshot 5 of Hidden Gem Website">
        </div>
      </div>
    </div>
  </div>
  <div class="project-content-container project-2">
    <div class="project-title-container">
    <p class="project-keywords">API Integration - Jasmine Testing - Codecept e2e / Frontend</p>
      <h2 class="project-title">FooFinders</h2>
    </div>
    <div class="project-details">
      <div class="details-container">
        <div class="project-details-content">       
            <div class="text-container">
              <p>FooFinders is a small project to integrate a restaurant API and mainly to implement testing with karma (jasmine) for two main features which is favouriting and unfavouriting restaurant. Codecept is also used for e2e testing (puppeteer).</p>
            </div>
        </div>
        <div class="image-scroll-container">
        <img class="project-image" src="${CONFIG.BASE_IMAGE_URL}FooFinders1.png" alt="Screenshot 1 of Foo Finders Website">
        <img class="project-image" src="${CONFIG.BASE_IMAGE_URL}FooFinders2.png" alt="Screenshot 2 of Foo Finders Website">
        <img class="project-image" src="${CONFIG.BASE_IMAGE_URL}FooFinders3.png" alt="Screenshot 3 of Foo Finders Website">
        </div>
      </div>
    </div>
  </div>
  <a id="nextPage3" href="#/skills" class="anchor-button anchor-skills">Skills  <span class="arrow">→</span></a>
</div>
`;

const createSkillsTemplate = () => `
<div class="skills-container">
<section class="skills-title-section">
<h1 class="page-num-color">04&nbsp;- SKILLS</h1>
</section>
  <div class="card-container" id="cardContainer">
    
  </div>
  <a id="nextPage4" href="#/certificates" class="anchor-button anchor-certificates">Certificates  <span class="arrow">→</span></a>
</div>
`;

const createCertificatesTemplate = () => `

<section class="certificates-title-section">
<h1 class="page-num-color">05&nbsp;- CERTIFICATES</h1>
<p class="scroll-title">→</p>
</section>
<div class="spacer"></div>
  <div class="certificate-items" id="certificateItems">


  </div>

`;

export {
  createIntroTemplate,
  createAboutMeTemplate,
  createProjectsTemplate,
  createSkillsTemplate,
  createCertificatesTemplate,
};