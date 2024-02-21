document.addEventListener('DOMContentLoaded', function() {

  const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.pagination',
      bulletClass: 'pagination__button',
      bulletActiveClass: 'pagination__button--active',

    },
    navigation: {
      nextEl: '.procedurs__navigation-next',
      prevEl: '.procedurs__navigation-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1280: {
        slidesPerView: 3,
      },
   
    }

  })
});