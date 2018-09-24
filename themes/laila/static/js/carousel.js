$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
          { breakpoint: 768, settings: { slidesToShow: 2 } },
          { breakpoint: 992, settings: { slidesToShow: 3 } },
          { breakpoint: 1140, settings: { slidesToShow: 4 } },
          { breakpoint: 1500, settings: { slidesToShow: 5 } },
        ]
    });
});
