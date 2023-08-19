$(document).ready(function () {

    $('#banner').owlCarousel({
        loop: true,
        margin: 10,
        items: 2,
        nav: false,
        dots: true,
        center: true,
        autoplay: true,
        smartSpeed: 700,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    });

    $('#testimonial').owlCarousel({
        loop: true,
        margin: 30,
        items: 1,
        nav: false,
        dots: true,
        center: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
})