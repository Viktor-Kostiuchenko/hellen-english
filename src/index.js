import './sass/main.scss';

$(function () {
    $('.slider').slick({
        slidesToShow: 7,
        speed: 600,
        initialSlide: 0,
        asNavFor: ".comments-list",
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                initialSlide: 0,
            }
        }]
        
    });
    $('.comments-list').slick({
        arrows: true,
        asNavFor: ".slider",
         responsive: [{
            breakpoint: 768,
            settings: {
                arrows:false,
            }
        }]
    })
})