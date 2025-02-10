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