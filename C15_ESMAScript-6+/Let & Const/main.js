 /* ------ 1: Khac nhau: scope ------ */
// var: toan cuc (gobal varibale)
// let, const: cuc bo (local variable)

{
    let a = 100;
    {   
        // uu tien gia tri cap nhat cuoi cung
        let a = 'thay doi'
        console.log(a)
    }
}

// console.log(a)

 /* ------ 2: Khac nhau: Hosting ------ */

/*
    var duoc ho tro hosting 
    vi du khoi tao gia tri truoc khi khai bao thi trinh duyet
    van co the hieu va chay duoc

    const/let thi khong
*/


b = 1;
var b;
// let b; or const b: khong duoc
console.log(b);


 /* ------ 3: const: khong gan lai duoc (assignment)/ let, var thi co ------ */

const a = 10;
// a = 100; =>> typeError
console.log(a)