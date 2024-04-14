const promiseone = new Promise(function(resolve, reject){
    setTimeout(function(){
        cosole.log('Async tast is completed');
        resolve()
    }, 1000)
})

promiseone.then(function(){
    console.log("Promise consumed");
})



//promise in a single connected part-----------

new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Async task 2');
    }, 1000);
}).then(function(){
    console.log('Async tast 2 complete');
})

//third promise-------------------------

promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({username: "aquib", email: "aquib@example.com"})
    }, 1000);
})
promiseThree.then(function(user){
    console.log(user);
})