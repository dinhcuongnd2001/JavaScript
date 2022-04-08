Array.prototype.forEach2 = function(callback){
    for(var index in this)
    {
        if(this.hasOwnProperty(index)){
            callback(this[index], index , this)
        }
    }
};


var course = [
    'Javascript',
    'HTML',
    'CSS',
    'Ruby'
];

course.forEach2(function(course, index, array){
    console.log(index, course, array);
});