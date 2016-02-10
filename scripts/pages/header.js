define(['jquery'], function($) {

  if(window.innerWidth > 550) {
    var $headerNav = $('.minimal');
    $(document).scroll(function(){
      var offset = 130;
      var scroll = $(document).scrollTop();
      if(scroll >= offset) {
        $('body').addClass('sticky');
        return $headerNav.addClass('fixed');
      } else {
        $('body').removeClass('sticky');
        return $headerNav.removeClass('fixed');
      }
    });
  }

  $('.header-searchbox-button').on('click',function(){
    $('.mz-pageheader #searchbox').toggleClass('open-search');
  });
});