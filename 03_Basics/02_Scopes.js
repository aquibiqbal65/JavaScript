let a= 3300

// block scope-------------------
if(true){
    let a=10
    const b= 20
    var c= 30
    console.log("inner a: ", a);
}
console.log("outer a: ",a);
// console.log(b);
console.log(c);


//----------------------------------------------

function one(){
    const username = "aquib"

    function two(){
        const website = "youtube"
        console.log(username);
    }
   // console.log(website);  //error

    two()
}