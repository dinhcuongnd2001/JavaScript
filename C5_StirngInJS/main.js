var myString = "1aa aaa aaa";
console.log(myString.indexOf('aaa', 4))
console.log(myString.slice(-3, -1));
console.log(myString.replace('aaa','bbb'));

function check(a) {
    
}

var a = 16;// number
var b = new Number(15); // object
console.log(typeof(a) + " " + typeof(b));

function showMassage2(value) {
    if(!!value){
        return typeof value === 'number';
    }
    return false;
}

console.log(showMassage2(NaN));
