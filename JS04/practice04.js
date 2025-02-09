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


// ****************** While loop ************************


let n = 1

while(n <= 60){
    console.log("I will invest at least 6 hrs every single day for next 60 days!")
    n++;
}


let o = 61;

while(o <= 100){
    if(o % 2 === 1){
        console.log(o)
    }
    o++
}


let e = 78

while(e <= 98){
    if(e % 2 === 0){
        console.log(e)
    }
    e++
}


let so = 81;
let summ = 0

while(so <= 131){
    if(so % 2 === 1){
        summ += so
    }
    so++

}
console.log("Sum of odd number in while",summ)


let se = 206
let summm = 0

while(se <= 311){
    if(se % 2 === 0){
        summm += se
    }
    se++;
}
console.log("Sum of even number in while",summm)


let table = 1;

while ( table <= 10){
    console.log( 9 * table)
    table++
}


let countDown = 21

while(countDown >= 15){
    console.log(countDown)
    countDown--
}




// ****************** continue ****************************


for(let i = 1; i <= 40; i++){
    if(i % 2 !== 0){
        continue
    }
    console.log(i)
}

for(let i = 55; i <= 85; i++){
    if(i % 5 === 0){
        continue
    }
    console.log(i)
}



// *************** Break ***********************

for(let i = 1; i <= 200; i++){
    if(i === 100){
        break
    }
    console.log(i)
}

for(let i = 1; i <= 100; i++){
    if(Math.sqrt(i) % 1 === 0){
        break;
    }
    console.log(i)
}

for (let i = 1; i <= 100; i++) {
    if (i > 1 && Math.sqrt(i) % 1 === 0){ 
        console.log("Stopped at square number:", i);
        break;
    }
    console.log(i);
}