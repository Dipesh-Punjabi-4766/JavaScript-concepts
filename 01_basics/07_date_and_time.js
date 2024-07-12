// Dates

//Acc to standards of ECMA and builder of JS, the arbitary date from which the date and time(in milliseceond) is calculated is 01 january 1970
let myDate = new Date()

// Forms of displaying the date using pribuild functions
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

// type of date is object
console.log(typeof myDate);

//Declration of the date  
let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate);

//Declration of the date and time
// In Js,the counting of month start from 0 if we declare the the month in single digit i.e 0 month is january... but if we declare the month in two digit like 01,02 -->the counting of month start from 01 => i.e 01 is january, 02 is feb     

let myCreatedDate1 = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate1);
//Declration of the date in american way yyyy-mm-dd 
let myCreatedDate2 = new Date("2023-01-14")
console.log(myCreatedDate2);
//Declration of the date in indian way mm-dd-yyyy
let myCreatedDate3 = new Date("01-14-2023")
console.log(myCreatedDate3);
//Displaying the date using pribuild functions
console.log(myCreatedDate1.toLocaleString());

//displaying the current date of the the system
let myTimeStamp = Date.now()

//Calculating the time from arbitory date and time till present date and time in millisecond(ms)
console.log(myTimeStamp);

//Calculating the time from arbitory date and time till created date and time in millisecond(ms)
console.log(myCreatedDate1.getTime());

// Converting the time calculated by js from ms to sec
console.log(Math.floor(Date.now()/1000));

//Declaration of new date
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

//Customizing toLocalString pribuild function
console.log(newDate.toLocaleString('default', {
    weekday: "long"
    
}));
