Array.prototype.map2 = function(callBack){
    // tu khoa this chinh la doi so duoc truyen vao
    // console.log(this);
    var output = [];
    for(var i = 0; i < this.length ; i++)
    {
        var result = callBack(this[i], i);
        // console.log('result: ', result);
        output.push(result);
    }
    return output;
};

var courses = [
    'JS',
    "PHP",
    "Ruby",
    "HTML",
    "CSS"
];

// var list = courses.map2(function(course, index){
//             return `<h2>${course}</h2>`
//             });
// console.log(list.join(' '));

// Array.prototype.forEach2 = function(callBack){
// 	for(var i = 0 ; i < this.length; i++)
//   {
//   	callBack(this[i], i);
//   }
// };

// courses.forEach2(function(course, index){
// 	console.log(index, course);
// });

Array.prototype.reduce2 = function(callBack, result){
    var i = 0 ;
    if(arguments < 2){
        i = 1;
        result = this[0];
    }
    for( ; i < this.length ; i++)
    {
        result = callBack(result, this[i], i, this);
    }
    return result;
};

var result = courses.reduce2(function(ans, item){
    if (item.includes('H')){
        return ans.concat(item);
    }
    return ans;
}, []);

console.log(result);

var course = new Array(10);
course.push("JS", 'PHP');
console.log(course)