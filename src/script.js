$(function () {
    $('.slider').slick({
        slidesToShow: 3,
        speed: 600,
        initialSlide: 0,
        asNavFor:".comments-list"
    });
    $('.comments-list').slick({
        arrows: false,
        fade: true,
        asNavFor:".slider"
    })
})