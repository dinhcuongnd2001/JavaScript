btnElement = document.querySelector('.btn')

/* ------ DOM EVENT ------ */

/*
    btnElement.onclick = function(e){
        // cong viec 1
        console.log('cong viec 1')
        // cong viec 2
        console.log('cong viec 2')
        // cong viec 3
        alert('cong viec 3')
    }
*/

// thuc hien cong viec tuan tu

/* ------ EVENT LISTENER ------ */
// c1
// btnElement.addEventListener('click', function(e){
//     // cong viec 1
//     console.log('this is misstion 1')
//     // cong viec 2
//     console.log('this is misstion 2')
//     // cong viec 3
//     console.log('this is misstion 3')
// })

// c2:

function mission1(){
    console.log('this is misstion 1')
}

function mission2(){
    console.log('this is misstion 2')
}

btnElement.addEventListener('click', mission1);
btnElement.addEventListener('click', mission2);
setTimeout(function(){
    btnElement.removeEventListener('click', mission2)
}, 2000)