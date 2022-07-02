(function () {
    var currentSlide = 0;
    var container = document.querySelector('.reviews .reviews__carousel');
    var nextButton = document.querySelector('.reviews .reviews__carousel-button-container.right');
    var prevButton = document.querySelector('.reviews .reviews__carousel-button-container.left');

    function nextSlide () {
        if ((currentSlide + 1) === container.children.length) return;
        prevButton.classList.remove("disabled");
        container.children[currentSlide].style.transform = "translateX(-"+ (++currentSlide * 100 ) +"%)";
        container.children[currentSlide].style.transform = "translateX(-"+ (currentSlide * 100 ) +"%)";
        if ((currentSlide + 1) === container.children.length) nextButton.classList.add("disabled");
    }
    function prevSlide () {
        if (!currentSlide) return;
        nextButton.classList.remove("disabled");
        container.children[currentSlide--].style.transform = "translateX("+ (currentSlide * 100 ) +"%)";
        container.children[currentSlide].style.transform = "translateX(-"+  (currentSlide * 100 ) +"%)";
        if  (!currentSlide) prevButton.classList.add("disabled");
    }
    
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
})();