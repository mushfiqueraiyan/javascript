function multiply(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please provide a valid number'
    }
    const multi = num1 * num2
    return multi
}

const result = multiply(5, 7)
console.log(result)


/**************************** */
function fullName(first, last){
    if(typeof first !== 'string' || typeof last !== 'string'){
        return 'Please enter a valid name'
    }
    const full = first + ' ' + last
    return full
}

const res = fullName('Mushfique', "Raiyan")
const res2 = fullName('Mushfique2', 7)
console.log(res)
console.log(res2)

//**************************** */
function getSecond(numbers){
    if(Array.isArray(numbers) === false){
        return 'please provide an array'
    }
    const second = numbers[1]
    return second
}

const num = getSecond([10,20,30,40,50,70])
console.log(num)