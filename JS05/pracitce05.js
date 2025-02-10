let num = "$249";
let number = num.split("")
console.log(number)

let sum = 0

for(let i = 0; i < number.length; i++){
    let value = parseInt(number[i]);
    if(!isNaN(value) && value !== ""){
        sum += value;
    }
}
console.log(sum)


//Problem 02

const products = [
    {
        name: "Laptop", 
        category: "Electronics"
    },
    {
        name: "T-shirt",
        category: "Clothing"
    },
    {
        name: "Phone",
        category: "Electronics"
    },
    {
        name: "Jeans",
        category: "Clothing"
    }
]

let defineValue = {
    Electronics : [],
    Clothing: []
}

for(let i = 0; i < products.length; i++){
    let items = products[i]

    if (items.category === "Electronics") {
      defineValue.Electronics.push(items.name);
    } else if (items.category === "Clothing") {
      defineValue.Clothing.push(items.name);
    }
    console.log(defineValue)
}


// Problem 03

let arr = ["Laptop", "Phone", "Tabs", "Phone", "TV", "Laptop"]
let noDupli = []

for(let i = 0; i < arr.length; i++){
    let elements = arr[i];

    if(!noDupli.includes(elements)){
        noDupli.push(elements)
    }
}

console.log(noDupli)


// Problem 04

let des = "Lightweight and durable backpack"

let rev = des.split(" ").reverse().join(" ")

console.log(rev)


// Problem 05

const colors = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  "golden rod": "#daa520",
};

console.log(colors['golden rod'])

// problem 06
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  'passenger capacity': 5,
};

// Problem 07

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};

console.log(student.physics.marks)


// Problem 08

let students = {
  name: "Ariana Grande",
  age: 21,
  city: "Gaibandha",
  isStudent: true,
};

const stukey = Object.keys(students)
console.log(stukey.length)

// problem 09

let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};

const obj = Object.keys(myObject)

for(const myObj in myObject){
    console.log("Key:", myObj,"|", "Type:", typeof myObject[myObj]) // typeof(myObj) returns "string" for all keys because myObj is a key (a string), not the actual value. Fix: To get the correct type of the value, use typeof myObject[myObj] instead of typeof(myObj).

}

// Problem 10

const fruit = "Banana"
let count = 0

for(let i = 0; i< fruit.length; i++){
    if(fruit[i] === "a"){
        count++
    }
}
console.log(count)


// problem 11

const letCount = "AappaleA"
let cnt = 0

for(let i = 0; i < letCount.length; i++){
    if(letCount[i] === "a" || letCount[i] === "A"){
        cnt++
    }
}

console.log(cnt)

// Problem 12

let name = "abeirobu"
let check = 0

for(const nam of name){
    if(nam === "a" || nam === "e" || nam == "i" || nam === "o" || nam === "u"){
        console.log("There is a vowel")
    }
    else{
        console.log("There are no vowel")
    }
}


/// Problem 13

const change = "BanaxnaX"

let newChange = change.replaceAll("x", "y")

console.log(newChange)


// Problem 14

const rai = "raiyan"

const newrai = rai.charAt(0).toUpperCase(1) + rai.slice(1)
console.log(newrai)