
const btnConsultation = document.getElementById('btnConsultation');
const bgc = btnConsultation.style.backgroundColor;
const txtColor = btnConsultation.style.color;

btnConsultation.addEventListener('click', function(e) {
    e.target.style.backgroundColor = "white";
    e.target.style.color = "black";

    setTimeout(function() {
        e.target.style.backgroundColor = bgc;
        e.target.style.color = txtColor;
    }, 1500);
    

});


// function changeBgc(e) {
//     e.target.style.backgroundColor = 'white';
// }








// вот так сработает
// document.querySelector('button').onclick = function(){
//     console.log(this)  // теперь this это кнопка
//     this.style.background = "red";
//   }
  
    



// function clickColor() {
// 	var d;
// 	d = document.getElementById('tagP');

// 	if (d.style.color='red') {
// 		d.style.color='black';
// 	}

// 	if (d.style.color='black') {
// 		d.style.color='red';
// 	}

// 	console.log(d.style.color);
// };

// btnConsultation.addEventListener('click', callback);
// function callback() {
//     btnConsultation.style.backgroundColor = 'white';
// }

