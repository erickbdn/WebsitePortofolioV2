/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable indent */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable no-param-reassign */
const DrawerInitiator = {
    init({
 drawer, content, checkbox, topnav, menulist,
}) {
  const menuItem = Array.from(menulist.getElementsByClassName('menu-item'));
  const TBWORKS = document.getElementById('TBWORKS');
 
  checkbox.checked = true; // Set the checkbox to checked
  drawer.classList.add('open'); // Add the 'open' class to the drawer
  let isCheckboxChecked = true; // Update the checkbox state

  document.addEventListener('DOMContentLoaded', () => {
  checkbox.addEventListener('change', () => {
    isCheckboxChecked = checkbox.checked;
      if (isCheckboxChecked) {
          // Code to handle menu opening
          drawer.classList.add('open');
      } else {
          // Code to handle menu closing\
          drawer.classList.remove('open');
      }
  });
});

  menuItem.forEach((item) => {
    item.addEventListener('click', () => {
      menuItem.forEach((menu) => {
        menu.classList.remove('active');
      });
      item.classList.add('active');
    });
  });

  TBWORKS.addEventListener('click', () => {
    menuItem.forEach((menu) => {
      menu.classList.remove('active');
    });
    menuItem[0].classList.add('active');
      
    if (!drawer.classList.contains('open')) {
      // Open the drawer
      isCheckboxChecked = true;
      checkbox.checked = true;
      drawer.classList.add('open');
    }
  });
  
  document.body.addEventListener('click', (event) => {
    if (
      !event.target.matches('#TBWORKS') 
      && !event.target.matches('#nextPage') 
      && !event.target.matches('#nextPage2')
      && !event.target.matches('.project-content-container')
      && !event.target.matches('.social-logo')
      && !event.target.matches('.card-title-anchor')
    ) {
      if (isCheckboxChecked) {
        checkbox.checked = false;
      } else {
        this._closeDrawer(event, drawer);
      }
    }
  });
 
  document.addEventListener('DOMContentLoaded', () => {
    content.addEventListener('click', (event) => {
      const nextPageIds = ['nextPage', 'nextPage2', 'nextPage3', 'nextPage4']; // Add more IDs as needed
      const clickedId = event.target.id;
  
      // Check if the clicked element has an ID that matches one of the nextPageIds
      const index = nextPageIds.indexOf(clickedId);
  
      if (index !== -1) {
        menuItem.forEach((menu) => {
          menu.classList.remove('active');
        });
  
        // Add 1 to index because array indices are 0-based
        menuItem[index + 1].classList.add('active');
  
        if (!drawer.classList.contains('open')) {
          drawer.classList.add('open');
        }
  
        if (!isCheckboxChecked) {
          isCheckboxChecked = true;
          checkbox.checked = true;
        }
      } else {
        // Handle the case when clicking outside nextPage or nextPage2
        if (isCheckboxChecked) {
          isCheckboxChecked = false;
          checkbox.checked = false;
        }
        if (drawer.classList.contains('open')) {
          drawer.classList.remove('open');
        }
      }
    });
  });

  topnav.addEventListener('click', (event) => {
    if (!event.target.matches('#TBWORKS')) {
      // If the drawer is open, close it
      if (isCheckboxChecked) {
        isCheckboxChecked = false;
        checkbox.checked = false;
        drawer.classList.remove('open');
      } 
    }
  });
    },
  
    _toggleDrawer(event, drawer) {
      event.stopPropagation();
      drawer.classList.toggle('open');
    },
  
    _closeDrawer(event, drawer) {
      event.stopPropagation();
      drawer.classList.remove('open');
    },
  };
  
  export default DrawerInitiator;