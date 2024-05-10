$(function (){

    'use strict';

     // landing

$(".landing .owl-carousel").owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 100,
    items: 1,
    nav: false,
    loop: false,
    dots: true,
});


    // client

$(".client .owl-carousel").owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 100,
    items: 1,
    nav: false,
    loop: true,
    dots: true,
});


});