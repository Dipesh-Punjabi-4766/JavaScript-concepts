// scope is just the line commands which are inside the {},following the command keyword like function name, if else loop etc... exculding the the object keyword where {} is used to declare the object
// the are two type of scope 1) global scope 2)block scope
// when ever the element or the variable is declared outside {} the usability of that element, variable is known as global scope... i.e we can use the declared element and variable both inside and outside the scope(inculding inside {} )
// when ever the element or the variable is declared Inside {} the usability of that element, variable is limited to that {} which is known as block scope... i.e we can't use the declared element and variable outside the scope (and only use it inside {} )

// let and const follow the theory of global and block scope but var is not able to follow the theory hence it is rarely used to declare any variable.

let a = 300
const b =150
var c = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
    
}

console.log(a);
console.log(b);
console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

// there are two method to declare a function and accessing them...1)Normal function 2) using expressions and storing the expression in the variable 

// 1)Normal Function
console.log(addone(5))

function addone(num){
    return num + 1
}
// notice the above function and when it is accessed
// normal function can be access before declatration


// 2) using expressions and storing the expression in the variable
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5));

// notice the above function and when it is accessed
// the above function can be not be accessed before declatration and only be accessed after the declaration due to concept of hoisting in Js.

