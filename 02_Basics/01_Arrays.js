//Arrays

const myArr = [0,1,2,3,4,5]
const myHeroes = ["shatkiman", "Batman", "Antman"]

console.log(myArr);
console.log(myHeroes);

// Arrays Methods

myArr.push(6)
myArr.push(7)
myArr.pop()
console.log(myArr);

myArr.unshift(9) //it places the number in front i.e in the beginning
console.log(myArr);  // it removes the number present in the front

console.log(myArr.includes(5));  // gives boolean outputs


// slice and splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)  // slice extracts the number less than the range and don't change the actual array

console.log(myn1)
console.log("B", myArr);

const myn2 = myArr.splice(1,3)  //splice extracts the number upto the range and removes the numbers form the actual array
console.log("C", myArr);
console.log(myn2);