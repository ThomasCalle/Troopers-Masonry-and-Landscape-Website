/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER HOMES ===============*/
const swiperHome = new Swiper('.home__swiper', {
   loop: true,
   speed: 800,
   parallax: true,
   effect: 'fade',

   pagination: {
      el: '.swiper-pagination',
      type: 'fraction',

      formatFractionCurrent: (number) => { return '0' + number},
      formatFractionTotal: (number) => { return '0' + number },
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
})

//=============== FOOTER ===============//
// Dynamically create and insert footer content
document.addEventListener("DOMContentLoaded", function () {
   const footer = document.getElementById("footer");
 
   if (footer) {
     // Change new Date().getFullYear() to 2025 if desired
     footer.innerHTML = `
       <p>&copy; 2025 Troopers Masonry and Landscape. All Rights Reserved. <a href="/privacy-policy.html">Privacy Policy</a></p>
     `;
   }
 });
