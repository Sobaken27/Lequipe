new WOW().init();
$(document).ready(function () {
if ($(window).width() < 1679 ) {
            $('#left1').removeClass('fadeInRight');
            $('#left1').addClass("fadeInLeft");
            $('#left2').removeClass('fadeInUp');
            $('#left2').addClass("fadeInLeft");
            $('#right1').removeClass('fadeInDown');
            $('#right1').addClass("fadeInRight");
            $('#right2').removeClass('fadeInLeft');
            $('#right2').addClass("fadeInRight");
        }
});
$(window).on('load', function () {
    $preloader = $('.loaderArea'),
      $loader = $preloader.find('.loader');
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
  });