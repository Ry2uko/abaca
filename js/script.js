$(document).ready(function(){
  console.log('Document ready');

  const swiper = new Swiper('.swiper-container .swiper', {
    loop: true,
    slidesPerView: 5,
    navigation: {
      nextEl: '.swiper-container .swiper-button-next',
      prevEl: '.swiper-container .swiper-button-prev',
    },
  });

  $('#menu-btn').on('click', () => {
    const dropdownContent = $('.dropdown-content');

    dropdownContent.css('maxHeight', dropdownContent.css('maxHeight') === '0px' ? `${dropdownContent[0].scrollHeight}px` : '0px');
  });

  $('.swipre-slide').on('mouseover', function(){
    console.log($(this))
  });
});