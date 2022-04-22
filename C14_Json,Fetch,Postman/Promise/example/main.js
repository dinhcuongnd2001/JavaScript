var users = [
    {
        id: 1,
        name : 'Dinh Cuong'
    },
    {
        id : 2,
        name : 'admin'
    },
    {
        id:3,
        name : 'guest'
    }
];

var comments = [
    {
        id: 1,
        user_id : 1,
        content: 'Anh chua ra video ha?'
    },
    {
        id: 2,
        user_id: 2,
        content: 'vua ra xong em oi!'
    },
    {
        id: 3,
        user_id : 1,
        content: 'Cam on anh.'
    },
];

function getUsersByIds(userIds)
{
    return new Promise(function(resolve){
        var result = users.filter(function(user){
            return userIds.includes(user.id);
        });
        setTimeout(function(){
            resolve(result);
        },1000);
    });
}


function getComments()
{
    return new Promise(function(resolve) {
        // setTimeout chi mo phong van de lay du lieu tren mang bi cham
        setTimeout(function(){
                resolve(comments);
            }, 1000);
        });     
}

getComments()
    .then(function(comments){
        // console.log(comment)
        var userIds = comments.map(function(comment){
            return comment.user_id;
        });

        return getUsersByIds(userIds)
            .then(function(users){
                // console.log(data)
                return {
                    users: users,
                    comments: comments
                };
            })
    })
    .then(function(data){
        var commnentBlock = document.getElementById('comment-block');
        var html ='';
        data.comments.forEach(function(comment){
            var user = data.users.find(function(user){
                return user.id === comment.user_id;
            });

            html += `<li>${user.name}: ${comment.content}<\li>`
        });
        commnentBlock.innerHTML = html;
    });

