const products  = [
    {
        id:1, 
        name: "Iphone",
        color: "Black",
        price: 1200
    },
    {
        id:2, 
        name: "Samsung",
        color: "white",
        price: 1000
    },
    {
        id:3, 
        name: "Huwaue",
        color: "blue",
        price: 1400
    },
    {
        id:4, 
        name: "Xiaomi",
        color: "Black",
        price: 1100
    },
    {
        id:4, 
        name: "Motorola",
        color: "Black",
        price: 1100
    },
]

//forEach
products.forEach(product =>{
    if(product.color === 'white'){
        console.log(product)
    }
})

// filter

const newProducts =  products.filter(product =>{
    return product.price > 1100
})
console.log(newProducts)


const anotherProducts = products.filter(product =>{
    return product.id !== 3;
})

console.log(anotherProducts)


// find

const product = products.find(p =>{
    return p.id === 4;
})

console.log(product)

