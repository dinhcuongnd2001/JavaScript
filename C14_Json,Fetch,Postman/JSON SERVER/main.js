var courseApi = 'http://localhost:3000/course';
fetch(courseApi)
    .then(function(response){
        return response.json();
    })
    .then(function(course){
        console.log(course);
    });