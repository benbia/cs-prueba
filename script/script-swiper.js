var swiper_memorias = new Swiper(".swiper-memorias", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  slideToClickedSlide: true,
  preventClicks: true,
  roundLengths: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    480: {
      slidesPerView: 1.5,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 25
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 30
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 30
    }
  }
});

var swiper_tecnicos = new Swiper(".swiper-tecnicos", {
  slidesPerView: 5,
  spaceBetween: 30,
  centeredSlides: true,
  slideToClickedSlide: true,
  preventClicks: true,
  roundLengths: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    480: {
      slidesPerView: 1.5,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 25
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 30
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 30
    }
  }
});
