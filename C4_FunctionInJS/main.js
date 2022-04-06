function showMassage() {
    var resultSt = '';
    for (var param of arguments){
        resultSt += `${param} - `;

    }
    console.log(resultSt);
}

showMassage('1', 2, 3, 4)

function sum() {
    alert("Ham tinh tong da duoc goi");
    sum = 0;
    for (var param of arguments){
        sum += param;
    }
    return sum;
}

console.log(sum(1,2,3,'4',5));

function showMassage2(a) {
    return isNaN(a);
}

console.log(showMassage2(4));