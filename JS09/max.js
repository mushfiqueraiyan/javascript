const raiyan = 90
const jhankar = 20;

if(raiyan > jhankar){
    console.log("Raiyan will eat the strawberry")
}
else{
    console.log("Jhankar will eat this strawberry")
}

// inside a function


function getMax(num1, num2){
    if(num1 > num2){
        return num1
    }
    else{
        return num2
    }
}

const number = getMax(20,10)
console.log(number)


