var inputValue = document.querySelector('input[type ="text"]')
// console.log(inputValue)
/* ------ lay value khi co su thay doi ------ */

// inputValue.onchange = function(e){
//     console.log(e.target.value);
// }

/* ------ lay value khi nhao tu ban phim ------ */
// inputValue.oninput = function(e){
//     console.log(e.target.value);
// }

/* ------ xu ly voi type = 'check' ------ */

// var inputValue = document.querySelector('input[type ="checkbox"]')
// inputValue.onchange = function(e){
//     console.log(e.target.checked);
//     // console.log(e)
// }

/* ------ xu ly voi select ------ */
// selectElement = document.querySelector('select')
// selectElement.onchange = function(e){
//     console.log(e.target.value)
// }

/* ------ xu ly key up / down ------ */
inputValue.onkeyup = function(e){
    console.log(e);
}

/* ------ xu ly key up / down ------ */
document.onkeyup = function(e){
    console.log(e.which);
}