// Usage of This keyword is limited to the global scope of the data else it will give an undefined in the ans 
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
 
// here we have changed the username which is inside the global scope of the this keyword hense it will work in with the new username
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this);

// if we use the this keyword outside the global scope of the code it will return the metadata of the site like global charcter of the site..., etc 


//Ways to create a function
// type 1

function chai(){
    let username = "hitesh"
    console.log(this.username);
}

chai()

// type 2
const chai_1 = function () {
    let username = "hitesh"
    console.log(this.username);
}
chai_1()

const chai_2 =  () => {
    let username = "hitesh"
    console.log(this);
}

chai_2()

//using arrow function
const addTwoNo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwoNo(3, 4))

// Using arrow finction implesently i.e using less syntax removing keyword like return and not using {} 
const addTwo_num = (num1, num2) =>  num1 + num2
console.log(addTwo_num(3, 4))

// we can also use the implesent version in  the below type where we have used () to clearly mention the returning data  
const addTwo_var = (num1, num2) => ( num1 + num2 )
console.log(addTwo_var(3, 4))

const nums = (num1, num2) => ({username: "hitesh"})
// As the returning data is an object it return the whole key-value pair in the console
console.log(nums(3,5));