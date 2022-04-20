var aElements = document.querySelectorAll('a');
// h1Element = document.querySelector('h1');
// h1Element.onclick = function(e){
//     console.log(e.target);
// }

/* ------ Demo the preventDefault ------ */
    /* ------1------ */

console.log(aElements)
for(var i = 0 ; i < aElements.length ; i++){
    aElements[i].onclick = function(e){
        if (!e.target.href.startsWith('https://www.google.com.vn')){
            e.preventDefault();
        }
    }
}
    /* ------2------ */

var ulElement = document.querySelector('ul');
// console.log(ulElement);
ulElement.onmousedown = function(e){
    e.preventDefault();
}
ulElement.onclick = function(e){
    console.log(e.target);
}

/* ------ Demo the stopPropagation------ */

document.querySelector('div').onclick = function(e){
    console.log('DIV')
}

document.querySelector('button').onclick = function(e){
    e.stopPropagation();
    console.log("Click Me!")
}

/* ----- Practice ----- */
// var w50Elements = document.querySelectorAll('.w-50');
// var containerElement = document.querySelector('.container');
// console.log(w50Elements)

// w50Elements[0].onclick = function(e){
//     Object.assign(containerElement.style,{
//         backgroundColor: 'green'
//     })
// }