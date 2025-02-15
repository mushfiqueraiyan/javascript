function add(num1, num2){
    return num1 + num2;
}

function substract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2
}

function divide(num1, num2){
    return num1 / num2;
}

function calculator(a,b,operation){
    if(operation === 'add'){
        const res = add(a,b)
        return res
    }
    else if(operation === 'subtract'){
        const res = substract(a,b)
        return res
    }
    else if(operation === 'multiply'){
        const res = multiply(a,b);
        return res
    }
    else if(operation === 'divide'){
        const res = divide(a,b)
        return res;
    }
    else{
        return 'Operation is not allowed Error404'
    }
}

const result = calculator(5,7, "multiply")
console.log(result)