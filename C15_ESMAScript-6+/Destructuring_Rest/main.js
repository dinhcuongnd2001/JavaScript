var course = ['js', 'html', 'css']
var [,b,] = course;
var[a, ...rest] = course
console.log(rest);

var container = {
    name : 'js',
    cost : 1000
}

var {name , cost} = container
console.log(name, cost);

// toan tu: ... la rest dung trong destructuring va thuoc tinh cua function

function logger(...para){
    console.log(para);
}


// Spread ky hieu la: ... : dung de
//      1. giai cac array, object,
//      2. dung de thuc hien cac doi so truyen vao
var array1 = [1,2,3,4]
var array2 = ['js', 'html', 'css']
//  dung de giai array;
console.log(...array2);
array3 = [...array2, ...array1];
console.log(array3)

// dung la tham so truyen vao

logger(...array3)