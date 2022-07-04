(function () {

    const slides = [`<div class="features-card">
                        <img class="features-card-icon" src="img/consume/car-rent.svg" alt="">
                        <h4 class="features-card-title">FULLY INSURED LEASING</h4>
                        <p class="features-card-description">AD Insurance Company is our partner. Fully Comprehensive
                            Insurance is included in the basic package.</p>
                        <ul class="about-cheklist">
                            <li class="about-cheklist-item"><i class="fa-solid fa-check"></i><span
                                    class="cheklist-text">Accident management</span></li>
                            <li class="about-cheklist-item"><i class="fa-solid fa-check"></i><span
                                    class="cheklist-text">Breakdown cover</span>
                            </li>
                            <li class="about-cheklist-item"><i class="fa-solid fa-check"></i><span
                                    class="cheklist-text">Family cover</span></li>
                        </ul>
                    </div>`,
        `<div class="features-card">
                        <img class="features-card-icon" src="img/consume/car-repair.svg" alt="">
                        <h4 class="features-card-title">MAINTAINING ALL THE VEHICLES</h4>
                        <p class="features-card-description">You get a fully serviceable car that has passed a timely
                            technical inspection. No surprises on the roads!</p>
                        <ul class="about-cheklist">
                            <li class="about-cheklist-item"><i class="fa-solid fa-check"></i><span
                                    class="cheklist-text">Accident
                                    management</span></li>
                            <li class="about-cheklist-item"><i class="fa-solid fa-check"></i><span
                                    class="cheklist-text">Annual check-ups</span>
                            </li>
                            <li class="about-cheklist-item"><i class="fa-solid fa-check"></i><span
                                    class="cheklist-text">Courtesy car</span>
                            </li>
                        </ul>
                    </div>`,
        `<div class="features-card">
                        <img class="features-card-icon" src="img/consume/map-location.svg" alt="">
                        <h4 class="features-card-title">CAR LEASING FOR PERSONAL TRIPS</h4>
                        <p class="features-card-description">If you are planning a family trip or need a car for daily
                            rides, we will find a suitable and affordable option.</p>
                        <ul class="about-cheklist">
                            <li class="about-cheklist-item"><i class="fa-solid fa-check"></i><span
                                    class="cheklist-text">Budget vehicles</span></li>
                            <li class="about-cheklist-item"><i class="fa-solid fa-check"></i><span
                                    class="cheklist-text">All kinds of vans and campers</span>
                            </li>
                            <li class="about-cheklist-item"><i class="fa-solid fa-check"></i><span
                                    class="cheklist-text">Electric vehicles for city rides</span>
                            </li>
                        </ul>
                    </div>
                </div>`,
        ` <div class="features-card">
                    <img class="features-card-icon" src="img/consume/car-rental.svg" alt="">
                    <h4 class="features-card-title">LEASING FOR BUSINESS AFFAIRS</h4>
                    <p class="features-card-description">We work with companies of any scale that need vehicles for
                        representational activities or just daily use.</p>
                    <ul class="about-cheklist">
                        <li class="about-cheklist-item"><i class="fa-solid fa-check"></i><span
                                class="cheklist-text">Middle-class vehicles</span></li>
                        <li class="about-cheklist-item"><i class="fa-solid fa-check"></i><span
                                class="cheklist-text">Executive-class cars</span>
                        </li>
                        <li class="about-cheklist-item"><i class="fa-solid fa-check"></i><span
                                class="cheklist-text">Exceptional serivces</span>
                        </li>
                    </ul>
                </div>`,
        `<div class="features-card">
                        <img class="features-card-icon" src="img/consume/calendar.svg" alt="">
                        <h4 class="features-card-title">SHORT-TERM LEASING DEALS</h4>
                        <p class="features-card-description">You can start with 3 or 6 months of lease. Our experts will
                            find a suitable option tailored to your needs.</p>
                        <ul class="about-cheklist">
                            <li class="about-cheklist-item"><i class="fa-solid fa-check"></i><span
                                    class="cheklist-text">Individual approach</span></li>
                            <li class="about-cheklist-item"><i class="fa-solid fa-check"></i><span
                                    class="cheklist-text">Special prices</span>
                            </li>
                            <li class="about-cheklist-item"><i class="fa-solid fa-check"></i><span
                                    class="cheklist-text">Flexible conditions</span>
                            </li>
                        </ul>
                    </div>`,
        `<div class="features-card">
                        <img class="features-card-icon" src="img/consume/car-rentalnew.svg" alt="">
                        <h4 class="features-card-title">CONTRACT HIRE GUIDE</h4>
                        <p class="features-card-description">The monthly rental amount is based on the original cost of the vehicle, the mileage, and the length of the contract.</p>
                        <ul class="about-cheklist">
                            <li class="about-cheklist-item"><i class="fa-solid fa-check"></i><span
                                    class="cheklist-text">Contracts for 1-5 years </span></li>
                            <li class="about-cheklist-item"><i class="fa-solid fa-check"></i><span
                                    class="cheklist-text">Fixed monthly payments</span>
                            </li>
                            <li class="about-cheklist-item"><i class="fa-solid fa-check"></i><span
                                    class="cheklist-text">Low cost of extra miles.</span>
                            </li>
                        </ul>
                    </div>`

    ]

    let slideIndex = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.features .slider-wrapper .slider-container');
        slideContainer.innerHTML = slides[slideIndex];
        if (window.matchMedia('(min-width: 768px)').matches) {
            const secondSlideIndex = slideIndex + 1 >= slides.length ? 0 : slideIndex + 1;
            slideContainer.innerHTML += slides[secondSlideIndex];
            if (window.matchMedia('(min-width: 992px)').matches) {
                const thirdSlideIndex = secondSlideIndex + 1 >= slides.length ? 0 : secondSlideIndex + 1;
                slideContainer.innerHTML += slides[thirdSlideIndex];
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

    const nextButton = document.querySelector('.features .slider-wrapper > button.btn-next');
    nextButton.addEventListener('click', nextSlide);

    const prevButton = document.querySelector('.features .slider-wrapper > button.btn-prev');
    prevButton.addEventListener('click', prevSlide);

    window.addEventListener('resize', showCurrentSlide);
})();