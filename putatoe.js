document.addEventListener('DOMContentLoaded', function() {
    const marquee = document.querySelector('.marquee');
    const marqueeContainer = document.querySelector('.marquee-container');
    const scrollLeftBtn = document.querySelector('.scroll-left');
    const scrollRightBtn = document.querySelector('.scroll-right');

    let scrollAmount = 30;
    const scrollStep = 2;
    const scrollIntervalTime = 5000;

    const marqueeWidth = marquee.scrollWidth;

    const cloneImages = marquee.innerHTML;
    marquee.innerHTML += cloneImages;

    function scrollLoop() {
        scrollAmount += scrollStep;
        marquee.style.transform = `translateX(-${scrollAmount}px)`;

        if (scrollAmount >= marqueeWidth) {
            scrollAmount = 0;
        }
    }

    let scrollInterval = setInterval(scrollLoop, 10);

    marqueeContainer.addEventListener('mouseenter', function() {
        clearInterval(scrollInterval);
    });

    marqueeContainer.addEventListener('mouseleave', function() {
        scrollInterval = setInterval(scrollLoop, 10);
    });

    let timerInterval = setInterval(function() {
        scrollAmount += scrollStep;
        marquee.style.transform = `translateX(-${scrollAmount}px)`;

        if (scrollAmount >= marqueeWidth) {
            scrollAmount = 0;
        }
    }, scrollIntervalTime);

    scrollLeftBtn.addEventListener('click', function() {
        scrollAmount -= scrollStep;
        if (scrollAmount < 0) {
            scrollAmount = marqueeWidth - scrollStep;
        }
        marquee.style.transform = `translateX(-${scrollAmount}px)`;
    });

    scrollRightBtn.addEventListener('click', function() {
        scrollAmount += scrollStep;
        if (scrollAmount >= marqueeWidth) {
            scrollAmount = 0;
        }
        marquee.style.transform = `translateX(-${scrollAmount}px)`;
    });
});
