// for

for (let i = 0; i <= 6; i++) {
    const element = i;
    if (element == 3) {
        console.log("3 is best number");
    }
    console.log(element);
    
}

// console.log(element);

for (let i = 1; i <= 3; i++) {
    console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 2; j++) {
    // console.log(`Inner loop value ${j} and inner loop ${i}`);
    console.log(i + '*' + j + ' = ' + i*j );
   }
    
}

let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}


// break and continue

console.log(`Break keyword`);
for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break
    }
   console.log(`Value of i is ${index}`);
    
}

console.log(`Continue Keyword`);
for (let index = 1; index <= 5; index++) {
    if (index == 3) {
        console.log(`Detected 3`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}