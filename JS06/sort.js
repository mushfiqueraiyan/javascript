const person = ["Rakib", "sakib", "Akib", "Nokib"];

const sortedPerson = person.sort()

console.log(sortedPerson)


const numbers = [4,7,12,8,43,6,1]

// const number_asc = numbers.sort() // not working 
const number_asc = [...numbers].sort(function (a, b){
    return a - b
})  
const number_dsc = [...numbers].sort(function (a, b){
    return b - a
})  

console.log(number_asc)
console.log(number_dsc)