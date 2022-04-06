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

// Flat: lam phang mang tu mot mang sau "Depth array"

var depthArray = [1, 2, [3,4], 5, 6,[7,8,9]];

var flatArray = depthArray.reduce(function(flatOutput, depthItem){
    return flatOutput.concat(depthItem);
},[])

console.log(flatArray);

// lay ra cac khoa hoc va dua vao mot mang moi
var topic = [

    {
        topic: 'font-end',
        courses: [
            {
                id:1,
                title: "HTML, CSS"
            },
            {
                id:2,
                title: "Javascript"
            }
        ]
    },

    {
        topic: 'back-end',
        courses: [
            {
                id:1,
                title: "PHP"
            },
            {
                id:2,
                title: "NodeJs"
            }
        ]
    }
];

var listCourses = topic.reduce(function(list, item){
    return list.concat(item.courses);
}, []);

console.log(listCourses);