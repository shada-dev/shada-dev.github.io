
//slid-show
$(document).ready(function () {
  // Initialize the carousel
  $('#carouselExampleIndicators').carousel();

  // Set the interval for automatic sliding (in milliseconds)
  var interval = 50; // Change this value to adjust the interval

  // Start the automatic slide show
  var slideInterval = setInterval(function () {
    $('#carouselExampleIndicators').carousel('next');
  }, interval);

  // Pause the slide show when the mouse hovers over the carousel
  $('#carouselExampleIndicators').on('mouseover', function () {
    clearInterval(slideInterval);
  });

  // Resume the slide show when the mouse leaves the carousel
  $('#carouselExampleIndicators').on('mouseleave', function () {
    slideInterval = setInterval(function () {
      $('#carouselExampleIndicators').carousel('next');
    }, interval);
  });
});

function stopMarquee() {
  var marquee = document.getElementById("myMarquee");
  marquee.stop();
}

function startMarquee() {
  var marquee = document.getElementById("myMarquee");
  marquee.start();
}




