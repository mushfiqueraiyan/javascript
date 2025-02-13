// create a function that will retrun only the even number
// retrun the sum of even numbers

function evenNumbers(numbers){
    let sum = 0
    let evens = []
    for(const number of numbers){
        // console.log(number)
        if(number % 2 === 0){
            evens.push(number)
            sum += number
        }
    }
    console.log(sum)
    return evens
}

const numbers = [5,8,91,24,6]
const even = evenNumbers(numbers)
console.log(even)