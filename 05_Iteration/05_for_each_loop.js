
const coding_1 = ["js", "ruby", "java", "python", "cpp"]
coding_1.forEach( function (val){
    console.log(val);
} )

const coding_2 = ["js", "ruby", "java", "python", "cpp"]
coding_1.forEach( (item) => {
    console.log(item);
} )

function printMe(item){
    console.log(item);
}

coding_1.forEach(printMe)

coding_1.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )

// For Each loop on arr containing various object 
// [{},{},{}]
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )