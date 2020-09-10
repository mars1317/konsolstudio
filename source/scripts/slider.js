import $ from 'jquery';
import 'slick-carousel';

$(document).ready(function(){
  $('.slider').slick({
    arrows:true,
    dots:true,
    adaptiveHeight:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    infinite: false,
    autoplay:false,
    autoplaySpeed: 1000,
    pauseOnFocus:true,
    pauseOnHover:true,
    pauseOnDotsHover:true,
    draggable:true,
  });

});
