const mobile = {
    brand: "Samsung",
    price: 25000,
    color: "Black",
    camera: "22MP"
}

// for of : is run in array
// for in : is run in object

for(const prop in mobile){
    // console.log(prop) // returns the key
    console.log(mobile[prop]) // returns the value
}