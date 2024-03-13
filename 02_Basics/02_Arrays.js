// araays

const marvel_heroes = ["spiderman", "batman", "antman"]
const dc_heroes = ["superman", "man", "captainamerica"]

const all_heroes = marvel_heroes.concat(dc_heroes)
console.log(all_heroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes]  //spread method is declared by three dots ... it is used to concat arrays 
console.log(all_new_heroes); 


const another_array = [1,2,3, [4,5],6,7,[8,9,[10,11]]]
const real_another_array = another_array.flat(Infinity); //it makes the nested array in a single array
console.log(real_another_array);


//array conversions

console.log(Array.from("Aquib iqbal"))  // it converts the string to array

