// for of
// It is used to iterate an array 
// It is siple and normal loop used to iterate till the object (array,string,etc,... on which loop is used) get over.
// in for of loop by default the loop will run for all object so we dont require to increment or decrement the no of the index of the object 

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

// Maps
// Maps is a predefined data type which is an object in itself... carrying the predefined function and method to to be used on the data stored in Maps
//Maps is similar to normal object containing key, value pair as the data
//difference between Maps and object is object can store various data which is same or duplicate to other data but Maps stores only the unique data hence eliminate the duplicate data

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map);

for (const [key, value] of map) {
    //in above line we are separating the map data in key and value formate  
    console.log(`Data in Maps is ${key}  :-  ${value}`);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

/* for (const [key, value] of myObject) {
     console.log(key, ':-', value);
    
 }*/
//Note: For of loop cant be used directly to the objects.