const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
const heros=[1,2,3]
//push is used to inserts the elements present in () to the array
marvel_heros.push(dc_heros)
// In above eg we had pushed the whole array by providing the name of the array... hence the push fuction will insert all the elements of the dc_heros array as a single element
// push dont require any other variable to store the result it uses the same array in which the insertion is made
// while using push fuction we can only merge 2 array
console.log("Using Spread way"+marvel_heros);

// As the elements of dc_heros array are inserted in marvel_heros array as a single element... if we want fetch the element of dc_heors we need to specify the index no of element with the single whole elements index no i.e from below line we can see [3] is the index of element containing whole element of array dc_heros and [1] is the index of element which we want to fetch  
console.log(marvel_heros[3][1]);

// For inserting all the elements of dc_heros(i.e 2rd array) separately without using push fuction we use concat... which makes easy to fetch the data directly without specifying the whole story of array 1 and array 2
// while using concat funtion we can merge more the 2 arrays by providing , in between arrays names
// concats needs a specific variable where it can store the result of concat hence we use that specify variable to print the result of concat

const allHeros = marvel_heros.concat(dc_heros,heros)
console.log("Using concat way"+allHeros);

// Another way to insert the data separetly using spread way
// by using spread way we can also merge more than 2 arrays using , in between array names
const all_new_heros = [...marvel_heros, ...dc_heros,...heros]
console.log("Using Spread way"+all_new_heros);

//Eg of array1 which consist another array2 and another array3 i.e it is like a loop
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
//Way to separate the elements of array and put them in single array
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

// isArray is a questioning function used to find out is it array or not... if its a array it will print true else false
console.log(Array.isArray("Hitesh"))

//When we use from fuction it creates the array of input and print the every single elements of input as a separate element of the array 
console.log(Array.from("Hitesh"))

//here the js gets confused and is not able to make array of key-value pair hence print an empty array []
console.log(Array.from({name: "hitesh"}))

let score1 = 100
let score2 = 200
let score3 = 300
// array.of is similar to array.from... just the difference is here we can merge any type of data like num, array, etc into single array
console.log(Array.of(score1, score2, score3));