//object literals

const mysym = Symbol("key1")
const jsuser = {
    name: "Aquib",
    [mysym]: "mykey1",
    age: 21,
    location: "Jamshepdur",
    email: "aquiboqbal@google.com",
    isLoggedIN: false,
    lastloggedin: ["monday", "tuesday"]
}

console.log(jsuser.email)
console.log(jsuser["email"]);
console.log(jsuser[mysym]);

//Object.freeze(jsuser) // jsuseer object will be freezed and no changes will be done to this obj

jsuser.greeting = function() {
    console.log(`Hello js User ${this.name}`);
}
console.log(jsuser.greeting());