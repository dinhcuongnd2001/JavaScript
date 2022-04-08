Array.prototype.some2 = function(callBack){
    for(var i in this)
    {
        if(this.hasOwnProperty(i)){
            if(callBack(this[i], i, this))
            {
                return true;
            }
        }
    }
    return false;
};
var courses = [
    
    {
        name: "JS",
        coin: 250,
        isFinish: true
    },

    {
        name: "PHP",
        coin: 860,
        isFinish: false
    },

    {
        name: "Node.JS",
        coin: 888,
        isFinish: false
    }
];

var result = courses.some2(function(course){
    return course.isFinish === true;
});

console.log(result);