const logger = log => {
    console.log(log);
} 

logger("Hi")

const tong = (a,b) => ({a:b, b:b});
console.log(tong(2,2));

var course = {
    name : 'JS',
    getName : function(){
        return this.name;
    }
    // getname : () =>{
    //     return this;
    // }
}

console.log(course.getName())