const btnConsultation = document.getElementById('btnConsultation');
const bgcCons = btnConsultation.style.backgroundColor;
const txtColorCons = btnConsultation.style.color;

btnConsultation.addEventListener('click', function(e) {
    const element = e.target.style;
    element.backgroundColor = "white";
    element.color = "black";

    setTimeout(function() {
        element.backgroundColor = bgcCons;
        element.color = txtColorCons;
    }, 1000);

});

const btnMore = document.getElementById('btnMore');
const bgcMore = btnMore.style.backgroundColor;
const txtColorMore = btnMore.style.color;

btnMore.addEventListener('click', function(e) {
    const element = e.target.style;
    element.backgroundColor = "red";
    element.color = "black";

    setTimeout(function() {
        element.backgroundColor = bgcMore;
        element.color = txtColorMore;
    }, 1000);

});