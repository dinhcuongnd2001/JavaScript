const number = [1,2,3,4,5];
const result  = number.reduce(function(total, item){
    return total + item;
},0)

console.log(result);