function muli(num1, num2,num3,num4){
    return num1 * num2 * num3 * num4
}

const calc = muli(5,2,3,8)
console.log(calc)


// problem 02

function oddEven(number){
    if(number % 2 !== 0){
        return number * 2
    }
    else{
        return number / 2
    }
}

const ans = oddEven(3)
console.log(ans)


// Problem 03

const numbers = [10,5,6,20,25]

function make_avg(arr){
    let sum = 0
    for(const num of arr){
        sum += num
    }
    const len = arr.length
    const avg = sum / len
    return avg
}

const avg = make_avg(numbers)
console.log(avg)


// problem 04

const binary = "010010111"

function count_zero(number){
    let count = 0
    for(const num of number){
        if(num === "0"){
            count++
        }
    }
    return count
}

const binaryNum = count_zero(binary)
console.log(binaryNum)


// Problem 05

function odd_even(number){
    if(number % 2 === 0){
        return "Even"
    }
    else{
        return "Odd"
    }
}

const value = odd_even(3)
console.log(value)