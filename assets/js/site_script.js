jQuery(document).ready(function () {

  jQuery('.buger-menu').click(function () {
    if (jQuery('.our-header').hasClass('active-menu')) {
      jQuery('.our-header').removeClass('active-menu');
    } else {
      jQuery('.our-header').addClass('active-menu');
    }

  })
  jQuery(window).on('resize', function(){
    var win = jQuery(this);
    if (win.width() <= 767) { 
        jQuery('.oevents-slider').owlCarousel({
          loop: true,
          stagePadding: 33,
          margin: 10,
          responsiveClass: true,
          autoHeight: false,
          autoplay:false,
          items: 1,
          nav: false,
          dots: true,
        })
      }
      else{
      }
  });


    $(".oe-open-btn").click(function() {
      $(this).closest(".event-img").next().slideToggle("slow");
      if (jQuery(this).hasClass('active')) {
        jQuery(this).removeClass('active');
      } else {
        jQuery(this).addClass('active');
      }
    });
    $(".eclose-popup").click(function() {
      $(this).parent().slideUp("slow");
      $(this).closest('.events-popup-content').prev().children('.oe-open-btn').removeClass('active');
    })
});