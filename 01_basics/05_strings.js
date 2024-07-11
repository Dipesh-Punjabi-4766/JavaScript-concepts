const name = "hitesh"
const repoCount = 50

console.log(name + repoCount + " Value");


// Another way to concatinate the result
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// Another way to set a string in variable using object method 
const gameName = new String('hitesh-hc-com')

//String stores the data in key value pair formate i.e in below line when we say gameName[0] we want to print thwe value of key 0 (in gameName the value of key 0 is h)
console.log(gameName[0]);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
// In substring we provide two index no first one is for start point from where we want to start the sub-string and the end point where the sub-string should end (it is the index of end point + 1)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
// In slice we provide two index no first one is for start point from where we want to start the sliceing of the string and the end point where the sliceing should end (it is the index of end point + 1)
// in sliceing method we can provide any -starting point  
console.log(anotherString);


const newStringOne = "   hitesh    "
console.log(newStringOne);
// While Storing the data we use trim method to remove the unwanted spaces from the data
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));