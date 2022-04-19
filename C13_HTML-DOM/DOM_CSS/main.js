var boxElement = document.querySelector('.box');
boxElement.style.width = '100px';
boxElement.style.height = "200px";
// boxElement.style.backgroundColor = 'red';
// neu muon them nhieu thuoc tinh thi su dung cach sau de tranh viec
// viet lap lai
var boxElement2 = document.querySelector('.box1');
Object.assign(boxElement2.style,{
    width : '200px',
    height : '100px',
    backgroundColor :'green'
});

console.log(boxElement.style.backgroundColor);
