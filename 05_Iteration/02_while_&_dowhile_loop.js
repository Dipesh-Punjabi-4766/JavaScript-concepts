//While Loop
//while loop check the condition first and then implements the given code
let index = 0
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2
}

let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

//Do-While
//Do-While loop implements the given code once and then check the condition for re implementation of the code based o condition 

let score = 10

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);