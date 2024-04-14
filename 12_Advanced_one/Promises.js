const promiseone = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async tast is completed');
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


// promiseFour---------------------------------------------

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true
        if(error){
            resolve({username: "Aquib", password: "123"})
        }

        else{
            reject('ERROR: Something went wrong')
        }
    }, 1000);

})

promiseFour.then(function(user){
    return user.username
}).then(function(username){        //--------chaining in promises
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("the promise is eother resolved or rejected")
})




//promiseFive--------------------------------------------

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true
        if(error){
            resolve({username: "javascript", password: "123"})
        }

        else{
            reject('ERROR: JS went wrong')
        }
    }, 1000);
})

// error handling using try catch-----------
async function consumepromisefive(){
    try{
        const response = await promiseFive
    console.log(response);
    }
    catch{
        console.log(error);
    }
}

// ----------------------------------------------------

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ",error);
    }
}
getAllUsers()


// ------------------------------------------------------------------

fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})