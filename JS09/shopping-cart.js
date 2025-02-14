const products = [
  {
    name: "Shampoo",
    price: 300,
    quantity:2
  },
  {
    name: "chiruni",
    price: 100,
    quantity:3
  },
  {
    name: "Shirt",
    price: 700,
    quantity:5
  },
  {
    name: "Pant",
    price: 1200,
    quantity:1
  },
];

function getProductPrice(products){
    let total = 0
    for(const product of products){
        const productCost = product.price * product.quantity
        total += productCost
    }
    return total
}

const product = getProductPrice(products)
console.log(product)


