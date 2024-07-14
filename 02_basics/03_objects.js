//Object can be defined in types 1) constructor 2)litrals

// 1) object Constructor
// when the object is created using constructor it is know as singleton 
// for object to be created using contructor we use Object.create method

// 2) object literals

const mySym = Symbol("key1")

// when an object is created using litrals method it store the data in key:value formate
// here key can be a no ar a string but by default the js store the key in string formate, value can be of any data type like no, string, array, boolean, any other object, etc.
// Basic syntax of object using litral method is given
//const objectName = {key1:value1,key2:value2,.... }  
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
//when we want to insert the Symbol as a key in our object we use [symbolName]:value
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//There are two ways to access an object
// 1) using objectName.Key
console.log(JsUser.email)

// 2) using objectName["key"]   ....here the key is given in string format with ""
console.log(JsUser["email"])

// when the key in the object is itself given as a string, then we have to use option 2 i.e objectName["key"] to access the data else error will occoured 
console.log(JsUser["full name"])

// When we want to access the Symbol we use objectName[symbolName] 
console.log(JsUser[mySym])

//when we want to chenge the value of key we use = notation and provide new value
JsUser.email = "hitesh@chatgpt.com"

//When we want freeze the value of key (i.e once the value of key is set it cant be changed )
Object.freeze(JsUser)

//here we have tryied to change the value but as the previous line state that the key is freezed hence it cant be changed..
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS user");
}
console.log(JsUser.greeting);


JsUser.Two = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.Two);