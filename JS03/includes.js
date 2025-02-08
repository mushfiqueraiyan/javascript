// includes

const friends = ["balam", "malam", "dalam", "molam", "gelam"];

console.log(friends.includes("gelam"))
console.log(friends.includes("khailam"))

if(friends.includes("khailam")){
    console.log("Khailam ase re")
}
else{
    console.log("upash takho")
}


// index.of

console.log(friends.indexOf("gelam")) // it will find where is the value and which position it has
console.log(friends.indexOf("tomato")) // return minus value

//is array

const age = 10

console.log(Array.isArray(friends))
console.log(Array.isArray(age))

// console.log(friends.slice(2,4))

// console.log(friends.join(" + "))