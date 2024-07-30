const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

//way to check if given array is empty or not 
const userEmail_1 = []

if (userEmail_1.length === 0) {
    console.log("Array is empty");
}

//way to check if given object is empty or not 
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined
// ?? operator is used when we are fetching the data from DB.... and we want to test and prevent the null and undefined data to be fetched on screen hence we provide the alternative data which should be displayed if the null or undefined data is occured or fetched from db

let val1,val2,val3,val4;

val1 = 5 ?? 10
// after ?? the alternative is provided
//in above case there is no testing it will provide 5 as val 1
val2 = null ?? 10
// here we are testing for null and if we get the data to be null it wll be replaced by 10
val3 = undefined ?? 15
val4 = null ?? 10 ?? 20
//Here we have provided two alternatives if we have fetched null data it will be replaced with 10 or 20
// in most cases where two alternative are given for replacement the first alternative is used to replace the data

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

// Terniary Operator
// it is similar to If-else loop
//suntax-->  condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")