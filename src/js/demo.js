const demo = () => 'Webpack Boilerplate v5.15.0 - SASS/PostCSS, ES6/7, browser sync, source code listing and more.';

// swiper
const sliderParameters = {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
};

const swiper = new Swiper('#features-slider', sliderParameters);

// slick
$(document).ready(function(){
    $('.slick-slider').slick({
      autoplay: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      infinite: true,
    });
  });
// eslint-disable-next-line no-console
console.log(demo());
