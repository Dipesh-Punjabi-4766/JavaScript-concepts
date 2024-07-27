// Immediately Invoked Function Expressions (IIFE)
// IIFE is a type of creating a function and using it Immediately after the declaration
// syntax for declaring IIFE
// (...)(arguments);
//first () is the creation of fuction can be a normal methof i.e named IIFE or a unnamed method i.e arror function
//second () is for calling the IIFE.. we can also send an argument to the function inside this ()
//note: After every creation and immediate call there must be a ; so that js can understand that the first IIFE is over and it need to move to the second IIFE 

// Below is known as named IIFE becoz the function is created using a name and it is a normal method to create a function
(function chai(){
    console.log(`DB CONNECTED`);
})();

// Below is known as Un-named IIFE becoz the function is created using a arrow method to create a function without any name
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

