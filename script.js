document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    let slides = document.getElementById("slider_testing").getElementsByClassName("slider");
    let currentSlide = slides[slideIndex];

    autoSlide();

    function autoSlide() {
        hideSlide(currentSlide);

        if (currentSlide.classList.contains("video")) {
            playVideo(currentSlide);
        } else {
            showSlide(currentSlide);
            setTimeout(nextSlide, 25000); // For non-video slides, continue with the default timer (25 seconds)
        }
    }

    function hideSlide(slide) {
        slide.style.display = "none";
    }

    function showSlide(slide) {
        slide.style.display = "block";
    }

    function playVideo(videoSlide) {
        const video = videoSlide.querySelector("video");
        showSlide(videoSlide);

        video.addEventListener("ended", function () {
            hideSlide(videoSlide);
            nextSlide();
        });

        video.play();
    }

    function nextSlide() {
        hideSlide(currentSlide);
        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        currentSlide = slides[slideIndex];
        autoSlide();
    }
});