//object using Constructor
//object created using constructor are singleton objects
//below is the example of singleton object
const tinderUser_1 = new Object()
console.log(tinderUser_1);

//another way to create the object using constructor
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

// when we want to get all the keys, values in single array we use below commands  
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

// entries provide a single array of all key and their value  
console.log(Object.entries(tinderUser));

//when we want to check if the object has the given key or not.... it return boolean value
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//Objects can be nested with another ('n' numbers) of objects
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

//to access the data of firstname and lastname from above nested object we use dot(.)
console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//merging the 2 object into single object
const obj3 = { obj1, obj2 }
// Above method will just copy both the object and paste them into another object which makes the obj3={obj1}+{obj2}
console.log(obj3);

//Merging the objects using object.assign(target,source)
// this method mix of both the object into single object obj5={obj1+obj2}
const obj5 = Object.assign({}, obj1, obj2, obj4)
// this method is rarely used
console.log(obj5);

//merging the object using spread method (obj3={...obj1,...obj2})
// it provide mix of both the object into single object obj6={obj1+obj2}
const obj6 = {...obj1, ...obj2}
console.log(obj6);

// Array of objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "g@gmail.com"
    },
    {
        id: 3,
        email: "i@gmail.com"
    },
]
// Access data from array of objects
users[1].email

// object De-structuring

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

console.log(courseInstructor);

const {courseInstructor: instructor} = course

console.log(instructor);

//API (JSON file)
// Api or json file are just the normal file which contain object without any name
// API object also contain key:value pair like normal objects but the difference is here both key and value are in the string format  
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]