const productName = document.getElementById("productName");
const productQtn = document.getElementById("productQtn")
const cartContainer = document.querySelector(".cart-container");


document.getElementById("toggle").addEventListener("click", ()=>{
    cartContainer.classList.toggle("hidden")
  
})

const handleAddToCart = ()=>{

    const name = productName.value 
    const quantity = productQtn.value


    console.log("Product Name: ",name, "Quantity: ",quantity);
    displayProduct(name,quantity)
    handleSetToLocalStorage(name,quantity)

    productName.value = ""
    productQtn.value = ""

}

const displayProduct = (productName, productQtn) => {
    const li = document.createElement("li");
    li.innerText = `Name: ${productName}, Quantity: ${productQtn}`;
    cartContainer.appendChild(li);
};




// local storage

const displayProdLocal = ()=>{
    const products = getProductFromLocalStorage();
    for(const product in products){
        // console.log(product)
        displayProduct(product,products[product])
    }
}


const getProductFromLocalStorage = ()=>{
    let cart = {};
    const getProducts = localStorage.getItem("cart");
    
    if(getProducts){
        cart = JSON.parse(getProducts)
    }
    return cart;
}


const handleSetToLocalStorage = (productName,productQtn)=>{
    // console.log(productName,productQtn)

 const cart = getProductFromLocalStorage();
    cart[productName] = productQtn;
    const cartStringify = JSON.stringify(cart)
    localStorage.setItem("cart",cartStringify)

}


displayProdLocal()