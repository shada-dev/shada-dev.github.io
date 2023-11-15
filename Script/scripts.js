document.addEventListener("DOMContentLoaded", function() {
    var marquee = document.getElementById("marquee");
    var isPaused = false;

    marquee.addEventListener("mouseenter", function() {
        if (!isPaused) {
            marquee.stop();
            isPaused = true;
        }
    });

    marquee.addEventListener("mouseleave", function() {
        if (isPaused) {
            marquee.start();
            isPaused = false;
        }
    });
});


