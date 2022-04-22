// b1: new Promise
// b2: Executor
var promise = new Promise (
    // Executor
    function (resolve, reject) {
        //logic
        // thanh cong: resolve;
        // that bai: reject;
        
        resolve(123)
        reject();
    }
);

promise
    .then(function(a){
        // duoc goi khi resolve() duoc goi
        console.log(a)
    })

    .catch(function(){
        // duoc goi khi reject() duoc goi
        console.log('fallure!')
    })

    .finally(function(){
        // duoc goi khi resolve() hoac reject() duoc goi
        console.log('done!')
    });