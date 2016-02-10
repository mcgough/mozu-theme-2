define(['jquery'],function($) {
  $('.hamburger').on('click',function(e){
    e.preventDefault();
    $('#mobile-header').toggleClass('mobile-open');
    return $('.mobile-nav').toggleClass('mobile-nav-open');
  });
});