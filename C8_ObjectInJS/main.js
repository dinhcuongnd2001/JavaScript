var myInfo = {
    name: 'Cuong',
    age: 21,
    address: 'Nam Dinh',
    getName: function(){
        return this.name;
    }
};

// console.log(myInfo);
// myInfo.email = "dinhcuongnd2001@gmail.com";
// console.log(myInfo);
// console.log(myInfo.name)
// console.log(myInfo['email'])
// var key = 'age';
// console.log(myInfo[key])
// console.log(myInfo.getName())

// Object Prototypy: Co the them phuong thuc va thuoc tinh qua prototypy

function User(firstName,lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}
var user1 = new User('Dinh', 'Cuong', 'avatar')
User.prototype.className = 'F8';
console.log(user1)

var date = new Date();
console.log(date)
var year = date.getFullYear();
var month = date.getMonth()+1;
var day = date.getDay();
console.log(`${day}/${month}/${year}`)
