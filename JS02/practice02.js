// Practice Problem 01
let burger = 400

if (burger > 500){
    console.log("You will get a Free coke")
}
else{
    console.log("If you need a coke then you have to pay 30 tk")
}

// Practice Problem 02

let weight = 30;
let height = 1.60
let bmi = weight / (height ** 2)

// console.log(bmi)

if(bmi < 18.5){
    console.log("you are under weight")
}
else if( bmi >= 18.5 && bmi <= 24.9){
    console.log("You are normal")
}
else if(bmi >= 25 && bmi <= 29.9){
    console.log("you are overweight")
}
else{
    console.log("you are obese")
}

// Practice problem 03

let num1 = 20
let num2 = 15

let result = num1 > num2 ? num1 * 2 : num1 + num2
console.log(result)

