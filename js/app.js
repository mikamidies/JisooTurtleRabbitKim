new Swiper ('.image-slider',{
    slidesPerView:3,
    loop: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 5
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 5
        },
        // when window width is >= 640px
        760: {
          slidesPerView: 3,
          spaceBetween: 10
        },
        980: {
            slidesPerView:4,
            spaceBetween:10
        }
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}