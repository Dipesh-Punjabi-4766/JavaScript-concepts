//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')

const anotherId = Symbol('123')

console.log(id === anotherId);

console.log(typeof anotherId);

// const bigNumber = 3456543576654356754n


// Reference (Non primitive)
// Objects, Functions
// Array =>also comes on object 

const heros = ["shaktiman", "naagraj", "doga"];
console.log(typeof heros);

let myObj = {
    name: "hitesh",
    age: 22,
}
console.log(typeof myObj);

const myFunction = function(){
    console.log("Hello world");
}
console.log("type of myFuntion: "+typeof myFunction);


// https://262.ecma-international.org/5.1/#sec-11.4.3


// Memory
// Stack(Primitive) and Heap(Non Primitive)
// When ever we use the Primitive datatype i.e we use stack memory we are always provided with a copy of data to work with (like modification, deletion, etc are performed on copy of the data hence original remains unchanged)
// When ever we use the Non primitive datatype i.e we use heap memory we are always provided with the reference of data to work with (i.e any modification, deletion, etc are performed on original data)


// Eg of Primitive Data type
let oldName="Dipesh Punjabi"
let newName=oldName
newName="DP"
console.log("Old Name: "+oldName);
console.log("New Name: "+newName);


// Eg of non Primitive data type
let user_one={
    email:"abc4766@gmail.com",
    upi_Id:"12abc456"
}

let user_two=user_one
user_two.email="dcs3522@yahoo.com"
user_two.upi_Id="987buvyasb2564"

/*{
    email:"dcs3522@yahoo.com"
    upi_Id:"5647weya55467"
}*/
console.log("user one mail ID: "+user_one.email);
console.log("user two mail ID: "+user_two.email);

console.log("user one Upi Id: "+user_one.upi_Id);
console.log("user two Upi Id: "+user_two.upi_Id);
