(async function () {
  const response = await fetch("car.json");
  const cars = await response.json();
  renderCars(cars, 1);

  document.querySelector(".convert").addEventListener("click", convertCurrency);
  async function convertCurrency() {
    const response = await fetch(
      "https://v6.exchangerate-api.com/v6/852ed503c372f3fadbcda5d8/latest/USD"
    );
    const currencies = await response.json();
    const currencyName = document.querySelector(".currency").value;
    const rate = currencies.conversion_rates[currencyName];
    renderCars(cars, rate);
  }

  function renderCars(cars, rate) {
    const carsContainer = document.querySelector(".cars-carousel-container");
    carsContainer.innerHTML = "";
    for (const car of cars) {
      carsContainer.innerHTML += `
        <div class="cars__carousel">
         <img
           src="${car.img}"
            alt="${car.brand}"
           class="cars__carousel-image"
          />
          <p class="cars__carousel-brand">${car.brand}</p>
          <p class="cars__carousel-prise">${(car.price * rate).toFixed(
            2
          )} / MONTH</p>
          <p class="cars_carousel-model">${car.model}</p>
          <p class="cars__carousel-characteristics">${car.characteristics}")</p>
          <a href="#" class="cars__carousel-learn">LEARN MORE</a>
        </div>`;
    }
  }
})();
