/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
import 'regenerator-runtime';
import App from './app';
import '../styles/style.css';

const app = new App({
    checkbox: document.querySelector('#toggleNav'),
    // label: document.querySelector('.hamburger'),
    topnav: document.querySelector('.landing-header-container'),
    drawer: document.querySelector('#webNavigation'),
    content: document.querySelector('#mainContent'),
    header: document.querySelector('#header'),
    menulist: document.querySelector('.menu-list'),
    nextpage: document.querySelector('#nextPage'),
    nextpage2: document.querySelector('#nextPage2'),
    intro: document.querySelector('.intro-content-container'),
    aboutme: document.querySelector('.about-me-container'),
    projects: document.querySelector('.projects-container'),
  });
  
  window.addEventListener('hashchange', () => {
    app.renderPage();
  });
  
  window.addEventListener('load', () => {
    app.renderPage();
  });