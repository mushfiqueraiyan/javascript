const colors = ["red", "blue", "green", "yellow", "orange"];
let arr = []

for(let i = colors.length -1; i >= 0; i--){
    let color = colors[i]
    arr.push(color)
}

console.log(arr)


// Problem 02

const numbers = [12, 98, 5, 41, 23, 78, 46];
let even = []

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        even.push(numbers[i])
    }
}

console.log(even)


// Problem 03

let names = ["Tom", "Tim", "Tin", "Tik"];
let together = '';

for(const name of names){
   together += name
}

console.log(together)


// problem 04

const statement = "I am a hard working person";

let rev = statement.split(" ").reverse().join(" ")

console.log(rev)
console.log(typeof rev);