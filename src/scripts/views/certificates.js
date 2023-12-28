/* eslint-disable linebreak-style */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CONFIG from '../globals/config';
import { createCertificatesTemplate } from './template-creator';

const Certificates = {
  async render() {
    return `
      <div class="content">
        <div id="certificatesId" class="certificates">
        </div>
      </div>`;
  },

  async afterRender() {
    const header = document.querySelector('header');
    header.style.zIndex = '1';
    document.body.classList.add('hide-scrollbar');
    const certificatesContainer = document.querySelector('#certificatesId');
    certificatesContainer.innerHTML += createCertificatesTemplate();
    // const certContainer = document.querySelector('.certificates-container');
    // certContainer.style.opacity = 0;

    // setTimeout(() => {
    //   certContainer.style.opacity = 1;
    // }, 100); // Change 1000 to the desired duration in milliseconds
    const certificateUrls = [
      'https://drive.google.com/file/d/1FuF3hiV5HfwJVZzMQVGdBPr0kOVAmIZS/view?usp=sharing',
      'https://drive.google.com/file/d/17--0mujMoz_339LFe8xi2E8_qV-QojGC/view?usp=sharing',
      'https://drive.google.com/file/d/1neNVwwu3MMnWHVpH2emso6k1vptnqFwi/view?usp=drive_link',
      'https://drive.google.com/file/d/1TsELu_2lfYVNhPrnHKRahm4Kzs1pcmdl/view?usp=drive_link',
      'https://drive.google.com/file/d/1iSGjolkN3kXiqci2CWfP8fVgP04pKDU8/view?usp=drive_link',
      'https://drive.google.com/file/d/1YAu9VaQL_roqXXoGNRzfJXRrqauC1Kzq/view?usp=drive_link',
      'https://drive.google.com/file/d/1hhOzaLcBGFbkBD62DZxnt_HWuKz8S-5t/view?usp=drive_link',
      'https://drive.google.com/file/d/1Xsq04FvGs_uewH_e_Sh5a3vn1dHHSEZ7/view?usp=drive_link',
      'https://drive.google.com/file/d/1uSzo3KwUQD2Wwc5zvd6AHQIg2b-XLCTB/view?usp=drive_link',
      'https://drive.google.com/file/d/1JmBDQalvJOlHlRgHYlN9SWF7qX-b_f0J/view?usp=drive_link',
      'https://drive.google.com/file/d/1EApji3bGUCGPYSl7WDLajWs3LUiFMexr/view?usp=drive_link',
    ];

    const certificateItemsContainer = document.getElementById('certificateItems');

    const generateCards = (data) => {
      data.forEach((certificate, index) => {
        const { imageName, title } = certificate;
        const imageSrc = `${CONFIG.CERTIFICATE_IMAGE_URL}${imageName}`;
        const zIndex = index + 1;

        const card = document.createElement('div');
        card.classList.add('certificate-card');
        card.style.zIndex = zIndex;

        const image = document.createElement('img');
        image.src = imageSrc;
        image.alt = 'Certificate Image';
        image.classList.add('card-image');
        const figcaption = document.createElement('figcaption');
        figcaption.classList.add('card-title');

        const anchor = document.createElement('a');
        anchor.textContent = title;
        anchor.href = certificateUrls[index]; // Replace '#' with your desired URL
        anchor.classList.add('card-title-anchor');
        anchor.target = '_blank';
        anchor.rel = 'noopener noreferrer';

        figcaption.appendChild(anchor);
        card.appendChild(image);
        card.appendChild(figcaption);
        certificateItemsContainer.appendChild(card);
      });
    };

    // Assuming 'certificatesData' contains an array of certificate objects with imageName and title
    const certificatesData = [
      { imageName: '1.png', title: 'Belajar Dasar Pemrograman Web' },
      { imageName: '2.png', title: 'Menjadi Front-End Web Developer Expert' },
      { imageName: '3.png', title: 'Memulai Dasar Pemrograman untuk Menjadi Pengembang Software' },
      { imageName: '4.png', title: 'Cloud Practicioner Essentials (Belajar Dasar AWS Cloud)' },
      { imageName: '5.png', title: 'Belajar Dasar Pemrograman JavaScript' },
      { imageName: '6.png', title: 'Belajar Membuat Aplikasi Back-End untuk Pemula' },
      { imageName: '7.png', title: 'Pengenalan ke Logika Pemrograman (Programming Logic 101)' },
      { imageName: '8.png', title: 'Belajar Dasar Git dengan GitHub' },
      { imageName: '9.png', title: 'Meniti Karier sebagai Software Developer' },
      { imageName: '10.png', title: 'Belajar Fundamental Front-End Web Development' },
      { imageName: '11.png', title: 'Belajar Membuat Front-End Web untuk Pemula' },
      // Add other certificate data objects here
    ];

    generateCards(certificatesData);
    gsap.registerPlugin(ScrollTrigger);

    const spacer = 75;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.certificate-items',
        scrub: true,
        start: 'top 50%', // Adjust the start position to 40% from the top
        end: '+=4000', // Adjust the end position to a larger value
        markers: false,
        pin: true,
      },
    });

    tl.fromTo(
      '.certificate-card:not(:first-child)',
      {
        x: (index) => window.innerWidth / 1 + spacer * index,
        stagger: 0.5,
      },
      {
        x: (index) => spacer * (index + 1),
        stagger: 0.5,
      },
    );
    // tl.scrollTrigger.kill();
    const links = document.querySelectorAll('.menu-item:not(.certificate), #TBWORKS');
    links.forEach((link) => {
      link.addEventListener('click', () => {
        // Kill ScrollTrigger on link click
        ScrollTrigger.killAll();

        // Navigate to the new page
        // (You can use your preferred method for navigation here)
      });
    });
  },
};

export default Certificates;
