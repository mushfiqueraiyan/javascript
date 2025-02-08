// For loop Practice Problem 01

for(let i = 0; i <= 60; i++){
    console.log("I will invest at least 6 hrs every single day for next 60 days!")
}

// For loop Practice Problem 02

// odd numbers from 61 to 100

for(let i = 61; i <= 100; i++){
    if( i % 2 !== 0){
        console.log(i)
    }
}

//even number from 78 to 98

for(let i = 78; i <= 98; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}


// For loop Practice Problem 03

// Sum of all the odd numbers from 91 to 129

let sum = 0;

for(let i = 91; i <= 129; i++){
    if(i % 2 !== 0){
        sum += i
    }
}

console.log("Sum of the Odd Numbers:", sum)

// Sum of all the even numbers from 51 to 85

let sum2 = 0;

for(let i = 51; i <= 85; i++){
    if(i % 2 === 0){
        sum2 += i;
    }
}

console.log("Sum of the even numbers:", sum2)


// For loop Practice Problem 04

for(let i = 1; i <= 10; i++){
    console.log(`9 X ${i} =`, 9 * i)
}


// For Loop Practice Problem 05

for(let i = 81; i >= 65; i--){
    console.log(i)
}