(function() {
    const clockConteiner = document.querySelector('.clock__deals');

    function updateClockDials() {
        clockConteiner.innerText = new Date().toLocaleTimeString([], { hour12: false });
    }

    setInterval(updateClockDials, 1000);
})();

