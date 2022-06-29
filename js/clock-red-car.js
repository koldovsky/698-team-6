(function () {
    const clockContainer = document.querySelector(".clock-red-car");
    clockContainer.innerText = new Date().toLocaleTimeString();
  
    function updateClock() {
      clockContainer.innerText = new Date().toLocaleTimeString();
    }
  
    setInterval(updateClock, 1000);
  })();
  