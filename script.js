document.addEventListener("DOMContentLoaded", function () {
    var slideIndex = 0;
    autoSlide();

    function autoSlide() {
        var i;
        var slides = document.getElementById("slider_testing").getElementsByClassName("slider");

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndex++;

        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        slides[slideIndex - 1].style.display = "block";

        setTimeout(autoSlide, 5000); // Change slide every 2 seconds
    }
});