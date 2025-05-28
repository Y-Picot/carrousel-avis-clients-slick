function adjustMarginAndCardWidth() {
  var windowWidth = $(window).width();

  // Use 80% of window width for card width on small screens,
  // but limit the card width to a maximum of 800px on large screens.
  var cardWidth = Math.min(windowWidth * 1.2, 1200);

  // Set the new card width
  $('.testimonial').width(cardWidth);

  // Center the card by setting the left and right margins of the slick list
  var newMargin = (windowWidth - cardWidth) / 2;
  $('.slick-list').css('margin-left', newMargin);
  $('.slick-list').css('margin-right', newMargin);
}

// Call the function at document ready
$(document).ready(function () {
  $('.regular').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 2000,
    centerMode: true,
    centerPadding: '35px',
  });


  // Disable the slider on mouseenter
  $('.carousel-container').on('mouseenter', function () {
    $('.regular').slick('slickPause');
  });

  // Enable the slider on mouseleave
  $('.carousel-container').on('mouseleave', function () {
    $('.regular').slick('slickPlay');
  });

  // Apply the margin and card width adjustment
  adjustMarginAndCardWidth();
});

// Call the function also every time the window is resized
$(window).on('resize', adjustMarginAndCardWidth);