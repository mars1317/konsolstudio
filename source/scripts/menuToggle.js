$('#burger-menu-btn').on('click', function(e) {
  e.preventDefault();
  $('.header__menu').toggleClass('mobile-active');
  $('.header').toggleClass('active')

  $('body').toggleClass('lock')

})