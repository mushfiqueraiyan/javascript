const numbers = [45,65,23,98,19]

for(let i = 0; i < numbers.length; i++){
    const number = numbers[i]
    console.log(number)
}

console.log("------------------------------")

//Easy method and we should use this

for(const number of numbers){
    console.log(number)
}


const products = [
    {
        id: 1,
        name: "Realme Phone",
        price: 25000
    },
    {
        id: 2,
        name: "Redmi Phone",
        price: 10000
    },
    {
        id: 3,
        name: "Apple Phone",
        price: 19000
    },
    {
        id: 4,
        name: "Samsung Phone",
        price: 109000
    },
    {
        id: 5,
        name: "Mack Book Air",
        price: 90000
    }
]

// for(const product of products){
//     console.log(product.name)
// }

console.log("------------------------------");


function matchedProducts(products, search){
    const matched =[]
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product.name)
        }
    }
    return matched
}

const result = matchedProducts(products, 'book')
console.log(result)