// console.log("A");
// console.log("Q");
// console.log("U");
// console.log("I");
// console.log("B");


function sayMyname() {
    console.log("A");
    console.log("Q");
    console.log("U");
    console.log("I");
    console.log("B");
}

//sayMyname()

function addTwonumbers(number1, number2){
    const result = number1+number2;
    return result
}

const sum = addTwonumbers(1,6)
console.log("result: ", sum);


// ----------------------------------------

function loginUsrMessage(username){
    if(!username){
        console.log("Please Enter a Username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUsrMessage("Aquib"));

// -------------------------------------------------


function calculatecartprice(...num){
    return num

}

console.log(calculatecartprice(100,200,300));


// ----------------------------------------------------------

const user = {
    username1 : "Aquib",
    price: 199
}

function handleObjects(anyobject){
    console.log(`username is ${anyobject.username1} and the price is ${anyobject.price}`);
}