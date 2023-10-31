const marquee = document.getElementById('myMarquee');

        marquee.addEventListener('mouseover', () => {
            marquee.stop();
        });

        marquee.addEventListener('mouseout', () => {
            marquee.start();
        });