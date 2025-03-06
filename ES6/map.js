const number = [1,2,3,4,5,6,7];

const newNumbers = number.map(value => {
    return value + 1;
});
console.log(newNumbers)


const newSqr = number.map((value)=>{
   return value * value
})

console.log(newSqr)


const friends = ['Korim', 'Rohim', 'Raiyan', 'Mushfique'];

const newFriends = friends.map((friend, index)=>{
    console.log(index);
    return friend
})

console.log(newFriends)


const products = [
  {
    id: 1,
    name: "Iphone",
    color: "Black",
    price: 1200,
  },
  {
    id: 2,
    name: "Samsung",
    color: "white",
    price: 1000,
  },
  {
    id: 3,
    name: "Huwaue",
    color: "blue",
    price: 1400,
  },
  {
    id: 4,
    name: "Xiaomi",
    color: "Black",
    price: 1100,
  },
  {
    id: 4,
    name: "Motorola",
    color: "Black",
    price: 1100,
  },
];


const newProducts = products.map(product =>{
    if(product.name === "Iphone"){
        product.price += 100;
    }
    return product
})

console.log(newProducts)