// 1 Dinh nghia key: value cho object
var name = 'Javascript'
var price = 1000
// viet ngan gon

var course = {
    /*
        thay vi viet la :
        name : name,
        price : price
    */
    name,
    price,

    /*  
    2.dinh nghia method cho object
        Thay vi viet la:
        getName = function(){
            return this.name;
        }
    */
    getName(){
        return this.name;
    }
}
console.log(course.getName());

// 3: dinh nghia key cho object duoi dang bien
// ung dung: gan ten bien theo nhung dieu kien nhat dinh

var fieldName = 'name';
var fieldValue = 'value';

const course1 = {
    [fieldName]: 'Js',
    [fieldValue]: 1000
}

console.log(course1)