//Pracitce 01

let fruits = ["Apple", "Banana", "Orange", "Mango"];
console.log(fruits[3])

fruits[2] = "Jambura"
console.log(fruits)

//Practice 02

let destinations = ["Sylhet", "Dhaka", "Cox-bazar"]

destinations.push("London", "Germany", "Thailand")
destinations.pop()

console.log(destinations)


//Practice 03

let books = ["Rich Dad", "Atomic Habit", "Mindset", "Psycology of Money", "Javascript Book"]

if(books.includes("Javascript Book")){
    console.log("Yes We found a Javascript Book Here")
} else {
    console.log("Opps! There are no Javascript Book Here")
}

// Practice 04

let arr = [1,3,4,5,6,76]
let noarr = "Not an Array";

console.log(Array.isArray(arr))
console.log(Array.isArray(noarr))

if(Array.isArray(arr)){
    console.log("Yes its an Array")
} else {
    console.log("No its not an array")
}

if(Array.isArray(noarr)){
    console.log("Its an Array")
}
else {
    console.log("No its not an array")
}

// Practice 05

let game = ["Pubg", "Valorant", 'Chained Together', "Doors"]
let subject = ["Math", "Physics", "Chemistry", "Higher Math"]

console.log(game)
console.log(subject)

let together = game.concat(subject)
console.log(together)
