const products = [
    {
        name: 'Shampoo',
        price: 300
    },
    {
        name: 'chiruni',
        price: 100
    },
    {
        name: 'Shirt',
        price: 700
    },
    {
        name: 'Pant',
        price: 1200
    },
] 


function numberOfSum(prices){
    let sum = 0
    for(const price of prices){
       let allPrice = price.price
       sum += allPrice
    }
    return sum
}

const product = numberOfSum(products)
console.log(product)