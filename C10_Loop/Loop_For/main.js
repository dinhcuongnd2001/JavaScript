// for(var i = 1 ; i <= 10 ; i++){
//     console.log(i);
// }

// var myArray = [
//     'Js',
//     'CSS',
//     "HTML",
//     'PHP'
// ];

// var lengthArray = myArray.length;
// for(var i = 0 ; i < lengthArray ; i++){
//     console.log(myArray[i])
// }

// For with IN
myString = 'hello'
var myInfo = {
    name: 'Dinh Cuong',
    age: 22,
    address: 'Nam Dinh'
};

for (var key in myInfo){
    console.log(myInfo[key])
}

for (var key in myArray){
    console.log(myArray[key])
}

for (var key in myString){
    console.log(myString[key])
}


// ====== For with Of ======

for (var value of myArray){
    console.log(value)
}

for (var value of myString){
    console.log(value)
}

for(var value of Object.values(myInfo)){
    console.log(value)
}