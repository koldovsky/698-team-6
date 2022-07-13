const btnConsultation = document.getElementById('btnConsultation');
const bgc = btnConsultation.style.backgroundColor;
const txtColor = btnConsultation.style.color;

btnConsultation.addEventListener('click', function(e) {
    const element = e.target.style;
    element.backgroundColor = "white";
    element.color = "black";

    setTimeout(function() {
        element.backgroundColor = bgc;
        element.color = txtColor;
    }, 1500);

});