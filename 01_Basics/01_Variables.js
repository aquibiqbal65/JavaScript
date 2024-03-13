const accountId = 321324
let accountEmail = "aquibiqbal65@gmail"
var accountPassword = "3432"
accountCity = "Jamshedpur"  //possible
let accountState;  //if we let the variable blank it is called undefined

// accountId = 23223 // not allowed

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional sc
*/

console.table([accountEmail, accountPassword, accountCity, accountState]);