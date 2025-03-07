// const num1  = 10;
// const num2 = "10";
const num1  = [];
// const num2 = [];
const num2 = num1;

if(num1 === num2){ // === equal check data and also data types and == always check the data not the type
    console.log("This is equal Value")
}
else{
    console.log("No this is not equal");
}

console.log(typeof num1)
console.log(typeof num2)