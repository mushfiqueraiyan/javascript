const mobiles = [
    {name : 'Samsung', 
        price: 20000, 
        camera:'12MP'},
    {name : 'Xoami', 
        price: 18000, 
        camera:'12MP'},
    {name : 'Oppo', 
        price: 30000, 
        camera:'12MP'},
    {name : 'Iphone', 
        price: 100000, 
        camera:'12MP'},
    {name : 'Walton', 
        price: 10000, 
        camera:'12MP'},
]

function cheapPrice(phones){
    let min = phones[0]
    for(const phone of phones){
        if(phone.price < min.price){
            min = phone
        }
    }
    return min
}

const cheap = cheapPrice(mobiles)
console.log(cheap)




function kidneyPrice(phones){
    let dami = phones[0]
   for(const phone of phones){
    if(phone.price > dami.price){
        dami = phone
    }
   }
   return dami
}

const kidney = kidneyPrice(mobiles)
console.log(kidney)