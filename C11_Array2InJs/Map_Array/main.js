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

function courseHandler(course)
{
    return {
        id: course.id,
        name: `Khoa Hoc  ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`
    };
}

var newCourse = courses.map(courseHandler);
console.log(newCourse)