(function () {

    const slides = [
        `<div><img src="img/gallery/gallery1.png" alt="gallery photo" /></div>`,
        `<div><img src="img/gallery/gallery2.png" alt="gallery photo" /></div>`,
        `<div><img src="img/gallery/gallery3.png" alt="gallery photo" /></div>`,
        `<div><img src="img/gallery/gallery4.png" alt="gallery photo" /></div>`,
        `<div><img src="img/gallery/gallery5.png" alt="gallery photo" /></div>`,
        `<div><img src="img/gallery/gallery6.png" alt="gallery photo" /></div>`
    ]

    let slideIndex = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.gallery-carousel .container-main .slider-container');
        slideContainer.innerHTML = slides[slideIndex];
        if (window.matchMedia('(min-width: 480px)').matches) {
            const secondSlideIndex = slideIndex + 1 >= slides.length ? 0 : slideIndex + 1;
            slideContainer.innerHTML += slides[secondSlideIndex];
            if (window.matchMedia('(min-width: 768px)').matches) {
                const thirdSlideIndex = secondSlideIndex + 1 >= slides.length ? 0 : secondSlideIndex + 1;
                slideContainer.innerHTML += slides[thirdSlideIndex];
                if (window.matchMedia('(min-width: 992px)').matches) {
                    const fourthSlideIndex = thirdSlideIndex + 1 >= slides.length ? 0 : thirdSlideIndex + 1;
                    slideContainer.innerHTML += slides[fourthSlideIndex];
                    if (window.matchMedia('(min-width: 1280px)').matches) {
                        const fifthSlideIndex = fourthSlideIndex + 1 >= slides.length ? 0 : fourthSlideIndex + 1;
                        slideContainer.innerHTML += slides[fifthSlideIndex];
                    }
                }
            }
        }
    }

    function nextSlide() {
        slideIndex = slideIndex + 1 >= slides.length ? 0 : slideIndex + 1;
        showCurrentSlide();
    }

    function prevSlide() {
        slideIndex = slideIndex - 1 < 0 ? slides.length - 1 : slideIndex - 1;
        showCurrentSlide();
    }

    showCurrentSlide();

    const nextButton = document.querySelector('#gallery > div > button.btn-next');
    nextButton.addEventListener('click', nextSlide);

    const prevButton = document.querySelector('#gallery > div > button.btn-prev');
    prevButton.addEventListener('click', prevSlide);

    window.addEventListener('resize', showCurrentSlide);
})();