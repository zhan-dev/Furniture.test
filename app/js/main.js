$(document).ready(function(){
  $('.intro').slick({
        arrows:true, // показать стрелки
        dots:false, // не показывать точки
        autoplay:true,
        autoplaySpeed: 3500,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
  });
});