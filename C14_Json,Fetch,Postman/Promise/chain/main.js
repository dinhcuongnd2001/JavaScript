// b1: new Promise
// b2: Executor
var promise = new Promise (
    // Executor
    function (resolve, reject) {
        //logic
        // thanh cong: resolve;
        // that bai: reject;
        
        resolve()
    }
);

promise
    .then(function(){
        // duoc goi khi resolve() duoc goi
        return 1;
    })

    .then(function(data){
        console.log(data)
        return 2;
    })

    .then(function(data){
        console.log(data)
        return 3;
    })

    .catch(function(){
        // duoc goi khi reject() duoc goi
        console.log('fallure!')
    })

    .finally(function(){
        // duoc goi khi resolve() hoac reject() duoc goi
        console.log('done!')
    });