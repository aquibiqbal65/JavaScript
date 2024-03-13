const score= 400;
console.log(score);

const balance =new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));  // precisio value i.e digits after .point

const otherNumber= 123.4232

console.log(otherNumber.toPrecision(4));

const hundreds= 1000000
console.log(hundreds.toLocaleString('en-IN'));


//==================++++++===============================

console.log(Math);
console.log(Math.abs(-4)); //it make the negative values positive!
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.sqrt(4));
console.log(Math.min(4,7,8,9,2,6));

console.log(Math.random()*10); // Random() gives a random numbers between 0 and 1 in points

const min =1
const max =6

console.log(Math.floor(Math.random()* (max-min+1)) + min);