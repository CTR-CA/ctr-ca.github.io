document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    autoSlide();

    function autoSlide() {
        let i;
        let slides = document.getElementById("slider_testing").getElementsByClassName("slider");

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }

        if (slides[slideIndex].classList.contains("video")) {
            slides[slideIndex].style.display = "block";
            setTimeout(function () {
                autoSlide();
            }, 40000); // Adjust the timeout to match the video duration (33 seconds)
        } else {
            slides[slideIndex].style.display = "block";
            setTimeout(autoSlide, 25000); // For non-video slides, continue with the default timer (25 seconds)
        }

        slideIndex++;
    }
});