const swiper = new Swiper('.swiper-container', {
  slidesPerView:3,
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      spaceBetween:20,
      
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView:3,
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });