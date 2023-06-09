document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    autoSlide();

    function autoSlide() {
        let i;
        let slides = document.getElementById("slider_testing").getElementsByClassName("slider");

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndex++;

        if (slideIndex > slides.length) {
            slideIndex = 1;
        }


        if (slides[slideIndex - 1].classList.contains("video")) {

            slides[slideIndex - 1].style.display = "block";
            setTimeout(function () {

                autoSlide();
            }, 83000); // the video duration in seconds
        } else {
            slides[slideIndex - 1].style.display = "block";
            setTimeout(autoSlide, 25000); // For non-video slides, continue with the default timer (25 seconds)
        }
    }
});