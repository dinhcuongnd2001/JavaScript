
// console.log(listCourseBlock);
var courseApi = 'http://localhost:3000/course';

function start()
{
    getCourses(renderCourse)
    handleCreateForm();
}

start();

function getCourses(callback)
{
    fetch(courseApi)
        .then(function(response){
            return response.json();
        })
        .then(callback);
}

function createCourse(data,callback) 
{
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    };
    fetch(courseApi, options)
        .then(function(response){
            response.json();
        })
        .then(callback);
}

function handleDeleteCourse(id)
{
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    };
    fetch(courseApi + '/' + id, options)
        .then(function(response){
            response.json();
        })
        .then(function(){
            var courseItem = document.querySelector('.course-item-'+ id)
            if(courseItem)
            {
                courseItem.remove();
            }
        });

}

function renderCourse(courses)
{
    var listCourseBlock = document.querySelector('#list-course');
    var htmls = courses.map(function(course){
        return `
        <li class = "course-item-${course.id}">
        <h4>${course.name}</h4>
        <p>${course.description}</p>
        <button onclick = 'handleDeleteCourse(${course.id})'>Delete</button>
        </li>
        `;
    })
    listCourseBlock.innerHTML = htmls.join('');
}

function handleCreateForm()
{
    var createBtn = document.querySelector('#create');
    createBtn.onclick = function(){
        var nameCourse = document.querySelector('input[name = "name"]').value;
        // console.log(nameCourse);
        var descriptionCourse = document.querySelector('input[name = "description"]').value;
        // console.log(descriptionCourse)
        var formData = {
            name: nameCourse,
            description: descriptionCourse
        }
        
        createCourse(formData, function(){
            getCourses(renderCourse);
        });
    }
}