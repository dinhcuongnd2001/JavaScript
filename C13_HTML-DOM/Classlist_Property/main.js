var boxElement = document.querySelector('.box');
console.log(boxElement.classList.length);
// console.log(boxElement.classList.add('red'));
// console.log(boxElement.classList.contains('red'));
// boxElement.classList.remove('red');
setInterval(() =>{
    boxElement.classList.toggle('red');
},500);