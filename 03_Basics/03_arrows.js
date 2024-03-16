const user= {
    username: "aquib",
    price: 99,

    welcomeMessage: function(){
        console.log();
    }
}

//-------------------------------

// function chai(){
//     console.log(this);
// }

// chai()

// const chai = function(){
//     let username="Aquib"
//     console.log(this.username);
// }
//------------------------------------
const chai = () => {
    let username="Aquib"
    console.log(this);
}

//-----------------------arrow function

// const addTwo = (num1, numb2) => {
//     return num1+numb2
// }

const addTwo = (num1, num2) => (num1 +num2)

console.log(addTwo(1,2));
console.log(addTwo(1,2));
console.log(addTwo(1,2));