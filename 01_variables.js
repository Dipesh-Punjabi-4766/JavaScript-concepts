//Const Variable cant be changed
const accountID = 144553

/*Except Const variable all variables can be changed
javascript has a inbuilt scope problem due to which we rarelly use var keyword to store the data in variable.... instead of var we use let keyword which eliminates the error and stores the data in memory in efficient manner */

let accountEmail = "basic4766@gmail.com"

var accountPassword = "123456"

//We can directly store the date without any keyword but it is not recommended 
accountCity = "Jaipur"

//As a editor of code we have the option if we want to end the line with semicolon(;) or not... eventually when we use javascript it doesnt matter if we put semicolon(;) or not
let accountState

accountEmail="hc@hc.com"
accountPassword="567"
accountCity="mumbai"

console.log(accountID);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
console.log(accountState);

console.table([accountID,accountEmail,accountPassword,accountCity,accountState])
