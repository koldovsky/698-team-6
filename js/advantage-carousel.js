(function () {
  const slides = [
    `<div class="card_advantage">
            <img src="img/advantage/cash.svg" alt="Cash" class="carousel__advantage-image" />
            <p class="carousel__advantage-title">BETTER THAN COMPETITORS</p>
            <div class="carousel-line"></div>
            <p class="carousel__advantage-text">
              Have you found a better deal in a different company? Reach out
              to us and get 1 month for free.
            </p>
          </div>`,
    `<div class="card_advantage">
            <img src="img/advantage/car.svg" alt="Car" class="carousel__advantage-image" />
            <p class="carousel__advantage-title">AFFORDABLE RATES</p>
            <div class="carousel-line"></div>
            <p class="carousel__advantage-text">
              We are constantly keeping an eye on the prices to make sure
              we'll get you the best deal there is on the market.
            </p>
          </div>`,
    `<div class="card_advantage">
            <img src="img/advantage/doc.svg" alt="Doc" class="carousel__advantage-image" />
            <p class="carousel__advantage-title">ALL LEGAL PAPERWORK FILED</p>
            <div class="carousel-line"></div>
            <p class="carousel__advantage-text">
              There's a warranty for every car of the company. All the
              vehicles are taxed and have the breakdown cover.
            </p>
          </div>`,
    `<div class="card_advantage">
            <img src="img/advantage/monitor.svg" alt="Monitor" class="carousel__advantage-image" />
            <p class="carousel__advantage-title">A QUOTATION FOR ANY MODEL</p>
            <div class="carousel-line"></div>
            <p class="carousel__advantage-text">
              The company can give a no-obligation quotation for the cars of
              all models and types.
            </p>
          </div>`,
  ];

  let slideIdx = 0;

  function showCurrentSlide() {
    const slideContainer = document.querySelector(
      ".carousel__advantage .slide-container"
  );
    slideContainer.innerHTML = slides[slideIdx];
    // if (window.innerWidth > 600) {
    if (window.matchMedia("(min-width: 760px)").matches) {
      const secondSlideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
      slideContainer.innerHTML += slides[secondSlideIdx];
      if (window.matchMedia("(min-width: 1200px)").matches) {
        const thirdSlideIdx =
          secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
        slideContainer.innerHTML += slides[thirdSlideIdx];
      }
    }
  }

  function nextSlide() {
    slideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
    showCurrentSlide();
  }

  function prevSlide() {
    slideIdx = slideIdx - 1 < 0 ? slides.length - 1 : slideIdx - 1;
    showCurrentSlide();
  }

  showCurrentSlide();
  const nextButton = document.querySelector(".advantage__container > .next-btn");
  nextButton.addEventListener("click", nextSlide);

  const prevButton = document.querySelector(".advantage__container > .prev-btn");
  prevButton.addEventListener("click", prevSlide);

  window.addEventListener("resize", showCurrentSlide);
})();
