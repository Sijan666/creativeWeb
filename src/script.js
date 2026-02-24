// $('.autoplay').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
// });

$('.story-slider').slick({
 slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});