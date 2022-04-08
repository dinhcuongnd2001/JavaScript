// lay qua id
    var headingNode = document.getElementById('heading');
    console.log(headingNode);
// lay qua class
var title = document.getElementsByClassName('title');
console.log(title);
// lay qua tag name
var list = document.getElementsByTagName('li');
console.log(list);
// lay qua CSS Selector
var elementLi = document.querySelector("ul li:nth-child(2)");
console.log(elementLi);

// lay qua CSS Selector ALL

var listItemNodes = document.querySelectorAll('.box-1 li');
console.log(listItemNodes);

// window.onload = function(){
//     var a = document.getElementById("demo");
//     console.log(a);
//     var headingNode = document.getElementById('heading');
//     console.log(headingNode);
//     var elementLi = document.querySelector(".list .item");
//     console.log(elementLi);
// }
