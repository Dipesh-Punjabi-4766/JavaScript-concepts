// Function 
// Basic syntax for Creation Of Function
// function functionName(parameters){...} 
function sayMyName(){
    console.log("D");
    console.log("i");
    console.log("e");
    console.log("p");
    console.log("e");
    console.log("s");
    console.log("h");
}
// Reference of Function is the functionName of the function without brackets ().
// execution of the function is when the functionName of the function is with brackets().

// By using execution of the function we can print the data of function on console
// Basic syntax for execution is funtionName(arguments) 
sayMyName()

function addition(num1,num2){
    console.log(num1+num2);
}

addition(3,4)

// the above function is just printing the console line without returning any data... hence if want to store the result of function for future reuseability we will not be able to store the data hense for storing the result we use the below method 

function addTwoNumbers(number1, number2){

    let result = number1 + number2
    return result
    // once the return statement is provided in function... the function will not execute any line of code after the return line
    // there is one more way to return the data from function without storing it into any variable
    // return number1+number2 
}

const result = addTwoNumbers(3, 5)

console.log("Result: ", result);


function loginUserMessage(username){
    if(username===null){
        console.log("Argument is null");
        return
    }
    if(username===undefined){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("hitesh"))

console.log(loginUserMessage(undefined));

console.log(loginUserMessage(null));

// Below is an example when the coder is unassured about no of paramenter which will be given to function to perform the operation hence we use rest operator to provide js a hint about n no of parameter are been given
// basic syntax of rest operator is ...parameterName. rest operator is similar to spread oprator... just the difference is in thier use-cases
//rest operator return the paramenter data in the form of array

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

// in above eg: rest operator returns all the data 200, 400, 500, 2000 in a single array.... but if we want to separate and discard the first n input from retuned array we can provide the (val1, val2, valn, ...num1) as a parameter
// by using the separate val name we will only get the return array of rest operator i.e ...num1 
function calCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

// when we want use prebuilt object as an parameter... we cant dirctly write the objectName as an parameter but instead of any objectName we use anyobject as an parameter.
//anyobject is an predefined keyword which lets us to use any object as an parmeter.

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
    // in above concole log when we want use the key of an object which we have given in parameter we cant use objectName.KeyName instead we usr anyobject.keyName which direct fetches the value of key and return it to the command

}

handleObject(user)

//Another way to provide object as an arguments to the function without creating any separate variable object 
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]
//when we want provide array as an parameter we use getArray keyword without providing the arrayName in/as parameter
// while accessing also we will use getArray keyword as getArray[index no].

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));

// If we want to pass an array as in argument without creating array separetly... we use the below method
console.log(returnSecondValue([200, 400, 500, 1000]));
