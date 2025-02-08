// odd number
for(let i = 0; i < 20; i++){
    if(i % 2 === 1){
        console.log(i)
    }
}

//odd number different way

for(let i = 0; i < 20; i++){
    if(i % 2 !== 0){
        console.log(i)
    }
}

// odd number different ways

for(let i = 1; i < 20; i+=2){
    console.log(i)
}

// give me the list of numbers between 1 to 30 divisible by 5

for (let i = 1; i <=30; i++){
    if(i % 5 === 0){
        console.log(i)
    }
}

// another way for divisible by 3

for (let i = 1; i <=30; i++){
    if(i % 3 === 0){
        console.log(i)
    }
}

// divisble by 3 & 5

for(let i = 0; i <=30; i++){
    if(i % 3 === 0 || i % 5 === 0){
        console.log(i)
    }
}

for(let i = 0; i <=30; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(i)
    }
}


// sum of 1 to 20 that are devisible by 3

let total = 0;

for(let i = 1; i <= 20; i++){
    if(i % 3 === 0){
        console.log(i)
        total += i
    }
}

console.log("Total:", total)