Array.prototype.filter2 = function(callBack){
    var res = [];
    for(var i in this)
    {   
        if(this.hasOwnProperty(i))
        {
            var test = callBack(this[i], i , this);
            if(test)
            {
                res.push(this[i]);
            }
        }
    }
    return res;
};

var courses = [
    
    {
        name: "JS",
        coin: 250
    },

    {
        name: "PHP",
        coin: 860
    },

    {
        name: "Node.JS",
        coin: 888
    }
];

var newCourse = courses.filter2(function(course){
    return course.coin > 300;
});
console.log(newCourse);