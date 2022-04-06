var courses = [
    {
        id:1,
        name: 'JS',
        coin: 250 
    },

    {
        id:2,
        name: 'HTML,CSS ',
        coin: 0 
    },

    {
        id: 3,
        name: 'Ruby',
        coin: 0 
    },
    
    {
        id: 4,
        name: 'Ruby',
        coin: 0 
    },
    
    {
        id: 5,
        name: 'PHP',
        coin: 400 
    },
    
    {
        id:6,
        name: 'ReactJS',
        coin: 500 
    }
];

courses.forEach(function(course, index){
    console.log(index, course);
});

console.log(courses.every(function(course, index){
    return course.coin === 0;
}))

var check = courses.some(function(course, index){
    return course.coin === 0;
});

console.log(check);

var check = courses.find(function(course, index){
    return course.name === 'Ruby2';
});

console.log(check);

var check = courses.filter(function(course, index){
    return course.name === 'Ruby';
});

console.log(check);