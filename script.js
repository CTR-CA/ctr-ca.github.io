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

        slides[slideIndex - 1].style.display = "block";

        setTimeout(autoSlide, 200);
    }
});
