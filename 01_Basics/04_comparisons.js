console.log(null>0);
console.log(null==0);
console.log(null>=0); // its is true
//the reason is that equality check == and comparisons > < >= <= works differently in js. comparisons converts null  to a number, treating it as 0.

// this type of conversioons can lead to inconsistency in code, and are prefered not to use comparisons between two different datatypes.