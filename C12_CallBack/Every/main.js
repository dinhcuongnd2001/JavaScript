Array.prototype.every2 = function(callBack){
    for(var i in this)
    {
        if(this.hasOwnProperty(i))
        {
            if(!callBack(this[i], i , this))
            {
                return false;
            }
        }
    }
    return true;
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
        isFinish: true
    },

    {
        name: "Node.JS",
        coin: 888,
        isFinish: true
    }
];

console.log(courses.every2(function(course){
    return course.isFinish === true;
}))

console.log(document);