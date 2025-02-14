const prices = [20000, 16000, 50000, 100000, 12000, 30000, 35000]

function lowestPrice(prices){
    let lowest = prices[0]
   for(const price of prices){
    if(price < lowest ){
        lowest = price
    }
   }
   return lowest
}

const allPrice = lowestPrice(prices)
console.log(allPrice)