// continue means : Skip rest of the code for this iteration
// Break means : I'm done with this loop. loop end


//break
for(let i = 0; i < 15; i++){
    console.log(i)
    if( i >= 10){
        break;
    }
}

let n = 55;

while(n > 25){
    console.log(n)
    if(n < 50){
        break
    }
    n--
}


// continue

for(let i = 1;  i < 10; i++){
    if(i % 2 === 1){
        continue;
    }
    console.log(i)
}

// while

let w = 1;

while(w < 50){
    w++
    if(w % 5 !== 0){
        continue;
    }
    console.log(w)
}