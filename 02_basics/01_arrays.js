// array
// Basic declaration of array
const myArr = [0, 1, 2, 3, 4, 5]
// in the above eg, myArr is the name of array and 0,1,2,3,4,5 are the elements of array which are inserted using brackets []...
// elements of array can be of single type or multi-type like the mixed one...
const mixedArr = [0, 1, 2, 3, 4, 5, "Dipesh", true]
// In array the indexing of the element starts from 0

// For printing the particular elements of the array we use index no of the element else we can print the whole arr using array name

console.log(mixedArr[6]);
console.log(mixedArr);

const myHeors = ["shaktiman", "naagraj"]

// Another way to declare the array using new keyword... when we use this way to declare we dont need to use the brakets [] we directly use the () to insert the elements in the array

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array methods

// Push is used to insert the new element in the array
myArr.push(6)
console.log(myArr);
myArr.push(7)
console.log(myArr);

// Pop is used to remove the last element from the array
myArr.pop()
console.log(myArr);

// unshift is used when we want to insert an element at first position from left to right.... it is similar to push just the difference is the position at which the element is to be inserted  
myArr.unshift(9)
console.log(myArr);

// shift is used when we want to remove an element from the first position from left to right.... it is similar to pop just the difference is the position at which the element is to be removed  
myArr.shift()
console.log(myArr);

//includes is method of questioning about the element is present or not... if the element is present it will show true else false
console.log(myArr.includes(9));
console.log(myArr);

//indexof is the method used to find the index no of the element present in the array.... if the element is present it will give index no of the element else -1 which means the element is absent in the array 
console.log(myArr.indexOf(3));
console.log(myArr);

//join is used to convert the array element into a string
const newArr = myArr.join()
// in above eg we convert the data of array named myArr into a string named newArr
console.log(myArr);

console.log( newArr);


// slice, splice

console.log("My array ", myArr);
//slice is used to get the sub-portion from the full portion of an array
// while we using the slice method we give the range of index for a slice... range includes the staring point of the slice and the ending point of the slice
// in sliceing the sub-portion end at the index (endpoint index-1) 
//in slicing the main array is not manipulated i.e a copy is used to give the sub-portion of the full array 
const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

//splice is also used to get the sub-portion from the full portion of an array
// while we using the splice method we give the range of index for a splice... range includes the staring point of the splice and the ending point of the splice
// in spliceing the sub-portion end at the index (endpoint index-1) 
//in splicing the main array is manipulated i.e the main array is used to cut the sub-portion from full portion of an array and provide it as splice 
const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);